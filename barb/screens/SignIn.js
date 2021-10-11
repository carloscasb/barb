import React from "react";
import { View, Text, Image } from "react-native";
import css from '../assets/css/Css'




export  default  function App1(){
    return(
      <View style={css.headerdois}>
        <Image style={css.header__img} source={require('../assets/images/barber.png')} />
        <Text >Vai dar tudo Certo</Text>
        <Text >Com a bença do Senhor</Text>
        
        </View>
    );
}