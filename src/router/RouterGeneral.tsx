import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";
import { Login } from "../page/Login/Login";
import { RouterPrivate } from "./RouterPrivate";

export const RouterGeneral = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RouterPrivate>
              <Home />
            </RouterPrivate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
