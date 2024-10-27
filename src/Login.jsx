import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL, url } from "./utils";
import UserContext from "./context";
import { useDispatch } from "react-redux";
import { setUser } from "./slice/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(url + "/login");
      const res = await axios.post(url + "/login", data, {
        withCredentials: true,
      });
      dispatch(setUser(res?.data?.data));
      toast.success(res?.data?.message, {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/profile");
    } catch (err) {
      toast.error(err?.response?.data?.message || err.message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleGoogleLogIn = () => {
    console.log("Google Login", BASE_URL + "user/auth/goole");
    window.location.href = BASE_URL + "user/auth/google";
    // navigate("/profile");
  };

  return (
    <div className="pt-32">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="m-2 p-4 bg-slate-400 border-2 border-b rounded-lg"
            type="text"
            {...register("email", { required: "email is required" })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="m-2 p-4 bg-slate-400 border-2 border-b rounded-lg"
            type="password"
            name="password"
            {...register("password", { required: "password is required" })}
          />
        </div>
        <button
          className="m-2 p-2 bg-blue-400 border-2 border-b rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        className="m-2 p-4 bg-red-400 border-2 border-b rounded-lg"
        onClick={handleGoogleLogIn}
      >
        LoginWithGoogle
      </button>

      {/* Toast Container to render notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;
