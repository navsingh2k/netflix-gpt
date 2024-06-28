import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateFormData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const validateForm = () => {
    const message = ValidateFormData(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(message);
    if (!message) {
      if (!isSignIn) {
        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };
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
            ref={emailRef}
            className="p-5 mx-[10%] my-4 w-4/5 bg-gray-900 placeholder-white"
            type="email"
            placeholder="Email or mobile number"
          ></input>
          <input
            ref={passwordRef}
            className="p-5 mx-[10%] my-4 w-4/5 bg-gray-900 placeholder-white"
            type="password"
            placeholder="Password"
          ></input>
          <button
            type="button"
            className="bg-red-600 text-white p-5 mx-[10%] mt-5 w-4/5 font-bold rounded-lg"
            onClick={validateForm}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-red-500 font-bold mx-[10%] py-4">{errorMessage}</p>
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
