import { useState, ReactNode } from "react";
import Eye from "../assets/Eye.svg";
import EyeCross from "../assets/EyeCross.svg";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  username: string;
  pass: string;
}

interface Props {
  children?: ReactNode;
  isModal?: Boolean;
  setModalType?: (modalType: string) => void;
  setShowModal?: (show: boolean) => void;
}

export default function Register({
  children,
  isModal = false,
  setModalType,
  setShowModal,
}: Props) {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
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
    <div className="w-full max-w-[463px] rounded-[8px] p-[2px] bg-gradient-to-br from-[#969696] to-[#343434]">
      <div className="w-full h-full rounded-[6px] bg-[#27292D] px-[24px] py-[40px] flex flex-col items-center relative">
        {/* Comment: This childer is for closing of modal */}
        {isModal && children}
        <div className="text-[#6B6C70] text-[14px] font-[500] leading-[16.94px]">
          SIGN UP
        </div>
        <div className="text-[#FFFFFF] text-[18px] font-[600] leading-[21.78px] mt-[8px]">
          Create an account to continue
        </div>
        <form className="w-full mt-[45px]" onSubmit={(e) => handleRegister(e)}>
          <div className="flex flex-col">
            <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[16.94px]">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="mt-[10px] text-[#7F8084] text-[14px] leading-[19.36px] p-[12px] border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col mt-[15px]">
            <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[16.94px]">
              Username
            </label>
            <input
              type="text"
              placeholder="Choose a preferred username"
              className="mt-[10px] text-[#7F8084] text-[14px] leading-[19.36px] p-[12px] border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="flex flex-col mt-[15px]">
            <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[16.94px]">
              Password
            </label>
            <div className="relative w-full">
              {/* Comment: Made this relative container to add eye icon */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Choose a strong password"
                className="w-full mt-[10px] text-[#7F8084] text-[14px] leading-[19.36px] p-[12px] border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent"
                value={user.pass}
                onChange={(e) => setUser({ ...user, pass: e.target.value })}
              />
              <img
                src={showPassword ? Eye : EyeCross}
                alt="ShowHide"
                className="h-[20px] w-[30px] absolute cursor-pointer right-[12px] top-[23px]"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#4A96FF] text-[#fff] p-[12px] w-full text-center mt-[20px] rounded-[4px] text-[16px] leading-[19.36px] font-[500]"
          >
            Continue
          </button>
          <div className="mt-[12px] text-[14px] font-[500] leading-[16.94px]">
            <span className="text-[#7F8084]">Already have an account?</span>{" "}
            <span
              className="text-[#C5C7CA] cursor-pointer"
              onClick={handleFormChange}
            >
              Login →
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
