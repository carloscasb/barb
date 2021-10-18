import React, {useState, useContext} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import css from '../assets/css/Css'
import SignInput from "../componentes/SignInput";
import { useNavigation } from "@react-navigation/native";
import Api from '../Api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserContext from '../contexts/UserContext'





export  default  function Login(){

   //CRIAR DISPAPTCH (vou chamar de UserDispatch) PARA ENVIAR INFORMAÇÂO PARA O CONTEXT
   const dispatch = useContext(UserContext);
    
   //Função de NAVEGAÇÃO
   const navigation = useNavigation();


   //Função de state
      const [emailField, setEmailField] = useState('');
      const [passwordField, setPasswordField] = useState('');

      
   //Função de redirecionamento

        const handleSignClick = async ()=> { 
            // Se apertou botao de login verifivar se colocou email e senha
            if(emailField !== '' && passwordField !== '' ) {
               // RECEBER A RESPOSTA (podia ser let res)
               let json = await Api.signIn(emailField, passwordField );
              // console.log(json);
               // Verifica A RESPOSTA
               if (json.token){
                 // alert('DEU CERTO');
                    
                 // SALVAR TOKEN , pega ele e manda como json.token para AsyncStorage
                     await AsyncStorage.setItem('token', json.token);
                   //ALEM DO TOKEM TEMOS OUTRAS INFORMAÇÂO no (data), VAMOS MANDAR TAMBEM , ex:avatar para colocar no context
                   //MANDAR INFORMAÇÔES PARA O CONTEXT ATRAVES DO dispatch
                   dispatch ({
                      type: 'setAvatar', 
                      payload:{
                         avatar: json.data.avatar
                      }
                   });

                    //JA DE POSSE E SALVO AS INFORMAÇÔES MANDAR O USUARIO PARA AS TELAS
                    navigation.reset({
                
                     routes:[{name: 'MainTab'}]
                    });

               }else{
                  alert('Email e ou senha errado');
               }

            }else{
               alert ('Preencha os campos');

            }
        }

   
         const handleMessageButtonClick = ()=> { 
              // // NAVEGAR POR ROUTER (reset - não deixa voltar)
              navigation.reset({ 
                index:0,
               routes:[{name: 'SignUp'}]
                
            });
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

           <TouchableOpacity  style={css.CustonMessageButton}    onPress={handleMessageButtonClick}    >
            <Text style={css.TextCuston} > Ainda sem cadastro </Text>
            <Text style={css.TextCustonBold} > Cadastre-se </Text>
           </TouchableOpacity>

        </View>
    
    );
}
