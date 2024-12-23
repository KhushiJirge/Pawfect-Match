import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import PetSubInfoCard from './PetSubInfoCard'

export default function PetSubInfo({pet}) {
  return (
    <View style={{
        padding:20
    }}>
      <View style={{
        display:'flex',
        flexDirection: 'row'
      }}>
        <PetSubInfoCard 
        icon={require('./../../assets/images/calender.png')}
        title={'Age'}
        value={pet?.age}/>
        <PetSubInfoCard icon={require('./../../assets/images/bone.png')}
        title={'Breed'}
        value={pet?.breed}/>
        
      </View>
      <View style={{
        display:'flex',
        flexDirection: 'row'
      }}>
        <PetSubInfoCard 
        icon={require('./../../assets/images/sex.png')}
        title={'Sex'}
        value={pet?.sex}/>
        <PetSubInfoCard icon={require('./../../assets/images/weght.png')}
        title={'Weight'}
        value={pet?.weight+" kg"}/>
      </View>
    </View>
  )
}