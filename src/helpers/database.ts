import axios from "axios";
import Swal from "sweetalert2";

interface PropsVehicle {
  iduser: Number;
  plate: String;
  model: String;
  typevehicle: String;
  capacity: String;
  url: String;
  message: String;
}

export function saveVehicle({
  iduser,
  plate,
  model,
  typevehicle,
  capacity,
  url,
  message,
}: PropsVehicle) {
  axios
    .post(` ${process.env.REACT_APP_VERCEL_CONNECT}/${url}`, {
      driver_id: iduser,
      plate,
      model,
      type: typevehicle,
      capacity,
      creation_date: new Date(),
    })
    .then(function ({ data }) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `una  placa ha sido ${message} ${data.plate}`,
        showConfirmButton: false,
        timer: 3000,
      });
    })
    .catch(function (error) {});
}
