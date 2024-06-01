import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <h1 className="text-blue-600 text-5xl font-bold">Facebook</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 w-[7rem] text-white font-bold py-2 px-4 rounded mt-5 block mx-auto"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      </div>
    </div>
  );
};
export default LoginButton;
