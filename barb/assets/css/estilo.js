import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const LocationArea = styled.View`
    background-color: #4EADBE;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;
export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    border-radius: 30px;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const FakeSwiper = styled.View`
    
`;

export const PageBody = styled.View`
        background-color: #FFFFFF;
        border-top-left-radius:50px;
         margin-top:-50px;
          min-height: 600px;


`;



export const ServiceArea = styled.View`
    
`;

export const TestemunhoArea = styled.View`
    
`;
export const SwiperDot = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin:3px;
`;

export const SwiperDotActive = styled.View`
        width: 15px;
        height: 15px;
        border-radius: 5px;
        background-color: #000000;
        margin:3px;
`;

export const SwiperItem = styled.View`
        flex: 1;
        background-color: #63C2D1;
`;
export const SwiperImage = styled.Image`
            width: 100%;
            height: 240px;
`;

export const UserInfoArea = styled.View`
        flex-Direction:row;  
      
`;

export const UserAvatar = styled.Image`
            width: 110px;
            height: 110px;
            border-Radius: 20px;
            margin-Left:30px;
            margin-Height:20px;
            border-Width:4px;
            border-Color:'#FFFFFF';
    
`;

export const UserInfo = styled.Text`
            flex: 1;
            justify-Content:flex-end;
            margin-Left:30px;
            
      
`;

export const UserInfoName = styled.Text`
    
        color:#000000;
        font-Size:18px;
        font-Weigth:Bold;
        margin-Botton:10px;
        
  
    
`;

export const UserFavButton = styled.TouchableOpacity`
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: #FFFFFF;
        border:2px solid #999999;
        justify-Content: center;
        align-items: center;
        
`;

