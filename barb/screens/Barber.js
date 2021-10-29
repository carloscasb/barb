import React, {useState, useEffect} from 'react'
import { Text, View  } from 'react-native'
import css from '../assets/css/Css'
// IMPORTAR estilos
import estilos, { Container, 
   Scroller , FakeSwiper,
   PageBody, UserInfoArea,
   ServiceArea, TestemunhoArea,
   SwiperDot, SwiperDotActive,
   SwiperItem, SwiperImage,
   UserAvatar, UserInfo,
   UserInfoName, UserFavButton,
   LoadingIcon
  } from '../assets/css/estilo'

// IMPORTAR API
import Api from '../Api';

import { useNavigation, useRoute } from '@react-navigation/native'
// IMPORTAR Swiper
import Swiper from 'react-native-swiper';
// IMPORTAR Stars - DESPREZAMOS STARS
import Stars from '../componentes/Stars'    
// IMPORTAR Imagem de coração
 import FavoriteIcon from '../assets/images/favorites.png'

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

      //CRIAR UM LOADING
      const [loading, setLoading]= useState(false);
    
      // ASSIM QUE ENTRA NA TELA 
      useEffect( () => {
      const getBarberInfo = async () => {
        //QUANDO INICAR CHAMA O LOADING
        setLoading(true);

      // PEGA AS INFORMAÇÂO DO PROFISSIONAL
      let json = await Api.getBarber(userInfo.id);
      // VERIFICA SE TEM ERRO DO PROFISSIONAL , se não tiver
      if (json.error == '') {
        // PEGA TODAS AS INFORMAÇÕES
        setUserInfo (json.data);

      }else {
        // SE TIVER ERRO
        alert("ERRO : "+json.error);
      }
        //QUANDO FINALIZAR FECHA O LOADING
        setLoading(false);
      }

      getBarberInfo();

      }, []);
 
    return (
       <Container>
         <Scroller>
       
        {userInfo.photos && userInfo.photos.length > 0 ?
            <Swiper 
              style= {{height:240}}
              dot={<SwiperDot/>}
              activeDot={<SwiperDotActive/>}
              paginationStyle={{top:15 , height:15, bottom: null, left:null}}
              autoplay={true}
            >
              {userInfo.photos.map((item, key) => (
            <SwiperItem key ={key}>
              <SwiperImage source={{uri:item.url}} resizeMode='cover' />
            </SwiperItem>

              )) }

            </Swiper>
            :
            <FakeSwiper>
           
            </FakeSwiper>

         }  
        
           <PageBody>

                <UserInfoArea>

                  <UserAvatar source={{uri:userInfo.avatar}}/>

                  <UserInfo>
                     <UserInfoName>{userInfo.name}</UserInfoName>
                    
                  </UserInfo>

                  <UserFavButton>
                      
                  </UserFavButton>

                </UserInfoArea>
                
                {loading &&  //QUANDO TIVER CARREGANDO
                <LoadingIcon size="large" color="#000000" />
                }
                <ServiceArea>
                  
                </ServiceArea>

                <TestemunhoArea>

                </TestemunhoArea>





           </PageBody>
        
         </Scroller>
       </Container>

    );
}
