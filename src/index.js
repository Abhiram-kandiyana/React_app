import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/RootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase ,authIsReady} from 'react-redux-firebase';
import fbConfig from './config/fbconfig'
import 'firebase/firestore';


import firebase from 'firebase' // import 'firebase/firestore' // <- needed if using firestore const fbConfig = { } // object containing Firebase config const rrfConfig = { userProfile : 'users' } // react-redux-firebase config // initialize firebase instance 
const fbconfig ={fbConfig};
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // firebase root where user profiles are stored
  attachAuthIsReady: true, // attaches auth is ready promise to store
  firebaseStateName: 'firebase' // should match the reducer name ('firebase' is default)
}
// <- new to v2.*.* // 
firebase.firestore() // <- needed if using firestore // Add Firebase to reducers const rootReducer = combineReducers ( { firebase : firebaseReducer , // firestore: firestoreReducer // <- needed if using firestore } ) const store = createStore ( rootReducer , initialState , compose ( reactReduxFirebase ( firebase , rrfConfig ) , // pass in firebase instance instead of config // reduxFirestore(firebase) // <- needed if using firestore // applyMiddleware(...middleware) // to add other middleware ) ) 

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase,rrfConfig), // redux binding for firebase
    reduxFirestore(firebase) // redux bindings for firestore
  )
);
authIsReady(store).then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

})

