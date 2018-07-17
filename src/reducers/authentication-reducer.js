import { AUTH_INPUT_CHANGE, LOGIN_SUCCESS, LOGIN_FAILURE, START_LOADING } from '../actions';

const initialState = {
    email: '',
    password: '',
    user: null,
    error: null,
    loading: false,
}

export default (state=initialState,action) => {
    switch(action.type){
        case AUTH_INPUT_CHANGE:
            return { ...state, [action.payload.field]: action.payload.value};
        case START_LOADING:
            return { ...state, loading: true, error: null, };
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, loading: false };
        case LOGIN_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}