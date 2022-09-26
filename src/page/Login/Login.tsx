import * as React from "react";
import { ContainerLogin, Form } from "./Style";
import { Input, Button } from "@mui/material";
import { BsPersonFill } from "react-icons/bs";
import { UseForm } from "../../hooks/UseForm";
import validator from "validator";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, addInput] = UseForm({ email: "edwardbrian96@gmail.com" });
  const { ditpach } = React.useContext(AuthContext);
  const { email } = user;
  const navigate = useNavigate();
  const auth = () => {
    if (validator.isEmail(email)) {
      try {
        axios
          .post(`${process.env.REACT_APP_API_URL}/driver`, {
            email,
          })
          .then(function ({ status, data }) {
            if (status === 200) {
              ditpach({
                type: "LOGIN",
                isAuthenticated: true,
                name: data.first_name,
                iduser: data.id,
              });
              navigate("/");
            }
          })
          .catch(function (error) {});
      } catch (error) {}
    } else {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Prueba con un correo existente",
      });
    }
  };

  return (
    <ContainerLogin>
      <BsPersonFill size="40" />
      <h3>Welcome user !</h3>
      <Form>
        <Input
          placeholder="add email"
          name="email"
          value={email}
          onChange={addInput}
          required
        />
        <Button onClick={auth}>Acceder</Button>
      </Form>
    </ContainerLogin>
  );
};
