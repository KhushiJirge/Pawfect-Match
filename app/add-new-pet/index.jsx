import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '../../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import * as ImagePicker from 'expo-image-picker';



export default function AddNewPet() {
    const navigation = useNavigation();
    const [formData, setFormData] = useState();
    const [gender, setGender] = useState();
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [image, setImage]= useState();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Add New Pet'
        })
        GetCategories();
    }, [])

    const GetCategories = async () => {
        setCategoryList([]);
        const snapshot = await getDocs(collection(db, 'Category'))
        snapshot.forEach((doc) => {
            setCategoryList(categoryList => [...categoryList, doc.data()])
        })
    }

    const imagePicker=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
        console.log(result);
    
        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    }

    const handleInputChange = (fieldName, fieldValue) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    const onSubmit=async()=>{
        console.log(formData)
    }

    return (
        <ScrollView style={{
            padding: 20,

        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 20
            }}>Add New Pet for Adoption</Text>

            <Pressable onPress={imagePicker}>
                
            {!image? <Image source={require('./../../assets/images/placeholder.png')}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: Colors.GRAY
                }} />:
                <Image source={{uri:image}} style={{
                    width: 100,
                    height: 100,
                    borderRadius: 15,
}}
                />}
            </Pressable>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Pet Name *</Text>
                <TextInput style={styles.input} onChangeText={(value) => handleInputChange('name', value)} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Pet Category *</Text>
                <Picker
                    style={styles.input}
                    selectedValue={selectedCategory}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedCategory(itemValue);
                        handleInputChange('category', itemValue)
                    }}>
                        {categoryList.map((category, index)=>(
                            <Picker.Item key={index} label={category.name} value={category.name} />
                        ))}
                    
                </Picker>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Breed *</Text>
                <TextInput style={styles.input} onChangeText={(value) => handleInputChange('breed', value)} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Age *</Text>
                <TextInput style={styles.input} onChangeText={(value) => handleInputChange('age', value)} />
            </View>


            <View style={styles.inputContainer}>
                <Text style={styles.label}>Gender *</Text>
                <Picker
                    style={styles.input}
                    selectedValue={gender}
                    onValueChange={(itemValue, itemIndex) => {
                        setGender(itemValue);
                        handleInputChange('sex', itemValue)
                    }}>
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                </Picker>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Weight *</Text>
                <TextInput style={styles.input} onChangeText={(value) => handleInputChange('weight', value)} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Address *</Text>
                <TextInput style={styles.input} onChangeText={(value) => handleInputChange('address', value)} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>About *</Text>
                <TextInput style={styles.input}
                    numberOfLines={5}
                    multiline={true}
                    onChangeText={(value) => handleInputChange('about', value)} />
            </View>


            <TouchableOpacity style={styles.button}
            onPress={onSubmit}>
                <Text style={{ fontFamily: 'outfit-medium', textAlign: 'center' }}>Submit</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 5
    },
    input: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 7,
        fontFamily: 'outfit'
    },
    label: {
        marginVertical: 5,
        fontFamily: 'outfit'
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 7,
        marginVertical: 10,
        marginBottom:50
    }
})