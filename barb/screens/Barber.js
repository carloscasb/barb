import React, {useState, useEffect} from 'react'
import { Text, View  } from 'react-native'
import css from '../assets/css/Css'

import { useNavigation, useRoute } from '@react-navigation/native'

export default () => {

    // INSTACIA O navigation e Router
    const navigation=useNavigation();
    const route = useRoute();

    // PEGAR INFORMAÇÕES QUANDO ALGUEM MANDOU PARA ESSA TELA
      //  Router.params.E O QUE QUER SE PEGAR

      // FAZER State PARA SALVAR AS INFORMAÇÂOES INICIAIS
      const [userInfo, setUserInfo] = useState({
        //INFORMAÇÕES INICIAIS
        id:route.params.id,
        avatar:route.params.avatar,
        name:route.params.name,
        //star: route.params.star

      });

    return (
        <View style = {css.container}>
        <Text> Barber : {userInfo.name}      </Text>

    </View>
   

    );
}
