import { createContext, useState } from "react";

import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,password,email);
    }
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {user,createUser,signInUser}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


