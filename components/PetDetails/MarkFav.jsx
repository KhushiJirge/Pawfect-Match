import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Shared from './../../Shared/Shared'
import { useUser } from '@clerk/clerk-react'


export default function MarkFav() {
    const {user} = useUser();
    const [favList, setFavList] = useState([])
    useEffect(()=>{
        user&&GetFav();
    }, [user])
    const GetFav=async()=>{
        const result = await Shared.GetFavList(user)
        console.log(result)
    }
  return (
    <Pressable>
      <AntDesign name="hearto" size={30} color="black" />
    </Pressable>
  )
}