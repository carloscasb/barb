import React from 'react'
import { Text, View, Image } from 'react-native'
import css from '../assets/css/Css'
import { Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    LocationArea,
    LocationInput,
    LocationFinder,
    LoadingIcon,
    ListArea
} from '../assets/css/estilo'

import SearchIcon from '../assets/images/search.png';
//import MyLocationIcon  from '../assets/images/my_location.png';


export default () => {

    return (

            <Container>
                    <Scroller>
                        <HeaderArea>
                            <HeaderTitle >Encontre o seu barbeiro favorito</HeaderTitle>
                                 <SearchButton >
                                 <Image
                                 source={require('../assets/images/local.png')}
                                    />
                                </SearchButton>
                        </HeaderArea>

                       


                    </Scroller>
                
            </Container>

           

    );

}