import { combineReducers } from 'redux';

import AuthenticationReducer from './authentication-reducer';
import IdeasReducer from './ideas-reducer';

export default combineReducers({
    auth: AuthenticationReducer,
    ideas: IdeasReducer,
});