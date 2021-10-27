
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_API = 'https://api.b7web.com.br/devbarber/api';
//OBJETO QUE VAI TER AS AÇÕES QUE VAMOS PRECISAR FAZER

// TOKEN

export default{
 ckeckToken: async (token)=> {

    const req = await fetch(`${BASE_API}/auth/refresh`, {
        method:'POST',
            headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
               },
       //CONTEUDO que estou enviando
       body: JSON.stringify ( {token} )

    });
    const json = await req.json();
    return json;


    },

    // LOGIN

     // RECEBER um email e uma Senha aqui
    signIn: async (email, password)=> {
    //    console.log("URL", `${BASE_API}/auth/login` );
     //   console.log("email", email );
    //    console.log("password" , password);
        const req = await fetch(`${BASE_API}/auth/login`, {
                method:'POST',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
               },
               //CONTEUDO que estou enviando
               body: JSON.stringify ( {email, password} )

            });
            const json = await req.json();
            return json;
    },
 // CADASTRO
    signUp: async (name, email, password)=> {
      //  console.log("name", name );
       // console.log("email", email );
       // console.log("password" , password);
        const req = await fetch(`${BASE_API}/auth/user`, {
            method:'POST',
               headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
               },
           //CONTEUDO que estou enviando
           body: JSON.stringify ( {name, email, password} )

        });
        const json = await req.json();
        return json;
    },

    // LOGAUT
    logaut: async ()=> {
        // NÃO MANDA SOMENTE O token
      const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/auth/logaut`, {
            method:'POST',
               headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
               },
           //CONTEUDO que estou enviando
           body: JSON.stringify ( {token} )

        });
        const json = await req.json();
        return json;
    },

// FUNÇÂO LISTA DOS PROFISSIONAIS
       //COMEÇA ZERA DADOS
        getBarbers: async (lat=null, lng=null, address=null) => {
             //PEGA O TOKEN
        const token = await AsyncStorage.getItem('token');

        console.log("LAT", lat);
        console.log("LNG", lng);
        console.log("ADDRESS", address);
//COLOCA NA REQUISIÇÃO
        const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
       //TRANSFORMA EM JSON 
        const json = await req.json();
        //E retorna o RESULTADO
        return json;
    },

    //FAZER  REQUISIÇÃO DE INFORMAÇÂO DE UM PROFISSIONAL APENAS (ESPECIFICO) --ACIMA FOI DE TODOS
    // Mandar somente o Id
    getBarber: async (id) => {
        //PEGA O TOKEN
        const token = await AsyncStorage.getItem('token');
         //FAZER  REQUISIÇÃO
         const req = await fetch(`${BASE_API}/barber/${id}?token=${token}`);
         //TRANSFORMA EM JSON 
          const json = await req.json();
         // TESTE
          console.log(json);
          //E retorna o RESULTADO
          return json;

    }


};


