import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "Julian Drake"
  );

  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || "julian.drake@example.com"
  );


  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);

  }, [darkMode]);


  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };


  const saveProfile = (name, email) => {

    const newName = name.trim() || "Julian Drake";

    setUserName(newName);
    setUserEmail(email);

    localStorage.setItem("userName", newName);
    localStorage.setItem("userEmail", email);

  };


  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleTheme,
        userName,
        userEmail,
        saveProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useApp = () => {
  return useContext(AppContext);
};