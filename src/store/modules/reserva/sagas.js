import {select,call,put,all,takeLatest} from 'redux-saga/effects'; 
import api from '../../../Services/api';
import history from '../../../Services/history';

import { adicionarReservaSuccess,UpdateAmountSuccess } from './Actions';
// o asterisco se chama generator ele é tipo async e await só que ele é mais poderoso que o async e await, no caso dele o await dele é o yield
function* addReserva({id}){
    // o select recupera tudo que ta na state do reducer reserva ou seja outro ele recupera o que tiver dentro do array desse reducer
    const itemExistente = yield select(state => state.reservas.find(item => item.id === id))
    
    const meuStock = yield call(api.get,`stock/${id}`)

    const qtdStock = meuStock.data.amount;

    const stockTenho = itemExistente ? itemExistente.amount : 0;

    const addStock = stockTenho + 1;

    if(addStock > qtdStock){
        alert('quantidade maxima de reservas atingindas');
        return;
     
    } 

    if(itemExistente){
     yield put(UpdateAmountSuccess(id,addStock))
    } else{

    const response = yield call(api.get,`trips/${id}`)
    //call é para chamar uma requisição http
    // o put serve para disparar actions dentro do saga
    // all serve para importar tudo
    const data = {
    ...response.data, 
          amount: 1,}
    yield put(adicionarReservaSuccess(data))
    }
}

function* updateAmount({id,amount}){
    if(amount <= 0) return;

    const meuStock = yield call(api.get,`/stock/${id}`);

    const qtdStock = meuStock.data.amount

    if(amount > qtdStock ){
        alert('Quantidade maxima atingida')
        return;
    }

    yield put(UpdateAmountSuccess(id, amount))
    history.push('/reservas')
}

export default all([
    takeLatest('ADD_RESERVAS_REQUEST',addReserva),
    takeLatest('Update__RESERVAS__Request',updateAmount)
])
