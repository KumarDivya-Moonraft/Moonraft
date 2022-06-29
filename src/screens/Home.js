import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{ Component, useContext, useEffect, useState } from 'react';
import { Button, Text,View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import AppContext from '../context/AppContext';
import { addPlace } from '../store/actions/place';

const Home=(props)=>{
  const [localPlace,setLocalPlace]=useState('');
  const reduxState= useSelector(state=>state);
  console.log(reduxState);
  const dispatch= useDispatch();

  return(
    <View>
      {
        reduxState.place.places.map((p)=>(<Text>{p}</Text>))
      }
      <TextInput onChangeText={(text)=>setLocalPlace(text)} placeholder='Enter your place' style={{ height:40, borderWidth:1,margin:5,borderRadius:5,padding:5  }}/>
      <Button  title='Add Place' onPress={()=>{
        dispatch(addPlace(localPlace));
      }}/>
    </View>
  )
}

export default Home;
