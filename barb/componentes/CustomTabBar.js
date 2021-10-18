import React, {useContext} from "react";
import { Image, Text } from "react-native";
//import  UserContext from '../contexts/UserContext';
import styled  from 'styled-components';

//IMPORTAR ICON
/*
import HomeIcon from '../assets/images/cadeado.png';

import SearchIcon from '.../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/images/user.png';
<HomeIcon width="24"  heigth="24" fill='#fff'  />
<Image style={{width:"24" , heigth:"24", fill:'#fff'}} source={require('././assets/images/today.png')} />
import HomeIcon from '../../assets/images/Home.png';
*/



//CRIAR UMA SACOLA (textarea) estilizada
const TabArea = styled.View`
height: 60px;
background-color: #4EADBE;
flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
   
`;


const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;

const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export default ({state, navigation}) => {
  
    // CHAMAREMOS UserContext SO DE User
   // const {state:User} = useContext(UserContext);


     //CRIA  FUNÇÃO DE NAVEGAÇÃO goto e a USA LA EM onPress

     const goTo = (screenName) => {
            navigation.navigate(screenName);


     }
      
    return (
        //CRIA NOSSO COMPONENTE TABAREA e colocar item
        /*
         ERA PARA SER ASSIM OS ITEM COM ICON
         import HomeIcon from '../../assets/images/Home.png';
         <TabItem>
                 <HomeIcon />
            </TabItem>
        */
        <TabArea>
                   
            <TabItem onPress={()=>goTo('Home')}>
            <Text style={{opacity: state.index===0? 1 : 0.5}}>Home</Text >
            </TabItem>

             <TabItem onPress={()=>goTo('Search')}>
           <Text style={{opacity: state.index===1? 1 : 0.5}}>Search</Text>
            </TabItem>

            <TabItemCenter onPress={()=>goTo('Appointments')}>
           <Text style={{opacity: state.index===2? 1 : 0.5}}>Appointments</Text>
            </TabItemCenter>

           <TabItem onPress={()=>goTo('Favorites')}>
           <Text style={{opacity: state.index===3? 1 : 0.5}}>Favorite</Text>
            </TabItem>

            <TabItem onPress={()=>goTo('Profile')}>
           <Text style={{opacity: state.index===4? 1 : 0.5}}>Profile</Text>
            </TabItem>
            
        </TabArea>

    );
}