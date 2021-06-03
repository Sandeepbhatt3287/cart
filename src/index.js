import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB7izIFFaVW8U_5qnKL98ISeY6ppIe77ho",
  authDomain: "cart-e3dc4.firebaseapp.com",
  projectId: "cart-e3dc4",
  storageBucket: "cart-e3dc4.appspot.com",
  messagingSenderId: "293888126941",
  appId: "1:293888126941:web:4b517d80de87e80f29d034"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

