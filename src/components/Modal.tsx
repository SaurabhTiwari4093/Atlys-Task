import { useEffect, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Cross from "../assets/Cross.svg";

interface Props {
  setShowModal: (show: boolean) => void;
}

interface CloseButtonProps {
  setShowModal: (show: boolean) => void;
  setTransition: (transition: string) => void;
}

function ModalCloseButton({ setShowModal, setTransition }: CloseButtonProps) {
  const closeModal = () => {
    setTransition("opacity-0");
    setTimeout(() => setShowModal(false), 300);
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
  const [transition, setTransition] = useState<string>("opacity-0");
  const [modalType, setModalType] = useState<string>("register");

  useEffect(() => {
    const timer = setTimeout(() => setTransition("opacity-100"), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-[#00000050] fixed top-0 left-0 h-screen w-full flex justify-center items-center backdrop-blur-[2.5px] p-[12px] transition-opacity duration-300 ease-out ${transition}`}
    >
      {/* Comment: Given padding (12px) for small screen */}
      {modalType === "register" && (
        <Register
          isModal={true}
          setModalType={setModalType}
          setShowModal={setShowModal}
        >
          <ModalCloseButton
            setShowModal={setShowModal}
            setTransition={setTransition}
          />
        </Register>
      )}
      {modalType === "login" && (
        <Login
          isModal={true}
          setModalType={setModalType}
          setShowModal={setShowModal}
        >
          <ModalCloseButton
            setShowModal={setShowModal}
            setTransition={setTransition}
          />
        </Login>
      )}
    </div>
  );
}
