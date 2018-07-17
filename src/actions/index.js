import firebase from 'firebase';

export const AUTH_INPUT_CHANGE = 'AUTH_INPUT_CHANGE';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const START_LOADING = 'START_LOADING';

export function authInputChange({field,value}){
    return {
        type: AUTH_INPUT_CHANGE,
        payload: {field,value},
    };
}

export function login({email,password}){
    return dispatch => {
        dispatch( {type: START_LOADING,});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log('succesfully logged in');
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user,
                });
            })
            .catch(function(error){
                const {code,message} = error;
                console.log('error occured!',message);
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: {code,message},
                });
            });
    };
}