import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import { StackActions } from "@react-navigation/routers";

//VAMOS Criar nossa PILHA que vai receber o retorno do createStackNavigator(pilha de navegação)
const Stack=createStackNavigator();

// IMPORTAR AS TELAS PARA SEREM USADAS NA PILHA
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignIn';

import MainTab from "./MainTab";

export default ()=>{

  return (
    //VAMOS Criar uma pilha de telas (As que usaremos nessa pilha)
  <Stack.Navigator>
               <Stack.Screen  // EXIBINDO uma tela Preload ---vai ficar um de cada vez (DEFINR A PRIMEIRA EM  <Stack.Navigator initialRouteName="Preload">)
                name="Preload"
                component={Preload}  // tem que criar esse componente
                options={{title:'Tela inicial'}}
                />

                <Stack.Screen   name="SignIn"   component={SignIn}  /* tem que criar esse componente  */   options={{title:'Tela signInl'}} />
                <Stack.Screen   name="SignUp"   component={SignUp}  /* tem que criar esse componente  */   options={{title:'Tela signUpl'}} />   
                <Stack.Screen   name="MainTab"   component={MainTab}   />   

  </Stack.Navigator>
  );
}