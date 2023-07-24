import React, { createContext, useState } from 'react'

export const AuthContext=createContext()

const AuthContextProvider = (props) => {
const [isAuth,setAuth]=useState(false)
const [userData,setUserData]=useState({})

  return (
    <AuthContext.Provider value={{isAuth,setAuth,userData,setUserData}}>
      {props.children}
    </AuthContext.Provider>
  )
}



export default AuthContextProvider
