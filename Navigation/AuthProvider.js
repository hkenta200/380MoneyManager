import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value = {{
                user,
                setUser,
                login: (email, password) => {
                    try {
                        auth().signInWithEmailAndPassword(email, password).then(userCredentials => { user = userCredentials.user;})
                        .catch(error => alert(error.message));
                    }
                    catch(e) {
                        console.log(e);
                    }
                },

                register: (email, password) => {
                    try {
                        auth().createUserWithEmailAndPassword(email, password).then(userCredentials => { user = userCredentials.user;});
                    }
                    catch(e) {
                        console.log(e);
                    }
                },

                logout: () => {
                    try {
                        auth().signOut();
                    }
                    catch(e) {
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

