import React from "react";
import { AuthProvider } from "./context/AuthProvider";
import { RouterGeneral } from "./router/RouterGeneral";

export const App = () => {
  return (
    <AuthProvider>
      <RouterGeneral />
    </AuthProvider>
  );
};

export default App;
