export const InitialState = {
//INFORMAÇões (conteudo) iniciais do usuario logado
avatar:'',
favorites:[],
appointmenst:[]
};

export const UserReducer = (state, action)=> {
    switch(action.type) {
        case 'setAvatar':
            //Pegar o conteudo inicial e alterar Avatar
            return {...state, avatar: action.payload.avatar};
        break;
        default:
            return state;
 
    }
}
