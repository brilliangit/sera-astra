import { combineReducers } from 'redux';

import DataReducer from '../reducers/DataReducer';
import LoginReducer from '../reducers/LoginReducer';
import AlertReducer from '../reducers/AlertReducer';

const rootReducer = combineReducers({
    DataReducer,
    LoginReducer,
    AlertReducer
})

export default rootReducer;