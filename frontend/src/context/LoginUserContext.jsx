/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState, useEffect } from "react";

const LoginUserContext = createContext();

export function LoginUserProvider({ children }) {
  const [loginUser, setLoginUser] = useState({
    id: localStorage.getItem("id"),
    role: localStorage.getItem("role"),
    email: localStorage.getItem("email"),
  });

  useEffect(() => {
    localStorage.setItem("id", loginUser.id);
    localStorage.setItem("role", loginUser.role);
    localStorage.setItem("email", loginUser.email);
  }, [loginUser]);

  const props = useMemo(() => ({ loginUser, setLoginUser }), [loginUser]);

  return (
    <LoginUserContext.Provider value={props}>
      {children}
    </LoginUserContext.Provider>
  );
}

export default LoginUserContext;
