
export function adicionarReservaRequest(id){
   return {
        type:'ADD_RESERVAS_REQUEST',
        id
       }
}


export function adicionarReservaSuccess(item){
    return {
         type:'ADD_RESERVAS_SUCCESS',
         item
        }
 
 }


export function DeletarReserva(id){
    return {      
        type:'REMOVE__RESERVAS',
        id  
    }
}

export function UpdateAmountRequest(id, amount){
    return {
        type: 'Update__RESERVAS__Request',
        id,
        amount
    }

}

export function UpdateAmountSuccess(id, amount){
    return {
        type: 'Update__RESERVAS__Success',
        id,
        amount
    }

}