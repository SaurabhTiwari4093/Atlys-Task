import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function FormContainer({ children }: Props) {
  return (
    <div className="w-full max-w-[463px] rounded-[8px] p-[2px] bg-gradient-to-br from-[#969696] to-[#343434]">
      {/* Comment: For gradient border using tailwind given bg color to outer container*/}
      <div className="w-full h-full rounded-[6px] bg-[#27292D] px-[24px] py-[40px] flex flex-col items-center relative">
        {children}
      </div>
    </div>
  );
}
