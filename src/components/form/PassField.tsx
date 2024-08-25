import { useState, ChangeEvent } from "react";
import Eye from "../../assets/Eye.svg";
import EyeCross from "../../assets/EyeCross.svg";

interface Props {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  forgetPass: boolean;
}

export default function PassField({
  label,
  value,
  onChange,
  placeholder,
  forgetPass,
}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col mt-[15px]">
      <div className="flex justify-between items-end">
        <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[16.94px]">
          {label}
        </label>
        {forgetPass && (
          <div className="text-[#C5C7CA] text-[12px] leading-[14.52px] font-[500]">
            Forgot password?
          </div>
        )}
      </div>
      <div className="relative w-full">
        {/* Comment: Made this relative container to add eye icon */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full mt-[10px] text-[#7F8084] text-[14px] leading-[19.36px] p-[12px] border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent"
          value={value}
          onChange={onChange}
        />
        <img
          src={showPassword ? Eye : EyeCross}
          alt="ShowHide"
          className="h-[20px] w-[30px] absolute cursor-pointer right-[12px] top-[23px]"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
    </div>
  );
}
