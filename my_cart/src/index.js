import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
  apiKey: "AIzaSyB66O8ifqNde97Sy9Tx66o4YGiZz0yDd3k",
  authDomain: "mycart-d4c9e.firebaseapp.com",
  projectId: "mycart-d4c9e",
  storageBucket: "mycart-d4c9e.appspot.com",
  messagingSenderId: "798104108976",
  appId: "1:798104108976:web:80a52e379560dcd127e075"
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

firebase.initializeApp(firebaseConfig);
