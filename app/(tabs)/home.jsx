import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import PetListByCategory from '../../components/Home/PetListByCategory'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors'
import { Link } from 'expo-router'

export default function Home() {
  return (
    <View style={{
      padding:20, marginTop:5,
    }}>
      <Header/>
      <Slider/>
      <PetListByCategory/>
      <Link 
      href={'/add-new-pet'}
      style={{
        display:'flex',
        gap:10,
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        marginTop:20,
        textAlign:'center',
        backgroundColor:Colors.LIGHT_PRIMARY,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        borderRadius:15,
        borderStyle:'dashed',
        justifyContent:'center'
      }}>
        <MaterialIcons name="pets" size={24} color={Colors.PRIMARY} />
          <Text style={{
            fontFamily:'outfit-medium',
            color:Colors.PRIMARY,
            fontSize:18
          }}>Add New Pet</Text>
      </Link>
    </View>
  )
}