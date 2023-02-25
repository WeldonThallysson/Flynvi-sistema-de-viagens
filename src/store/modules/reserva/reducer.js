import produce from "immer";

export default function reservas(state = [], action){
          /*a logica aqui nesse reducer é a seguinte se o o tipo do action for identico ao do case ele vai executar tudo que ta no case que no caso vai retornar um produce que é da biblioteca immer que é um tradutor permitindo usar metodos e todo tipo de comando javascript em uma copia do state original ali em cima, então no draft a logica foi a seguinte para verificar se quando clicar já tem aquele item e ao invés de duplicar ele vai contar a quantidade de reservas feitas naquele item que é a quantidade de vezes que ele se repitiu no array, peguei tudo que ta dentro de draft e dei um findIndex e ele vai procurar se o item.id é identico ao que ta vindo do action que é o action.item.id, se for verdadeiro ele vai mandar para a const itemIndex o numero 1 se não ele vai mandar o numero 0, então embaixo criei um if se o itemIndex for verdadeiro então puxei o draft e atribui a posição do item dentro dele e um amount para adicionar mais 1, se não ele vai apenas adicionar com o draft.push({...action.item, amount: 1}) */
    switch(action.type){
        case 'ADD_RESERVAS_SUCCESS': 
            return produce(state, draft => {
                draft.push(action.item)
            
            })
        
            // a logica aqui é a mesma da de cima mas aqui eu to só pegando, se o item.id que ta no array, for identico ao que ta na action(dispatch) de (REMOVE__RESERVAS) então 
        case 'REMOVE__RESERVAS': 
            return produce(state, draft => {
                const itemIndex = draft.findIndex(item => item.id === action.id)

                if(itemIndex >= 0){
                    draft.splice(itemIndex, 1)
                }
            })

            ;
        case 'Update__RESERVAS__Success': {
            
                return produce(state, draft => {
                    const itemIndex = draft.findIndex(item => item.id === action.id)
    
                    if(itemIndex >= 0){
                      draft[itemIndex].amount = Number(action.amount);
                    }
                })    
            }

        default:  
           return state;    
    }

}