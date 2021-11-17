import React from 'react';
import { View, Text } from 'react-native';



export default function carts({route,navigation}) {
    const data = route.params;
    console.log(data);
    return (
        
        <View>
             

            <Text>{data.about}</Text>
            <Text>{data.name}</Text>
            <Text>{data.price}</Text>
        </View>
    )
}