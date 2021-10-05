import { auth, firebase } from '../firebase'

// initial data
const initialState = {
    loading: false,
    active: false
}

// types
const LOADING = 'LOADING'
const ERROR_USER = 'ERROR_USER'
const SUCCESS_USER = 'SUCCESS_USER'

// reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case ERROR_USER:
            return { ...initialState }
        case SUCCESS_USER:
            return { ...state, loading: false, user: action.payload, active: true }
        default:
            return { ...state }
    }
}

//action
export const activeUserAction = () => (dispatch) => {
    if (localStorage.getItem('user')) {
        dispatch({
            type: SUCCESS_USER,
            payload: JSON.parse(localStorage.getItem('user'))
        })
    }
}
