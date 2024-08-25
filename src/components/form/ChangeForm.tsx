interface Props {
  reason: string;
  changeTo: string;
  handleChange: () => void;
}

export default function ChangeForm({ reason, changeTo, handleChange }: Props) {
  return (
    <div className="mt-[12px] text-[14px] font-[500] leading-[16.94px]">
      <span className="text-[#7F8084]">{reason}</span>{" "}
      <span className="text-[#C5C7CA] cursor-pointer" onClick={handleChange}>
        {changeTo}
      </span>
    </div>
  );
}
