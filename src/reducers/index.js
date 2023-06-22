import { createStore, combineReducers, applyMiddleware, compose } from 'redux';


import ApiReducer from './ApiReducer';

import { persistReducer, persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const rootReducer = combineReducers({
    apiReducer: ApiReducer,

})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const reducersCombined = persistReducer(persistConfig, rootReducer);

const store = createStore(reducersCombined);
const persistor = persistStore(store);
const reducers = () => {
    return { persistor, store };
};

export default reducers;

