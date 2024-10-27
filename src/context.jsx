// UserContext.js
import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const data = "123";

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, data }}>
      {children}
    </UserContext.Provider>
  );
};

// Export the context to be used in other components
export default UserContext;
