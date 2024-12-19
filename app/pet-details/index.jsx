import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import Colors from '../../constants/Colors';

export default function index() {
    const pet=useLocalSearchParams();
    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])
  return (
    <View>
        <ScrollView>
      <PetInfo pet={pet}/>
      <PetSubInfo pet={pet}/>
      <AboutPet pet={pet}/>
      <OwnerInfo pet={pet}/>
      <View style={{height:70}}></View>
      
      </ScrollView>
      <View  style={{
        position:'absolute',
        width:'100%',
        bottom:0
        
        }}>
        <TouchableOpacity style={{
            padding:15,
            backgroundColor:Colors.PRIMARY
        }}>
            <Text style={{
                textAlign:'center',
                fontFamily:'outfit-medium',
                fontSize:20,
                
            }}>Adopt Me</Text>
        </TouchableOpacity>
        </View>
      
    </View>
  )
}