import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import {db} from './../../config/FirebaseConfig'

export default function Slider() {

    const [sliderList,setSliderList]=useState([]);
    useEffect(()=>{
        GetSliders();
    }, [])

    const GetSliders=async()=>{
        const snapshot = await getDocs(collection(db, "Sliders"));
        snapshot.forEach((doc)=>{
            console.log(doc.data())
            
            setSliderList(sliderList=>[...sliderList, doc.data()])
        })
    }
  return (
    <View>
      <FlatList
            data={sliderList}
            renderItem={({item,index})=>{
                <View>
                    <Image source={{uri:item?.imageURL}}
                    style={styles?.sliderImage}/>
                </View>
            }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    sliderImage:{
        width:'80%',
        height:160
    }
})