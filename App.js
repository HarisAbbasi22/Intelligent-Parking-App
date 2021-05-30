import React from 'react';
import Providers from './src/navigation';
import firebase from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyB414LkCBlpxfiWzPJAhmKXbmUJ1nSa95s",
  authDomain: "my-project-4f87e.firebaseapp.com",
  projectId: "my-project-4f87e",
  storageBucket: "my-project-4f87e.appspot.com",
  messagingSenderId: "221148852621",
  appId: "1:221148852621:web:a3950227c0e5cd329a0dc4",
  measurementId: "G-KNTBQWGQFG"
};

firebase.initializeApp(firebaseConfig);

export default function App() {

  return <Providers />;
}