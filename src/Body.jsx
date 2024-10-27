import React, { useContext } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import UserContext from "./context";
import Home from "./Home";
import Footer from "./component/Footer";

const Body = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
