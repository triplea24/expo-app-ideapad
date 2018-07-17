import firebase from 'firebase';


// AUTH
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

// Idea
export const IDEA_INPUT_CHANGE = 'AUTH_INPUT_CHANGE';
export const NEW_IDEAD_ADDED = 'NEW_IDEAD_ADDED';
export const ADD_NEW_IDEA_FAILED = 'ADD_NEW_IDEA_FAILED';
export const START_LOADING_ADD_NEW_IDEA = 'START_LOADING_ADD_NEW_IDEA'; 

export function ideaInputChange({field,value}){
    return {
        type: IDEA_INPUT_CHANGE,
        payload: {field,value},
    };
}
export function addNewIdea({title,text}){
    return dispatch => {
        dispatch( {type: START_LOADING_ADD_NEW_IDEA,});
        const {uid} = firebase.auth().currentUser;
        firebase.database().ref(`ideas/${uid}/ideas`)
            .push({title,text})
            .then(()=> dispatch({type: NEW_IDEAD_ADDED}))
            .catch(err=>{
                const payload = {
                    code: err.code,
                    message: err.message,
                }
                dispatch({type: ADD_NEW_IDEA_FAILED,payload});
            })
    };
}