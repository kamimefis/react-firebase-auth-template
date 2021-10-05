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
const LOGOUT = 'LOGOUT'

// reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case ERROR_USER:
            return { ...initialState }
        case SUCCESS_USER:
            return { ...state, loading: false, user: action.payload, active: true }
        case LOGOUT:
            return { ...initialState }
        default:
            return { ...state }
    }
}

// action
export const loginUserAction = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)
        dispatch({
            type: SUCCESS_USER,
            payload: {
                uid: res.user.uid,
                email: res.user.email
            }
        })
        localStorage.setItem('user', JSON.stringify({
            uid: res.user.uid,
            email: res.user.email
        }))

    } catch (error) {
        console.log(error)
        dispatch({
            type: ERROR_USER
        })
    }
}

export const activeUserAction = () => (dispatch) => {
    if (localStorage.getItem('user')) {
        dispatch({
            type: SUCCESS_USER,
            payload: JSON.parse(localStorage.getItem('user'))
        })
    }
}

export const logoutAction= () => (dispatch) => {
    auth.signOut()
    localStorage.removeItem('user')
    dispatch({
        type: LOGOUT
    })
}