import React, {useEffect, useContext} from "react";
import { StyleSheet,  View, Text, TouchableOpacity, loadingIcon, Image} from 'react-native';
import css, {LoadingIcon} from '../assets/css/Css'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Api from '../Api';
import UserContext from '../contexts/UserContext'
//import {  Container, LoadingIcon } from './styles'
//import Cadastro from "./Cadastro";
//import MainStack from "../stacks/MainStack";
import MainTab from "../stacks/MainTab";



// RECEBE como paramentro o navigation
export default ()=> {

  //CRIAR DISPAPTCH (vou chamar de UserDispatch) PARA ENVIAR INFORMAÇÂO PARA O CONTEXT
  const dispatch = useContext(UserContext);

//VAmos criar uma variavel
const navigation=useNavigation();


// TODA VEZ QUE A TELA ABRIR EXECUTE ESSE CODIGO
useEffect(()=>{
//Verificar token
  const CheckToken= async ()=>{
        //Pegar um token se exixtir no aplicativo
         const token = await AsyncStorage.getItem('token');
        
      //  if(token !== null){
            // OU ASSIM
            if(token ){
           // Se não for nulo (se existir) VALIDAR token
            // MANDA TOKEM
           let res = await Api.ckeckToken (token);
           // SE FUNCIONAR ELE VAI ME MANDAR O CONFIRMAR O TOKEN 
           // VAMOS VERIFICAR ESSE TOKEN
           if (res.token){
             // SE DEU CERTO 
              // SALVAR OU VALIDAR TOKEN , pega ele e manda como json.token para AsyncStorage
              await AsyncStorage.setItem('token', res.token);
              //ALEM DO TOKEM TEMOS OUTRAS INFORMAÇÂO no (data), VAMOS MANDAR TAMBEM , ex:avatar para colocar no context
              //MANDAR INFORMAÇÔES PARA O CONTEXT ATRAVES DO dispatch
              /*
              dispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: res.data.avatar
                        }
                    });*/

               //JA DE POSSE E SALVO AS INFORMAÇÔES MANDAR O USUARIO PARA AS TELAS
               navigation.reset({
                 
                routes:[{name:'MainTab'}]
            });


           }else{
              navigation.navigate('SignIn');
              } 


        }else{
            //Se não tiver Token Manda para o login
             navigation.navigate('SignIn');
        }
  }
//Executar
  CheckToken();

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