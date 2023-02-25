import {all} from 'redux-saga/effects'

import saga from './reserva/sagas'

export default function* rotasSaga (){
    return yield all([
        saga
    ])
}