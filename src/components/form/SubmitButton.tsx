
interface Props {
  buttonText: string;
}

export default function SubmitButton({ buttonText }: Props) {
  return (
    <button
      type="submit"
      className="bg-[#4A96FF] text-[#fff] p-[12px] w-full text-center mt-[20px] rounded-[4px] text-[16px] leading-[19.36px] font-[500]"
    >
      {buttonText}
    </button>
  );
}
