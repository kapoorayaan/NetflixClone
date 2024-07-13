import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { background_IMG } from "../Utils/constants";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const nav = useNavigate();
  const [errorMessage, seterrorMesage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    //validate form data
    const message = checkData(email.current.value, password.current.value);
    seterrorMesage(message);
    if (message) return;
    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              seterrorMesage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMesage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMesage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignIn = () => {
    setisSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-screen  ">
        <img className="w-[100%]" src={background_IMG} alt="logo"></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 p-12 bg-black absolute my-36  mx-auto right-0 left-0 text-white bg-opacity-80 "
      >
        <h1 className="text-3xl font-bold ">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg" p-2>
          {errorMessage}
        </p>
        <button
          className="p-4 my-6 shadow-lg bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 m-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already a user? Login now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
