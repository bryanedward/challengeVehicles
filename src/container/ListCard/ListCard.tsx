import * as React from "react";
import { Card } from "../../components/Card";
import { ButtonAdd, ContainerList, Footer, ListCards } from "./Style";
import { BsPlusLg } from "react-icons/bs";
import Modal from "react-modal";
import { Forms } from "../Forms/Forms";
import { Pagination, PaginationItem } from "@mui/material";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { customStyles } from "../../interfaces/interfaces";
import { AuthContext } from "../../context/AuthContext";

export const ListCard = () => {
  const [data, setData] = React.useState<[]>([]);
  const [pagination, setPagination] = React.useState(0);
  const { authState, ditpach } = React.useContext(AuthContext);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/vehicle`)
      .then((response) => response.json())
      .then(({ data, count }) => {
        let cantPagination = Math.ceil(count / 30);
        setPagination(cantPagination);
        setData(data);
        authState.vehicles.push(data);
      });
  }, [authState]);

  const deleteData = (id: Number) => {
    // remove item
    setData((data: any) => {
      return data.filter((item: any) => item.id !== id);
    });
  };

  const addVehicle = () => {
    ditpach({
      type: "OPENMODEL",
      modal: true,
    });
  };

  function closeModal() {
    ditpach({
      type: "OPENMODEL",
      modal: false,
    });
  }

  const paginationButton = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/vehicle?id=${page}`)
      .then(function ({ data }) {
        setData(data.data);
      });
  };

  return (
    <ListCards>
      <ContainerList>
        {data.map((item: any, index) => (
          <Card key={index} {...item} deleteData={deleteData} />
        ))}
      </ContainerList>
      <ButtonAdd onClick={addVehicle}>
        <BsPlusLg size="30" />
      </ButtonAdd>

      <Footer>
        <Pagination
          size="medium"
          count={pagination}
          onChange={paginationButton}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: AiOutlineArrowLeft,
                next: AiOutlineArrowRight,
              }}
              {...item}
            />
          )}
        />
      </Footer>
      <Modal
        isOpen={authState.modal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Forms setIsOpen={ditpach} />
      </Modal>
    </ListCards>
  );
};
