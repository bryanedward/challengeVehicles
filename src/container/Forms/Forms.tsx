import {
  Input,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import * as React from "react";
import { AuthContext } from "../../context/AuthContext";
import { ButtonForm, Form } from "./Style";
import validator from "validator";
import Swal from "sweetalert2";
import { saveVehicle } from "../../helpers/database";

const newVehicle = {
  plate: "",
  model: "",
  typevehicle: "",
  capacity: "",
};

export const Forms = ({ setIsOpen }: any) => {
  const { authState } = React.useContext(AuthContext);

  const [value, setValue] = React.useState(newVehicle);

  React.useEffect(() => {
    if (authState.selectItem.id > 0) {
      setValue(authState.selectItem);
    } else {
      setValue({ plate: "", model: "", typevehicle: "", capacity: "" });
    }
  }, [authState]);
  const { plate, model, typevehicle, capacity } = value;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !validator.isEmpty(plate) &&
      !validator.isEmpty(model) &&
      !validator.isEmpty(typevehicle) &&
      !validator.isEmpty(capacity)
    ) {
      if (authState.selectItem.id > 0) {
        saveVehicle({
          iduser: authState.selectItem.id,
          plate,
          model,
          typevehicle,
          capacity,
          url: "vehicle/update",
          message: "actualizado",
        });
      } else {
        saveVehicle({
          iduser: authState.iduser,
          plate,
          model,
          typevehicle,
          capacity,
          url: "vehicle",
          message: "agredado",
        });
      }
      setIsOpen({
        type: "OPENMODEL",
        modal: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "complete todos los campos!",
      });
    }
  };

  const addInput = ({ target }: any) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <h4>
        Listo para {authState.selectItem.id > 0 ? "modificar" : "crear"}{" "}
        {authState.name}
      </h4>
      <Input
        placeholder="Placa"
        color="primary"
        size="medium"
        name="plate"
        value={plate}
        onChange={addInput}
      />
      <Input
        placeholder="Modelo"
        color="primary"
        required
        name="model"
        value={model}
        onChange={addInput}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="typevehicle"
          name="typevehicle"
          value={typevehicle}
          onChange={addInput}
        >
          <MenuItem></MenuItem>
          <MenuItem value="van">van</MenuItem>
          <MenuItem value="car">car</MenuItem>
          <MenuItem value="busmotorcycle">busmotorcycle</MenuItem>
          <MenuItem value="motorcycle">motorcycle</MenuItem>
          <MenuItem value="truck">truck</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">capacity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="capacity"
          name="capacity"
          value={capacity}
          onChange={addInput}
        >
          <MenuItem></MenuItem>
          <MenuItem value="small">small</MenuItem>
          <MenuItem value="medium">medium</MenuItem>
          <MenuItem value="large">large</MenuItem>
        </Select>
      </FormControl>
      <ButtonForm>Guardar vehiculo</ButtonForm>
    </Form>
  );
};
