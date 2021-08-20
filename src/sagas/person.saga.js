import { call, put, takeEvery } from 'redux-saga/effects'
import { START_LOADING } from '../constants'
import { doneLoading } from '../actions/person.actions'
import { apiHandler } from '../utils/apiHandler'

//* worker saga
function* handleSaga() {
    try {
        const response = yield call(apiHandler, "https://randomuser.me/api/?results=10")
        if (response && response.length) {
            yield put(doneLoading(response))
        }
    } catch (err) {
        console.log("err in handleSaga ", err.message)
    }
}


//? register saga handler
function* personSaga() {
    yield takeEvery(START_LOADING, handleSaga);
}

export default personSaga