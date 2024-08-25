interface Props {
  heading: string;
}

export default function Heading({ heading }: Props) {
  return (
    <div className="text-[#6B6C70] text-[14px] font-[500] leading-[16.94px]">
      {heading}
    </div>
  );
}
