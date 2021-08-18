import React from 'react';
import ReactDOM from 'react-dom';
import FirebaseContext from './context/firebase';
import {firebase , FieldValue} from './lib/firebase'


ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }} >
  <h1 className="text-red-500">Hello, World</h1>
  </FirebaseContext.Provider>,
  document.getElementById('root')
  
);