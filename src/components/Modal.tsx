import { useEffect, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Cross from "../assets/Cross.svg";

interface Props {
  setShowModal: (show: boolean) => void;
}

function ModalCloseButton({ setShowModal }: Props) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className="absolute top-[16px] right-[16px] bg-[#131319] rounded-full h-[32px] w-[32px] flex justify-center items-center cursor-pointer"
      onClick={closeModal}
    >
      <img src={Cross} alt="Close" className="h-[16px] w-[16px]" />
    </div>
  );
}

export default function Modal({ setShowModal }: Props) {
  const [modalType, setModalType] = useState<string>("register");

  const getModalBasedOnModalType = () => {
    switch (modalType) {
      case "register":
        return (
          <Register
            isModal={true}
            setModalType={setModalType}
            setShowModal={setShowModal}
          >
            <ModalCloseButton setShowModal={setShowModal} />
          </Register>
        );
      case "login":
        return (
          <Login
            isModal={true}
            setModalType={setModalType}
            setShowModal={setShowModal}
          >
            <ModalCloseButton setShowModal={setShowModal} />
          </Login>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#00000050] fixed top-0 left-0 h-screen w-full flex justify-center items-center backdrop-blur-[2.5px]">
      {getModalBasedOnModalType()}
    </div>
  );
}
