
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "./Context";
import { auth } from "../firebase.config";
import { useEffect, useState } from "react";


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
   
const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const signIn=(email,password)=>{
   return signInWithEmailAndPassword(auth, email, password)
}
const logOut=()=>{
   return signOut(auth)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    return ()=>unsubscribe()
},[])
const authInfo={
    user,
    setUser,
    createUser,
    signIn,
    logOut
}
    return (
<AuthContext value={authInfo}>
{children}
</AuthContext>
    );
};

export default AuthProvider;