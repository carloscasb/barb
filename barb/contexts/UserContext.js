import React, {createContext, useReducer} from "react";

// IMPORTAR as Informações do UserReducer.js
import { InitialState, UserReducer  } from "../reducers/UserReducer";
// CRIAR um contexto do usauario
export const UserContext=createContext();


// CRIAR o componente especifico do contexto em uma arrayfuction usando uma profile (perfil) chamado children
// Children é tudo que tem dentro do componente
export default ({children})=>{
    // CRIAR os dois paramentro que a gente precisa usar no Reducer--Vamos utilizar-lo
    const [state, dispatch] = useReducer(UserReducer, InitialState);
    // CRIOU os dois e passar agora para o profile (perfil) atraves da propriedade value
        return (
            <UserContext.Provider value= {{state, dispatch}} >
             {children}

            </UserContext.Provider>

    );

}