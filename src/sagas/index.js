import personSaga from './person.saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        personSaga(),
    ])
    // code after all-effect
}
