import { 
    IDEA_INPUT_CHANGE,
    START_LOADING_ADD_NEW_IDEA,
    NEW_IDEAD_ADDED,
    ADD_NEW_IDEA_FAILED,
    FETCH_IDEAS,
    IDEA_EDITED,
    CLEAR_IDEA_FORM,
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
            return { ...initialState, ideas: state.ideas, };
        case START_LOADING_ADD_NEW_IDEA:
            return { ...state, loading: true};
        case CLEAR_IDEA_FORM:
            return { ...initialState, ideas: state.ideas, };
        case ADD_NEW_IDEA_FAILED:
            return { ...state, error: action.payload, loading: false};
        case FETCH_IDEAS:
            return { ...state, ideas: action.payload };
        case IDEA_EDITED:
            return { ...state, loading: false };
        default:
            return state;
    }
}