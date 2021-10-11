import React, {useEffect} from "react";
import { StyleSheet,  View, Text, TouchableOpacity, loadingIcon, Image} from 'react-native';
import css, {LoadingIcon} from '../assets/css/Css'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
//import {  Container, LoadingIcon } from './styles'
//import Cadastro from "./Cadastro";

// RECEBE como paramentro o navigation
export default ()=> {

//VAmos criar uma variavel
const navigation=useNavigation();


// TODA VEZ QUE A TELA ABRIR EXECUTE ESSE CODIGO
useEffect(()=>{
//Verificar token
  const checkToken= async ()=>{
        //Pegar um token se exixtir no aplicativo
         const token = await AsyncStorage.getItem('token');
        
      //  if(token !== null){
            // OU ASSIM
            if(token ){
           // Se não for nulo (se existir) validar token
            
        }else{
            //Se não tiver Token Manda para o login
             navigation.navigate('SignIn');
        }
  }
//Executar
  checkToken();

}, [])


  return (
      <View style={css.container}>

          <View style={css.header}>
              <Image style={css.header__img} source={require('../assets/images/barber.png')} />
              <LoadingIcon size="large" color="#FFFFFF" />
          </View>

          
      </View>
  );
}