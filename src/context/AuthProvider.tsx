import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

const initialState = {
  isAuthenticated: false,
  name: "",
  iduser: 0,
  modal: false,
  selectItem: {},
};

export const AuthProvider = ({ children }: any) => {
  const [authState, ditpach] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, ditpach }}>
      {children}
    </AuthContext.Provider>
  );
};
