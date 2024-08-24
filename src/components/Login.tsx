import { useState, ReactNode } from "react";
import Eye from "../assets/Eye.svg";
import EyeCross from "../assets/EyeCross.svg";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  pass: string;
}

interface Props {
  children?: ReactNode;
  isModal?: Boolean;
  setModalType?: (modalType: string) => void;
  setShowModal?: (show: boolean) => void;
}

function Login({
  children,
  isModal = false,
  setModalType,
  setShowModal,
}: Props) {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
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
    <div className="w-full max-w-[463px] rounded-[8px] p-[2px] bg-gradient-to-br from-[#969696] to-[#343434]">
      {/* Comment: For gradient border using tailwind given bg color to outer container*/}
      <div className="w-full h-full rounded-[6px] bg-[#27292D] px-[24px] py-[40px] flex flex-col items-center relative">
        {/* Comment: This childer is for closing of modal */}
        {children}
        <div className="text-[#6B6C70] text-[14px] font-[500] leading-[16.94px]">
          WELCOME BACK
        </div>
        <div className="text-[#FFFFFF] text-[18px] font-[600] leading-[21.78px] mt-[8px]">
          Log into your account
        </div>
        <form className="w-full mt-[45px]" onSubmit={(e) => handleLogin(e)}>
          <div className="flex flex-col">
            <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[16.94px]">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="mt-[10px] text-[#7F8084] text-[14px] leading-[19.36px] p-[12px] border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col mt-[15px]">
            <div className="flex justify-between items-end">
              <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[16.94px]">
                Password
              </label>
              <div className="text-[#C5C7CA] text-[12px] leading-[14.52px] font-[500]">
                Forgot password?
              </div>
            </div>
            <div className="relative w-full">
              {/* Comment: Made this relative container to add eye icon */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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
            Login now
          </button>
          <div className="mt-[12px] text-[14px] font-[500] leading-[16.94px]">
            <span className="text-[#7F8084]">Not registered yet?</span>{" "}
            <span
              className="text-[#C5C7CA] cursor-pointer"
              onClick={handleFormChange}
            >
              Register →
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
