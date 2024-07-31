import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();     // Here he created context 
export default function AuthProvider({ children }) {  // The children prop represents the child components that will be wrapped by this context provider
  const initialAuthUser = localStorage.getItem("Users");
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
 