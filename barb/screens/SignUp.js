import React, {useState, useEffect, useContext} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import css from '../assets/css/Css'
import SignInput from "../componentes/SignInput";
import { useNavigation } from "@react-navigation/native";
import Api from '../Api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserContext from '../contexts/UserContext'




export  default  function App2(){

 
    //CRIAR DISPAPTCH (vou chamar de UserDispatch) PARA ENVIAR INFORMAÇÂO PARA O CONTEXT
    const dispatch = useContext(UserContext) ;
   //Função de NAVEGAÇÃO
   const navigation=useNavigation();


   //Função de state
      const [nameField, setNameField] = useState('');
      const [emailField, setEmailField] = useState('');
      const [passwordField, setPasswordField] = useState('');

      
   //Função de redirecionamento

        const handleSignClick =  async()=> { 
         if(nameField !== '' && emailField !== '' && passwordField !== '' ) {
            // RECEBER A RESPOSTA (podia ser let res)
            let res = await Api.signUp(nameField, emailField, passwordField );
           // console.log(res);
            // Verifica A RESPOSTA
            if (res.token){
               //alert('DEU CERTO');
             
               // SALVAR TOKEN , pega ele e manda como json.token para AsyncStorage
                   await AsyncStorage.setItem('token', res.token);
                 //ALEM DO TOKEM TEMOS OUTRAS INFORMAÇÂO no (data), VAMOS MANDAR TAMBEM , ex:avatar para colocar no context
                 //MANDAR INFORMAÇÔES PARA O CONTEXT ATRAVES DO dispatch
                 dispatch ({
                    type: 'setAvatar', 
                    payload:{
                       avatar: res.data.avatar
                    }
                 });

                  //JA DE POSSE E SALVO AS INFORMAÇÔES MANDAR O USUARIO PARA AS TELAS
                  navigation.reset({
                   routes:[{name: 'MainTab'}]
                  });

            }else{
               alert("Erro :"+res.error);
            }

         }else{
            alert ('Preencha os campos');

         }
        }

   
         const handleMessageButtonClick = ()=> { 
             // NAVEGAR POR ROUTER
            //navigation.navigate('SignUp');
          // handleMessageButtonClick();
             navigation.navigate({ 
               routes:[{name: 'SignIn'}]
            });
           /*
            onPress= ()=>{SignUp}  
                
           onPress={()=>{navigation.navigate("Home")}}  */
         }

    return(
      
      <View style={css.headerdois}>
      
         <Image style={css.header__img} source={require('../assets/images/barber.png')} />
       
         <View style={css.inputArea}>

            <SignInput IconPng={Envelope}
             placeholder="Digite seu Nome"
             value={nameField}
             onChangeText={t=>setNameField(t)}
             /> 

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
              <Text style={css.button__text}  >CADASTRAR</Text>
           </TouchableOpacity> 
           </View>

           <TouchableOpacity  style={css.CustonMessageButton} onPress={handleMessageButtonClick} >
            <Text style={css.TextCuston} >Já tem cadastro </Text>
            <Text style={css.TextCustonBold} > Faça Login </Text>
           </TouchableOpacity>

        </View>
    
    );
}
