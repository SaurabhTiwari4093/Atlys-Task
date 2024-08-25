import { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  SubHeading,
  PassField,
  TextField,
  SubmitButton,
  FormContainer,
  ChangeForm,
} from "./form/index";

interface User {
  email: string;
  pass: string;
}

interface Props {
  children?: ReactNode;
  isModal?: boolean;
  setModalType?: (modalType: string) => void;
  setShowModal?: (show: boolean) => void;
}

function Login({
  children,
  isModal = false,
  setModalType,
  setShowModal,
}: Props) {
  const [user, setUser] = useState<User>({
    email: "",
    pass: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
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
      setModalType("register");
    }
  };

  return (
    <FormContainer>
      {/* Comment: This children is for closing of modal */}
      {isModal && children}
      <Heading heading="WELCOME BACK" />
      <SubHeading subHeading="Log into your account" />
      <form className="w-full mt-[30px]" onSubmit={(e) => handleLogin(e)}>
        <TextField
          label="Email or Username"
          placeholder="Enter your email or username"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <PassField
          label="Password"
          placeholder="Enter your password"
          value={user.pass}
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          forgetPass={true}
        />
        <SubmitButton buttonText="Login now" />
        <ChangeForm
          reason="Not registered yet?"
          changeTo="Register →"
          handleChange={handleFormChange}
        />
      </form>
    </FormContainer>
  );
}

export default Login;
