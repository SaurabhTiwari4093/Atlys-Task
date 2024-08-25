import { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  PassField,
  TextField,
  Heading,
  SubHeading,
  SubmitButton,
  FormContainer,
  ChangeForm,
} from "./form/index";

interface User {
  email: string;
  username: string;
  pass: string;
}

interface Props {
  children?: ReactNode;
  isModal?: boolean;
  setModalType?: (modalType: string) => void;
  setShowModal?: (show: boolean) => void;
}

export default function Register({
  children,
  isModal = false,
  setModalType,
  setShowModal,
}: Props) {
  const [user, setUser] = useState<User>({
    email: "",
    username: "",
    pass: "",
  });
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    // Comment: Done this to prevent form submission and reload
    e.preventDefault();
    console.log("User is ", user);
    if (isModal && setShowModal) {
      setShowModal(false);
    } else {
      navigate("/home");
    }
  };

  const handleFormChange = () => {
    if (isModal && setModalType) {
      setModalType("login");
    }
  };

  return (
    <FormContainer>
      {/* Comment: This children is for closing of modal */}
      {isModal && children}
      <Heading heading="SIGN UP" />
      <SubHeading subHeading="Create an account to continue" />
      <form className="w-full mt-[30px]" onSubmit={(e) => handleRegister(e)}>
        <TextField
          label="Email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          label="Username"
          placeholder="Choose a preferred username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <PassField
          label="Password"
          placeholder="Choose a strong password"
          forgetPass={false}
          value={user.pass}
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
        <SubmitButton buttonText="Continue" />
        <ChangeForm
          reason="Already have an account?"
          changeTo="Login →"
          handleChange={handleFormChange}
        />
      </form>
    </FormContainer>
  );
}
