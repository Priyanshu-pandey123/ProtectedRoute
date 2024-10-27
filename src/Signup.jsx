import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "./utils";

const Signup = () => {
  const [login, setLogin] = useState(false);
  const [log, setLog] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(url + "/signup", formData);
      if (response.status >= 200 && response.status < 300) {
        setLogin(true);
        setLog(response?.data?.message);
        toast.success(response?.data?.message || "not make the request", {
          position: "top-right",
          autoClose: 3000, // Auto close after 3 seconds
        });
      } else {
        toast.error(response?.data || "not make the request", {
          position: "top-right",
          autoClose: 3000, // Auto close after 3 seconds
        });
        throw new Error("Network response was not ok: " + response.statusText);
      }
    } catch (error) {
      toast.error(error?.response?.data || "not make the request", {
        position: "top-right",
        autoClose: 3000, // Auto close after 3 seconds
      });
    }
  };

  return (
    <div className="pt-44">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-div">
          <label>name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="form-div">
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}{" "}
        </div>
        <div className="form-div">
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <input type="submit" value="Submit" />
        {login && (
          <div>
            <h2>Login Successful!</h2>
            <p>{log}</p>
          </div>
        )}
      </form>
      <button type="button">Login with Google</button>
      <ToastContainer />
    </div>
  );
};

export default Signup;
