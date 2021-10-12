import { StyleSheet } from "react-native";


 const css = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },
    container__center:{
        justifyContent:'center'
    },
    map:{
            height:'60%', 
          
            width : 400 , 
            justifyContent : 'flex-end' , 
            alignItems : 'center' , 
           //  backgroundColor:'#00f'

    },
    search:{
        height:'40%',
        
       // backgroundColor:'gray'
    },

    header:{
        backgroundColor:'#09204A',
        padding: 5,
        width: '100%',
        height: '100%',
        paddingTop: 0,
        marginTop:0,
        justifyContent:'center',
        alignItems:'center'
    },

    headerdois:{
        backgroundColor:'#63C2D1',
        padding: 5,
        width: '100%',
        height: '100%',
        paddingTop: 0,
        marginTop:0,
        justifyContent:'center',
        alignItems:'center'
    },
    
    header__img:{
        marginLeft: 'auto',
        marginRight:'auto'
    },

    inputArea:{
        backgroundColor:'#63C2D1',
        padding: 40,
        width: '100%',
        height: 400
    },

    footer:{
        width: '100%',
        height: '78%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#eee'
    },
    input:{
        borderRadius: 2,
        height: 60,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#ccc',
        width: '80%',
        marginBottom: 20,
        fontSize: 18
    },
    texto:{
        fontSize: 20,
        textAlign:'center'
    },
    textoWidth:{
        width: '80%'
    },
    // TouchableOpacity
    CustonButton:{
        height:60,
        backgroundColor:'#268596',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },

    TextCuston:{
        fontSize:18,
        color:'#268596'

    },

    TextCustonBold:{
        fontSize:18,
        color:'#268596',
        fontWeight:'bold',
        marginLeft:5

    },

    // TouchableOpacity , texto uma ao lado do outro
    CustonMessageButton:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50,
        marginBottom:20



    },

    button:{
        borderRadius: 5,
        backgroundColor: '#111',
        paddingTop: 15,
        paddingRight: 30,
        paddingBottom: 15,
        paddingLeft: 30,
    },
    button__text:{
        color:'#fff',
        fontWeight:'bold',
        fontSize: 17
    }

});
export  default (css);


import styled from 'styled-components/native'
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

