import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-col  items-center "
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
        }}
      >
        <Header />
        <form className="flex flex-col w-[500px] bg-opacity-70 bg-black text-white">
          <h1 className="text-3xl text-white font-bold p-5 mx-[10%] pb-0 pl-0">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              className="p-5 mx-[10%] my-4 w-4/5 bg-gray-900 placeholder-white"
              type="text"
              placeholder="Full Name"
            ></input>
          )}
          <input
            className="p-5 mx-[10%] my-4 w-4/5 bg-gray-900 placeholder-white"
            type="email"
            placeholder="Email or mobile number"
          ></input>
          <input
            className="p-5 mx-[10%] my-4 w-4/5 bg-gray-900 placeholder-white"
            type="password"
            placeholder="Password"
          ></input>
          <button
            type="button"
            className="bg-red-600 text-white p-5 mx-[10%] mt-5 w-4/5 font-bold rounded-lg"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleForm} className="my-4 mx-[10%] cursor-pointer">
            {isSignIn
              ? "New to Netfix? Sign Up Now!"
              : "Already a user? Sign in!"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
