import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const name = 'potato alu miya';

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser=()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User', currentUser);
            setUser(currentUser)
        })

        return () => {
            unSubcribe();
        }
    }, [])


    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
        signOutUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;