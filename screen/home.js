import React from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import contents from '../contents/contents';
const width = Dimensions.get("screen").width/3-30;


export default function homepage({navigation}){
    const Card = ({content}) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Carts', content)}>
                <View style={{
                        height: 300,
                        backgroundColor: "white",
                        width,
                        borderRadius: 20,
                        marginBottom: 40,
                        borderColor: "black",
                        borderWidth: 3
                    }}>
                    
                    <View 
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#E7DDDA",
                        borderRadius: 15, 
                        width: 25, 
                        height: 25,
                        
                        }}>
                      <MaterialIcons 
                          name="favorite" 
                          size={20} 
                          color={content.favourite ?  "red" : "dark"} />
        
                    </View>
                    <View style={{height: 200, alighItems: "center"}}>
                        <Image source={content.image} style={{flex: 1, resizeMode: "contain"}} />
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text 
                            style={{
                                fontWeight: "bold", 
                                fontWeight: "bold", 
                                marginTop: 10, 
                                color: "black"
                                }}>
                            {content.name}
                        </Text>
                    </View>
                    
                    <View 
                        style={{
                            marginTop: 5,  
                            marginLeft: 7, 
                            marginRight: 7,
                            flexDirection: "row", 
                            justifyContent: "space-between", 
                            }}>
                        <Text style={{color: "black", fontWeight: "bold", }}>Price: {content.price}</Text>
                        <View 
                            style={{backgroundColor: "black", 
                                width: 20, 
                                height: 20, 
                                borderRadius: 5, 
                                justifyContent: 'center', 
                                alignItems: 'center'
                                }}>
                            <AntDesign name="plus" size={24} color="white" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }
    
    return(
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: "white"
            }}>
            <View style={{
                  marginTop: 20,
                  alignItems: "center"
              }}> 
                <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 38, fontWeight: "bold", color: "black", marginRight: 20}}>Deen AutoMobile</Text>
                    <FontAwesome5 name="car" size={40} color="black" />
                </View>
            </View>
          
            <View style={{height: 50,
                    backgroundColor: "black",
                    padding: 10,
                    paddingHorizontal: 20,
                    borderRadius: 15,
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
              <MaterialIcons name="search" size={24} color="white" style={{marginLeft: 20, marginRight: 5}} />
              <TextInput 
              style={{
                flex: 1,
                color: "white",
                fontSize: 18,
                fontWeight: 'bold',
              }}
              placeholder="Search" 
              placeholderTextColor="white"/>
            </View>
            <FlatList 
                columnWrapperStyle={{justifyContent: "space-between"}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    margintBottom: 50
                }}
                numColumns={2}
                data={contents}
                renderItem={({item}) => {
                    return <Card content={item}/>;
                }}
                />
        </SafeAreaView>
    );
};