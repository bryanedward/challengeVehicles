import {
  ActionButtonEdit,
  ActionsButton,
  ActionsButtonDelete,
  CarBody,
  CardBack,
  CardDate,
  CardFront,
  CardStyle,
  ContainerPrincipal,
  Details,
  GroupButton,
  HeaderCard,
  MainCard,
} from "./style";
import { MdDelete, MdEdit, MdEmojiTransportation } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { AiOutlineRollback } from "react-icons/ai";
import React from "react";
import { AuthContext } from "../context/AuthContext";

interface VehicleProps {
  plate: string;
  id: Number;
  model: String;
  type: String;
  capacity: String;
  creation_date: Date;
  driver: {
    first_name: String;
    last_name: String;
    email: String;
    phone: String;
    id: Number;
  };
  deleteData: (id: Number) => void;
}

export const Card = ({
  id,
  model,
  plate,
  type,
  capacity,
  driver,
  creation_date,
  deleteData,
}: VehicleProps) => {
  const { ditpach } = React.useContext(AuthContext);

  const deleteVehicle = (id: Number) => {
    // delete vehicle

    Swal.fire({
      title: "Estas seguro?",
      text: "No podras volver a recuperar la información!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", " vehiculo eliminado.", "success");
        deleteData(id);
        axios.delete(`${process.env.REACT_APP_API_URL}/vehicle?id=${id}`);
      }
    });
  };

  const updateVehicle = (
    id: Number,
    model: String,
    plate: String,
    type: String,
    capacity: String
  ) => {
    // update vehivles
    ditpach({
      type: "SELECTMODEL",
      plate: plate,
      model: model,
      id: id,
      typevehicle: type,
      capacity: capacity,
    });
    const data = { id, model, plate, type, capacity };
    ditpach({
      type: "UPDATEVEHICLES",
      vehcicles: data,
    });
  };

  return (
    <CardStyle>
      <CarBody className="body">
        <CardFront>
          <ContainerPrincipal>
            <HeaderCard>
              <p>Conductor responsable {String(id)}</p>
              <small>{driver.first_name}</small>
            </HeaderCard>
            <MainCard>
              <div>
                <Details>
                  Tipo
                  <small>{type}</small>
                </Details>
                <Details>
                  Modelo
                  <small>{model}</small>
                </Details>
                <Details>
                  Capacidad
                  <small>{capacity}</small>
                </Details>
                <Details>
                  Placa
                  <small>{plate}</small>
                </Details>
              </div>
              <div>
                <MdEmojiTransportation size="40" />
              </div>
            </MainCard>
            <div>
              <CardDate>
                <p>{new Date(creation_date).getFullYear().toString()}</p>
              </CardDate>
              <ActionsButton>
                <AiOutlineRollback />
              </ActionsButton>
            </div>
          </ContainerPrincipal>
        </CardFront>
        <CardBack>
          <ContainerPrincipal>
            <HeaderCard>
              <p>¿Sabias qué ?</p>
              <GroupButton>
                <ActionButtonEdit>
                  <MdEdit
                    onClick={() =>
                      updateVehicle(id, model, plate, type, capacity)
                    }
                  />
                </ActionButtonEdit>
                <ActionsButtonDelete>
                  <MdDelete onClick={() => deleteVehicle(id)} />
                </ActionsButtonDelete>
              </GroupButton>
            </HeaderCard>
            <MainCard>
              <p>
                El propietario se llama {driver.first_name} {driver.last_name} y
                su correo es {driver.email} lo puedes contactar al celular{" "}
                {driver.phone}
              </p>
              <div></div>
            </MainCard>
            <div></div>
          </ContainerPrincipal>
        </CardBack>
      </CarBody>
    </CardStyle>
  );
};
