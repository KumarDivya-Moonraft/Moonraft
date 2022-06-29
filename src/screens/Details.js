import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from "react-native";


const Details = () => {
    const navigation = useNavigation();
    return (
        <>
            <Text style={{ fontSize: 22 }}>Details</Text>
            <Text onPress={() => navigation.goBack()}>Go Back</Text>
        </>
    );
}

export default Details;
