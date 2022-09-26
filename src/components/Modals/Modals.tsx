import * as React from "react";
import Modal from "react-modal";
import { Forms } from "../../container/Forms/Forms";
import { customStyles } from "../../interfaces/interfaces";

type Props = {
  openModal: boolean;
};

export const Modals = ({ openModal }: Props) => {
  const [modalIsOpen, setIsOpen] = React.useState(openModal);

  React.useEffect(() => {
    if (openModal) {
      setIsOpen(openModal);
    }
  }, [openModal]);

  function closeModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Forms setIsOpen={setIsOpen} />
    </Modal>
  );
};
