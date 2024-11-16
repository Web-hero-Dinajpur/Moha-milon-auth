import { createContext, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const name= 'potato alu miya';

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // onAuthStateChanged(auth, currentUser=>{
    //     if(currentUser){
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser);
    //     }
    //     else{
    //         console.log('NO user logged in')
    //         setUser(null)
    //     }
    // })

    const authInfo = {
        name ,
        createUser,
        signInUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;