import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';


export default function OwnerInfo({pet}) {
  return (
    <View style={{
        marginHorizontal:20,
        paddingHorizontal:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        borderWidth:1,
        borderRadius:15,
        padding:10,
        backgroundColor:Colors.WHITE,
        justifyContent:'space-between'
    }}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:20

        }}>
        <Image source={{uri:pet?.userImage}} 
        style={{
            width:50,
            height:50,
            borderRadius:99,
        }}
        />
        <View >
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:17,

            }}>{pet?.username}</Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:17,
                color:Colors.GRAY

            }}>Pet Owner</Text>
        </View>
        </View>
        <Feather name="send" size={24} color="black" />
    </View>
  )
}