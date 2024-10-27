import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./context";
import { url } from "./utils";

const Header = () => {
  const [profileData, setProfileData] = useState(null);
  const { user } = useContext(UserContext);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-white shadow-md p-4 z-50">
      <Link
        to="/login"
        className="p-4 m-2 bg-slate-400 border border-b rounded-md"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="p-4 m-2 bg-slate-400 border border-b rounded-md"
      >
        Signup
      </Link>
    </div>
  );
};

export default Header;
