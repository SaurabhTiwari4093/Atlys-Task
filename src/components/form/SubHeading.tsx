interface Props {
  subHeading: string;
}

export default function SubHeading({ subHeading }: Props) {
  return (
    <div className="text-[#FFFFFF] text-[18px] font-[600] leading-[21.78px] mt-[8px]">
      {subHeading}
    </div>
  );
}
