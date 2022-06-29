import React from 'react';
import { Text,View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const DrawerContent=(props)=>{
  console.log(props);
  return(
    <SafeAreaView style={{ flex:1, backgroundColor:'orange' }}>
      <Text>DrawerContent</Text>
    </SafeAreaView>
  );
}

export default DrawerContent;
