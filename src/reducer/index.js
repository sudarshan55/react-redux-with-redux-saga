import { combineReducers } from 'redux'
import { personReducer } from './person.reducer'

const rootReducer = combineReducers({
    person: personReducer
})

export default rootReducer