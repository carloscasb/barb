import React,{useState, useEffect} from 'react'
import { Text, View, Image } from 'react-native'
import { Platform , RefreshControl} from 'react-native'
import css from '../assets/css/Css'
import { useNavigation } from '@react-navigation/native'
import { request, PERMISSIONS } from 'react-native-permissions'
import Geolocation from '@react-native-community/geolocation'
import Api from '../Api'

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

import BarberItem from '../componentes/BarberItem'
//import SearchIcon from '../assets/images/search.png';
//import MyLocationIcon  from '../assets/images/my_location.png';


export default () => {
 
    const navigation = useNavigation();
    // CRIAR state para localização
    const [locationText, setLocationText] = useState('');
    // State que vai armazenar as coordenadas do usuario
    const [coords, setCoords] = useState(null);
    // State do loading
    const [loading, setLoading] = useState(false);
    // State dos PROFISIONAIS
    const [list, setList] = useState([]);

    const [refreshing, setRefreshing] = useState(false);
    
    // FUNÇÃO DE PEGAR LOCALIZAÇÃO - QUANDO CLICK
    const handleLocationFinder = async () => {
         //ZERA QUALQUER LOCALIZAÇÃO (dado)
        setCoords(null);
         // PEDIR PERMISÃO --let resultado é o resultado do proceso de pedir permissão
        let result = await request(
            // SE FOR IOS UMA PERMISSION CASO CONTRARIO OUTRA
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );
   // SE O USUARIO DEU ACESSO ... CASO CONTRARIO
        if(result == 'granted') {
           //se der acesso , aparecer loading , zerar o texto (vazio, a list de profissionais vazia)
            setLoading(true);
            setLocationText('');
            setList([]);
   //PEGAR A LOCALIZAÇÃO DO USUSARIO
            Geolocation.getCurrentPosition((info)=>{
               //---TETSTANDO 
                // console.log(info);   
                 // SALVEI AS COORDENADAS
                setCoords(info.coords);
                // FUNÇÃO PARA PEGAR OS PROFISSIONAIS DA LOCALIZAÇÃO -AQUI acredito que temos que ter uma webserver(BD)
                getBarbers();
            });

        }
    }

            // FUNÇÂO LISTA DOS PROFISSIONAIS (FAZER LA NA api.js)
            const getBarbers = async () => {
                setLoading(true);
                setList([]);
        
                let lat = null;
                let lng = null;
                if(coords) {
                    lat = coords.latitude;
                    lng = coords.longitude;
                }
        
                let res = await Api.getBarbers(lat, lng, locationText);
                if(res.error == '') {
                    if(res.loc) {
                        setLocationText(res.loc);
                    }
                    setList(res.data);
                } else {
                    alert("Erro: "+res.error);
                }
        
                setLoading(false);
            }
        
            useEffect(()=>{
                getBarbers();
            }, []);
        
            const onRefresh = () => {
                setRefreshing(false);
                getBarbers();
            }
        
            const handleLocationSearch = () => {
                //ZERAR AS COORDENADAS
                setCoords({});
                //PEGAR A ATUAL (digitada)
                getBarbers();
            }
        


    return (

            <Container>
                     <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                        <HeaderArea>
                            <HeaderTitle >Encontre o seu barbeiro favorito</HeaderTitle>
                                 <SearchButton onPress={()=>navigation.navigate('Search')}>
                                 <Image
                                 style={{  width:26, height:26, backgroundColor:'#fff' }}
                                 source={require('../assets/images/pessoa.png')}
                                    />
                                </SearchButton>
                        </HeaderArea>

                        <LocationArea>
                            <LocationInput
                                placeholder="Onde você está?"
                                placeholderTextColor="#FFFFFF"
                                value={locationText}
                                onChangeText={t=>setLocationText(t)} // MUDOU TEXT , MODIFICA State
                                onEndEditing={handleLocationSearch} // DAR UM ENTER , MODIFICA State

                             // PEGAR LOCALIZAÇÂO
                            /> 
                             <LocationFinder onPress={handleLocationFinder}>
                            <Image
                                 style={{  width:26, height:26, backgroundColor:'#fff', borderRadius:30 }}
                                 source={require('../assets/images/localiza.png')}
                                    />
                            </LocationFinder>
                 </LocationArea>

                 {loading &&
                  <LoadingIcon size="large" color="#FFFFFF" /> 
                 }
                
                <ListArea>
                    {list.map((item, k)=>(
                        <BarberItem key={k} data={item} />  // EXIBIR LISTA
                    ))}
                </ListArea>

 

                    </Scroller>
                
            </Container>

           

    );

}