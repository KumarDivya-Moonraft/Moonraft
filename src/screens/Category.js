import React, { useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, StyleSheet, TouchableOpacity, Alert, Button, TextInput, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from 'react-redux';
import { images } from "../assets";
import AppContext from '../context/AppContext';

const Category = (props) => {
    const [country, setCountry] = useState('');
    const reduxState = useSelector(state => state);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.headerText}>Top 3 popular bundles</Text>
                    {
                        ["Turkish", 'Continental', 'Chinese'].map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => props.navigation.navigate('Home', {
                                    comment: 'Good food'
                                })}>
                                    <ImageBackground source={images.food} style={{ backgroundColor: 'red', height: 120, borderRadius: 5, overflow: 'hidden', marginVertical: 8, }}>
                                        <LinearGradient colors={['rgba(0,2,5,0.5)', 'rgba(256,256,256,0.5)']} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>{item}</Text>
                                        </LinearGradient>
                                    </ImageBackground>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                {
                    reduxState.place.places.map((p) => (<Text>{p}</Text>))
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default Category;


const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'rgb(85,77,86)',
        paddingVertical: 16,
    }
});