import { ChangeEvent } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function TextField({
  label,
  value,
  onChange,
  placeholder,
}: Props) {
  return (
    <div className="flex flex-col mt-[15px]">
      <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[16.94px]">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-[10px] text-[#7F8084] text-[14px] leading-[19.36px] p-[12px] border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
