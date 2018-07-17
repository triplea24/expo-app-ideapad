import { AUTH_INPUT_CHANGE, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
    email: '',
    password: '',
    user: {},
    error: {},
}

export default (state=initialState,action) => {
    switch(action.type){
        case AUTH_INPUT_CHANGE:
            return { ...state, [action.payload.field]: action.payload.value};
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload };
        case LOGIN_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}