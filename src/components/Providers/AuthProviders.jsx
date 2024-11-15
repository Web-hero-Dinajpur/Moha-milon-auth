import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const authInfo = {
        name : 'nodi and sagor'
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;