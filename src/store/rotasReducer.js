import {combineReducers} from 'redux';
import reservas from './modules/reserva/reducer';
// aqui é como se fosse aquele value do context api,mas aqui é um arquivo pra juntar varios reducers e enviar para o provider pq porque padrão ele so manda 1 reducer então usamos o combineReducers pra mandar varios que é importantissimo.

export default combineReducers({
    reservas
})