import React, {useState} from "react";
import {View, StyleSheet, Text, Image, TextInput}   from "react-native";

const estilos = StyleSheet.create({

    ImputArea:{
        with:'100%',
        height:60,
         backgroundColor:'#83D6E3',
         flexDirection:'row', 
         borderRadius:30,
         paddingLeft:15,
         alignItems:'center',
         marginBottom:15
       
        },

        TextImput2:{
            flex:1,
            fontSize:16,
            color:'#268596',
            marginLeft:15
        }
    });




   // <IconPng  with="24" height="24" fill="#268596" />

export default ({IconPng, placeholder, value, onChangeText, password} )=>{

return (
  <View style={estilos.ImputArea} > 

    <TextInput style={estilos.TextImput2}
     placeholder={placeholder} 
     value={value}
     onChangeText={onChangeText}
    secureTextEntry={password}
    />
   
  </View>

);
}


