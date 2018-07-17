import { 
    IDEA_INPUT_CHANGE,
    START_LOADING_ADD_NEW_IDEA,
    NEW_IDEAD_ADDED,
    ADD_NEW_IDEA_FAILED,
    FETCH_IDEAS
} from '../actions';

const initialState = {
    title: '',
    text: '',
    ideas: [],
    loading: false,
    error: null,
}

export default (state=initialState,action) => {
    switch(action.type){
        case IDEA_INPUT_CHANGE:
            return { ...state, [action.payload.field]: action.payload.value};
        case NEW_IDEAD_ADDED:
            return initialState;
        case START_LOADING_ADD_NEW_IDEA:
            return { ...state, loading: true};
        case ADD_NEW_IDEA_FAILED:
            return { ...state, error: action.payload, loading: false};
        case FETCH_IDEAS:
            return { ...state, ideas: action.payload };
        default:
            return state;
    }
}