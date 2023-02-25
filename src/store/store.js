import {createStore,applyMiddleware} from 'redux';
import rotasReducer from './rotasReducer';
import createSagaMiddleware from 'redux-saga';
import rotasSaga from './modules/rotasSaga';
// aqui dentro do create store to passando os reducers do combine e lá dentro do combine ta todos os reducers que to compartilhando com todos os componentes.

const sagaMiddleware = createSagaMiddleware()

const enhacer = applyMiddleware(sagaMiddleware)

const store = createStore(rotasReducer,enhacer)

sagaMiddleware.run(rotasSaga)
export default store;