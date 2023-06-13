import {IoLogoGoogle, IoLogoFacebook} from "react-icons/io"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex justify-center items-center h-[100vh]  bg-c1">
      <div className="flex items-center flex-col ">
        <div className="text-center">
          <div className="text-4xl font-bold">Login here</div>
          <div className="mt-3 text-c3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, officiis!</div>
        </div>
        <div className="flex items-center gap-2 w-full mt-10 mb-5 ">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[1px]">
            <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 wful h-full rounded-md">
              <IoLogoGoogle size={24}/>
              <span>Login with Google</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[1px]">
            <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 wful h-full rounded-md">
            <IoLogoFacebook size={24}/>
              <span>Login with Facebook</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-5 h-[1px] bg-c3"></span>
          <span className="text-c3 font-semibold">OR</span>
          <span className="w-5 h-[1px] bg-c3"></span>
        </div>
        <form className="flex flex-col items-center gap-3 w-[500px] mt-5">
          <input type="email" placeholder="email" className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3" autoComplete="off"/>
          <input type="password" placeholder="password" className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3" autoComplete="off"/>
        <div className="text-right w-full text-c3 cursor-pointer">
          <span>Forot pasword?</span>
        </div>
        <button className="mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Login</button>
        </form>
        <div className="flex justify-center gap-1 text-c3 mt-5">
          <span>not a member yet?</span>
          <Link to="/register" className="font-semibold text-white underline cursor-pointer">Register now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
