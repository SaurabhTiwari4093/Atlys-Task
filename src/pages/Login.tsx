import Logo from "../assets/Logo.svg";
import LoginForm from "../components/Login";

function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-[49px] p-[12px]">
      {/* Comment: Given padding (12px) for small screen */}
      <img src={Logo} alt="Logo" className="h-[40px] w-[40px]" />
      <LoginForm />
    </div>
  );
}

export default Login;
