import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from "./barb/screens/preload";
import SignIn from './barb/screens/SignIn';
import SignUp from './barb/screens/SignUp';
// IMPORTAT CONTEXT que ira  ENGLOBAR O APLICATIVO (NavigationContainer)
import UserContextProfile from './barb/contexts/UserContext';
import MainTab from './barb/stacks/MainTab';
 import Barber from './barb/screens/Barber';


export default function App() {
  
  //VAMOS Criar nossa PILHA que vai receber o retorno do createStackNavigator(pilha de navegação)
    const Stack = createStackNavigator();


//VAMOS Criar Container, o Navegador e as Telas de navegação ENGLOBADA PELO Context
    return (
     
       <UserContextProfile>
      <NavigationContainer>
          <Stack.Navigator
          initialRouteName="Preload" 
         >
          <Stack.Screen name="Preload" component={Preload}   options={{headerShown:false}}
          // EXIBINDO uma tela Preload ---vai ficar um de cada vez (DEFINR A PRIMEIRA EM  <Stack.Navigator initialRouteName="Preload">)
          />
           <Stack.Screen name="SignIn" component={SignIn}   options={{headerShown:false}}/>
           <Stack.Screen name="SignUp" component={SignUp}   options={{headerShown:false}}/>
           <Stack.Screen name="MainTab" component={MainTab}   options={{headerShown:false}}/>
           <Stack.Screen   name="Barber"   component={Barber}  options={{headerShown:false}}  /> 
          </Stack.Navigator>
      </NavigationContainer>

   </UserContextProfile>
    );
}