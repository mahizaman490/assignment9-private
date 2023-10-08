import { createContext, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword (auth,password,email)
    }
    const authInfo = {user,createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}