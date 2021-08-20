import { START_LOADING, DONE_LOADING } from '../constants'

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const doneLoading = (data) => {
    return {
        type: DONE_LOADING,
        payload: data
    }
}