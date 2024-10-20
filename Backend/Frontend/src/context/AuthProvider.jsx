//            Simple way of understanding this 

//  Step 1 ----  We should create a context by AuthContext
//  Step 2 ----  We have to create function by which we can wrapp the root component so which we can use it on child component (used in main.js)
//  Step 3 ----  Value is the "value" which we will pass to the children 
//  Step 4 ----  We have created the createContext now we have to use it 
//            -  createContext
//            -  Provider
//            -  useContext
//  Step 5 ----  Think useContext as the instance of the AuthContext , where as this instance can access the data of the
//               context which is created
//  Step 6 ----  First wrapp the root component with the function which is as a Provider 
//               Second create the useContext to use the context




import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();     // Here he created context 

export default function AuthProvider({ children }) {  // The children prop represents the child components that will be wrapped by this context provider

  const initialAuthUser = localStorage.getItem("Users");  // Get the data from localhost if we are logined or not

  // JSON.parse() to convert this JSON string back into a JavaScript object
  // Data stored in localStorage is in string so by parsing it we convert to JS Object
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>   {/* The purpose of this is to wrap any child components that are rendered within the context provider.
      Whatever components are placed inside the <AuthContext.Provider> will have access to the context value (authUser and setAuthUser)*/}
      {children}                                             
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);     // Here we use the context
 


