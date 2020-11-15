import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: []
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const logMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV !== 'production'
});
const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logMiddleware)
    )
);
let persistor = persistStore(store);
export {
    store,
    persistor,
};