import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Shared from '../../Shared/Shared'
import { useUser } from '@clerk/clerk-expo'
import { collection, getDocs, query, where } from 'firebase/firestore'; // added where and getDocs
import PetListItem from '../../components/Home/PetListItem';
import { db } from './../../config/FirebaseConfig'


export default function Favorite() {
  const {user}= useUser();
  const [favIds, setFavIds] = useState([]);
  const [favPetList, setFavPetList] = useState([]);
  const [loader, setLoader]= useState(false);

  useEffect(()=>{
    user&&GetFavPetIds();
  }, [user])

  const GetFavPetIds=async()=>{
    setLoader(true);
    const result = await Shared.GetFavList(user); 
    setFavIds(result?.favs);
    setLoader(false);
    GetFavPetList(result?.favs);
  }

  const GetFavPetList=async(fav_id)=>{
    setLoader(true);
    setFavPetList([]);
    const q=query(collection(db, 'Pets'), where('id', 'in', fav_id));
    const querySnapshot=await getDocs(q);

    querySnapshot.forEach((doc)=>{
      console.log(doc.data());
      setFavPetList(prev=>[...prev, doc.data()])
    })
    setLoader(false);
  }

  return (
    <View style={{
      padding:20,
      marginTop:20,

    }}>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:30
      }}>Favorites</Text>

      <FlatList 
      data={favPetList}
      numColumns={2}
      onRefresh={GetFavPetIds}
      refreshing={loader}
      renderItem={({item, index})=>(
        <View>
          <PetListItem pet={item} />
        </View>
      )}
      />

    </View>
  )
}