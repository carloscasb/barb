import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import css from '../assets/css/Css'
import SignInput from "../../componentes/SignInput";
import { useNavigation } from "@react-navigation/native";

import Envelope from "../assets/images/Envelope.png";
import Cadeado from  "../assets/images/Cadeado.png";


export  default  function App1(){


   //Função de NAVEGAÇÃO
      const navigation = useNavigation();


   //Função de state
      const [emailField, setEmailField] = useState('carlos@gloa');
      const [passwordField, setPasswordField] = useState('');

      
   //Função de redirecionamento

        const handleSignClick= ()=> { 

        }

   
         const handleMessageButtonClick= ()=> { 
            // NAVEGAR POR ROUTER
            navigation.navigate({name:'SignUp'})
           

         }

    return(
      
      <View style={css.headerdois}>
      
         <Image style={css.header__img} source={require('../assets/images/barber.png')} />
       
         <View style={css.inputArea}>
         
             <SignInput IconPng={Envelope}
             placeholder="Digite seu Email"
             value={emailField}
             onChangeText={t=>setEmailField(t)}
             /> 
              
              <SignInput IconPng={Cadeado}
              placeholder="Digite Sua Senha"
              value={passwordField}
              onChangeText={t=>setPasswordField(t)}
              password={true}
              />

           <TouchableOpacity style={css.CustonButton} onPress={handleSignClick} >
              <Text style={css.button__text}  >Login</Text>
           </TouchableOpacity> 
           </View>

           <TouchableOpacity  style={css.CustonMessageButton} onPress={handleMessageButtonClick} >
            <Text style={css.TextCuston} > Ainda sem cadastro </Text>
            <Text style={css.TextCustonBold} > Cadastre-se </Text>
           </TouchableOpacity>

        </View>
    
    );
}
