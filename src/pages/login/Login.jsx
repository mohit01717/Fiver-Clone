import React, { useState } from "react";
import EyeOn from "remixicon-react/EyeLineIcon";
import OffEye from "remixicon-react/EyeOffLineIcon";
import Stop_circle from "remixicon-react/StopCircleLineIcon";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./login.css";
// import axios from "axios";
import newRequest from "../../utils/newRequest"
import { useNavigate } from "react-router-dom";

const Button = ({ name, onclick }) => {
  return (
    <button className="btn" onClick={onclick}>
      {name}
    </button>
  );
};
const Login = ({ name }) => {
  const [eye, seteye] = useState(false);
  const [stop, setstop] = useState(false);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e)=>{
      e.preventDefault()
      try{
        // await newRequest.post("/auth/login", {username, password})
        const res = await newRequest.post("/auth/login", {username, password})
        // console.log(res.data)
        localStorage.setItem("currentUser", JSON.stringify(res.data))
        navigate("/")
      }catch(err){
        setError(err.response.data)
        // console.log(err.response.data)
      }
  }

  return (
    <div className="Login-outer-container">
      <div className="Login_image_container">
        <img
          className="login_image"
          src="https://fiverr-res.cloudinary.com/npm-assets/layout-server/standard.0638957.png"
          alt=""
        />
      </div>
      <div className="login_container">
        <h1>{name}</h1>
        <form
          onSubmit={handleSubmit}
        >
          <div className="login_inside_container">
            <div className="login_input_border">
              <input
                {...register("Username", { required: "Username is required" })}
                type={"text"}
                name={"username"}
                placeholder={"Username"}
                className="Input_user"
                onChange={e=>setUsername(e.target.value)}
              />
              {stop ? (
                <Stop_circle color="red" />
              ) : (
                <Stop_circle color="black" />
              )}
            </div>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p style={{ color: "red" }}>{message}</p>
              
              )}
            />
            <div className="login_input_border">
              <input
                {...register("password", { required: "Password is required" })}
                type={eye ? "text" : "password"}
                name={"password"}
                placeholder={"Password"}
                className="Input_user"
                onChange={e=>setPassword(e.target.value)}
              />
              {eye ? (
                <EyeOn
                  style={{ cursor: "pointer" }}
                  onClick={() => seteye(false)}
                />
              ) : (
                <OffEye
                  style={{ cursor: "pointer" }}
                  onClick={() => seteye(true)}
                />
              )}
            </div>
          

            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <p style={{ color: "red" }}>{message}</p>
              )}
            />
            <Button name={name} />
            {error && error}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
