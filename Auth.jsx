import { createContext, useContext, useEffect, useState } from "react";
import {getAuth} from "firebase/auth"

const AuthContext = createContext({});

import React from 'react'
import Login from "./components/Login";
import Loading from "./components/Loading";

export const AuthProvider = ({children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    const auth = getAuth();
      
      return auth.onIdTokenChanged(async(user)=> {
          if(!user){
              console.log("no user");
              setCurrentUser(null);
              setLoading(false);
              return;
          }
          
          const token = await user.getIdToken();
          setCurrentUser(user);
          setLoading(false);
          
          
      })


  }, []);
  if (loading){
    return <Loading type = "bars" color = "blue"/>;

  }

  if(!currentUser){
      return <Login/>
  }
  else {

        return(
            <AuthContext.Provider value ={{currentUser}} >
                {children}

            </AuthContext.Provider>
        )
  }
}

export const useAuth = () => useContext(AuthContext); 