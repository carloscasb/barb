
const BASE_API = 'https://api.b7web.com.br/devbarber/api';
//OBJETO QUE VAI TER AS AÇÕES QUE VAMOS PRECISAR FAZER

// TOKEN

export default{
 CkeckToken: async (token)=> {

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
        console.log("URL", `${BASE_API}/auth/login` );
        console.log("email", email );
        console.log("password" , password);
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
        console.log("name", name );
        console.log("email", email );
        console.log("password" , password);
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
};