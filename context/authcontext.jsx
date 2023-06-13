import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()
// eslint-disable-next-line react/prop-types

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";




export const UserProvider = ({children}) => {
    const [currentuser, setcurrentuser] = useState(null)
    const [isloading, setisloading] = useState(true)

    const clear =()=>{
        setcurrentuser(null)
        setisloading(false)

    }

    const authstatchange = (user) =>{
        setisloading(true)
        if (!user){
            clear()
            return;

        }
        setcurrentuser(user)
        setisloading(false)
        console.log(user)
    }


    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth,authstatchange)
        return () => unsubscibe()

    },[])
     


    return (
        <UserContext.Provider value={{
            currentuser, setcurrentuser,
            isloading, setisloading,
            }}>
            {children}
        </UserContext.Provider>
    );
}

export const useAuth = () => useContext(UserContext);
