import React, { useContext, useState, useEffect } from "react";
import UserContext from "./context";
import { useSelector } from "react-redux";

const Home = () => {
  // const [data, setData] = useState("name");
  // const { user } = useContext(UserContext);
  // const profile = useSelector((state) => state.user);

  // useEffect(() => {
  //   setData(profile);
  // }, [profile]);

  // console.log(profile, data, "profilewwwwww");

  /* {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value === null ? "N/A" : value.toString()}
        </div>
      ))} */

  return <div>welcome to home bro!</div>;
};

export default Home;
