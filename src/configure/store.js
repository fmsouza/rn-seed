import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native'
import promise from './promise';

export default function configureStore(onCompletion) {
	const enhancer = compose(
		applyMiddleware(thunk, promise)
	);

	let store = createStore(reducer, enhancer);
	persistStore(store, {storage: AsyncStorage}, onCompletion);
	return store;
};