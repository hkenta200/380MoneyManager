import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: (email, password) => {
                    try {
                        auth().signInWithEmailAndPassword(email, password).then(userCredentials => { const user = userCredentials.user; }).catch(error => alert(error.message));
                        console.log(error);
                        if (!error) {
                            alert(email + ' signed in successfully!');
                            console.log(email + ' signed in successfully!');
                        }
                    }
                    catch (e) {
                        if(email.trim() == "" || email.trim() == ""){
                            alert('Email or Password cannot be empty! Please try again.');
                        }
                        console.log(e);
                    }
                },

                register: (email, password) => {
                    try {
                        auth().createUserWithEmailAndPassword(email, password).then(userCredentials => { const user = userCredentials.user; }).catch(error => alert(error.message));
                        console.log(error);
                        if (!error) {
                            alert(email + ' registered successfully!');
                            console.log(email + ' registered successfully!');
                        }
                    }
                    catch (e) {
                        /* if (error.code === 'auth/email-already-in-use') {
                            console.log('That email address is already in use!');
                        }

                        if (error.code === 'auth/invalid-email') {
                            console.log('That email address is invalid!');
                        } */

                        console.log(e);
                    }
                },

                logout: () => {
                    try {
                        auth().signOut();
                        if (!error) {
                            alert('Signed Out!');
                            console.log('Signed Out!');
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

