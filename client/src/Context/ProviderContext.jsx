const { createContext, useState } = require("react");

const Context = createContext();

export function ProviderContext({ children }) {
  const [user, setUser] = useState(null);
  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  );
}
