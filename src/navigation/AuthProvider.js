import React, { createContext, useState } from 'react';
import firebase from 'firebase/app';
import "firebase/auth";



export const AuthContext = createContext({});

// This Provider mainly use for Authentication..

export const AuthProvider = ( { children }) => {

   

    const [user, setUser] = useState(null);
    const [ errorMessage, setErrorMessage] = useState('')


    const [ errorSignUp, setErrorSignUp] = useState('')
    

    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          setErrorMessage,
          errorMessage,
          errorSignUp,
          setErrorSignUp,
          login: async (email, password) => {
            if(email !== '' && password!== '') {
              try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                setErrorMessage('')
              } catch (e) {
                setErrorMessage('Invalid Information')
                console.log(e);
              }
            }
            else {
              console.log('Please fill data in fields')
              setErrorMessage('Please add all fields')
            }

          },
          register: async (email, password) => {
            if(email !== '' && password!== '') {
              try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                setErrorSignUp('')
              } catch (error) {
                // setErrorMessage(error.message)
                console.log(error.toString());

                if(error.code === 'auth/invalid-email') {
                  setErrorSignUp('Email is badly formatted')
                }
                else if(error.code === 'auth/weak-password')
                {   
                  setErrorSignUp(' Password should be at least 6 characters')
                }

                else if(error.code === 'auth/email-already-in-use')
                { 
                  setErrorSignUp('The email address is already in use by another account')
                }
                else {
                  setErrorSignUp('The email address is already in use by another account')
                }
                
              }
            }

            else {
              console.log('Please fill all fields')
              setErrorSignUp('Please add all fields')
            }
          },
          logout: async () => {
            try {
              await firebase.auth().signOut();
            } catch (e) {
              console.error(e);
            }
          },

          SaveImage: async (userImage) => {
            try{
              await AsyncStorage.setItem('Profile', userImage);
            }
            catch(e) {
              console.log(e)
            }
          },
        
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };