import firebase from 'firebase';

export const AUTH_INPUT_CHANGE = 'AUTH_INPUT_CHANGE';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function authInputChange({field,value}){
    return {
        type: AUTH_INPUT_CHANGE,
        payload: {field,value},
    };
}

export function login({email,password}){
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: user,
            });
        })
        .catch(error => {
            const {errorCode,errorMessage} = error;
            dispatch({
                type: LOGIN_FAILURE,
                payload: {code: errorCode,message: errorMessage},
            });
        });
    };
}