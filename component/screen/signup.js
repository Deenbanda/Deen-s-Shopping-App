import React from 'react';
import { View, Text, Image, TextInput, TouchableNativeFeedbackBase } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function signup() {
    return (
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <Image
            style={{
                width: 300,
                height: 150,
                borderRadius: 20,
                marginBottom: 30
            }}
            source={{uri: "https://www.pngall.com/wp-content/uploads/11/Tuning-Car-PNG-Photo.png"}}
            />
            <Text style={{fontSize: 15, fontStyle: "italic"}}>Welcome to</Text>
            <Text style={{fontSize: 25, fontWeight: 600, marginBottom: 20}}>Deen AutoMobile</Text>
            <Text 
                style={{
                    backgroundColor: "black", 
                    color: "white", 
                    padding: 10, 
                    paddingHorizontal: 40, 
                    borderRadius: 20, 
                    marginBottom: 20
                    }}>
                    SignUp WITH GMAIL</Text>
            <View style={{flexDirection: "row", borderBottomWidth: 2, marginBottom: 10}}>
                <FontAwesome name="user-o" color="#05375a" size={20} />
                <TextInput
                    style={{marginLeft: 20}}
                    placeholder="Name" 
                    autoCapitalize="none"
                />
            </View>
            <View style={{flexDirection: "row", borderBottomWidth: 2}}>
                <AntDesign name="mail" color="#05375a" size={20} />
                <TextInput
                    style={{marginLeft: 20}}
                    placeholder="Email" 
                    autoCapitalize="none"
                />
            </View>
            <View style={{flexDirection: "row", marginTop: 10, marginBottom: 10, borderBottomWidth: 2}}>
                <FontAwesome name="lock" color="#05375a" size={20} />
                <TextInput 
                    style={{marginLeft:20,}} 
                    secureTextEntry={true} 
                    placeholder="Password" 
                    autoCapitalize="none"
                    />
            </View>
            <TouchableOpacity>
                <Text 
                    style={{
                        backgroundColor: "black", 
                        color: "white", 
                        padding: 10, 
                        paddingHorizontal: 40, 
                        borderRadius: 20, 
                        marginBottom: 20
                    }}>
                    SignUp
                </Text>
            </TouchableOpacity>
        </View>
            
    )
}