import { DONE_LOADING, START_LOADING } from '../constants'


export const personReducer = (state = {}, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
                personData: []
            }
        case DONE_LOADING:
            return {
                ...state,
                isLoading: false,
                personData: action.payload
            }
        default:
            return state
    }
}

