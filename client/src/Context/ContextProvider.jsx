/* eslint-disable */
import { useState, createContext, useContext } from "react";


const AppContext = createContext();

function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log(user);

  const getUserDetails = async () => {
    const dataResponse = await fetch("http://localhost:3000/api/v1/user/user-details", {
      method: "GET",
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      setUser(dataApi?.data);
    }
  };
  return (
    <AppContext.Provider
      value={{
        getUserDetails,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
   console.log(context)
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export default ContextProvider;

