import React from 'react'
import { Text, View , Button } from 'react-native'
import css from '../assets/css/Css'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Api from '../Api'

export default () => {

     // INSTACIA O navigation
     const navigation=useNavigation();

     // FUNÇÃO DE CLICK,  Asunc pq vai mexer com Api
    const  handlelogautClick = async () => {
       // SE NÃO TIVER TOKEM VA PRA LOGIM SEM RETORNO
        await Api.logaut();
         navigation.reset({
             routes:[{name:'signIn'}]
         });
      }
    return (
        <View style = {css.container}>
        <Text> Profile   </Text>
        <Button title="Sair" onPress={handlelogautClick} />
    </View>
   

    );
}

