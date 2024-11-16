import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const name= 'potato alu miya';

    const authInfo = {
        name 
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;