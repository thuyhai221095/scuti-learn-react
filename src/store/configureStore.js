import {createStore} from 'redux';
import rootReducer from '../reduces';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}