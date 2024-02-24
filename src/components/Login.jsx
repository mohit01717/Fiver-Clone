import React, { useState } from "react";
import EyeOn from "remixicon-react/EyeLineIcon";
import OffEye from "remixicon-react/EyeOffLineIcon";
import Stop_circle from "remixicon-react/StopCircleLineIcon";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./login.css";

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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="login_inside_container">
            <div className="login_input_border">
              <input
                {...register("email", { required: "Email is required" })}
                type={"email"}
                name={"email"}
                placeholder={"Email"}
                className="Input_user"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
