import React, { useEffect } from "react";
import image from "../Utils/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { userAvatar } from "../Utils/constants";

const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            photoURL: userAvatar,
          })
        );
        nav("/browse");
      } else {
        dispatch(removeUser());
        nav("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen flex  bg-gradient-to-b from-black z-10  justify-between">
      <img className="w-44  px-8 py-2 " src={image} alt="logo"></img>
      {user && (
        <div className=" p-6  flex">
          <img className="w-10 h-10" src={userAvatar} alt="usericon"></img>
          <button onClick={handleSignout} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
