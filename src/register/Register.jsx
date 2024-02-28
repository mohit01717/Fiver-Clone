import React, { useEffect, useState } from "react";
import EyeOn from "remixicon-react/EyeLineIcon";
import OffEye from "remixicon-react/EyeOffLineIcon";
import Stop_circle from "remixicon-react/StopCircleLineIcon";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Button = ({ name, onclick }) => {
  return (
    <button className="btn" onClick={onclick}>
      {name}
    </button>
  );
};
const Register = ({ name }) => {
  const [eye, seteye] = useState(false);
  const [stop, setstop] = useState(false);
  const [data,setdata] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post('https://countriesnow.space/api/v0.1/countries');
  //     setdata(response.data.data)
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [])

 

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
          onSubmit={handleSubmit(async(data) => {
            // try{
            // const res  = await axios.post("http://localhost:8800/api/auth/register",data);
            // navigate("/");
            // }
            // catch(err){
            //   console.log(err.message);
            // }
            console.log(data);
          })}

        >
          <div className="login_inside_container">
            <div className="login_input_border">
              <input
                {...register("username", { required: "Username is required" })}
                type={"text"}
                name={"username"}
                placeholder={"Username"}
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
              name="username"
              render={({ message }) => (
                <p style={{ color: "red" }}>{message}</p>
              )}
            />
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
                {...register("country", { required: "Country is required" })}
                type={"country"}
                name={"country"}
                placeholder={"Country"}
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
              name="country"
              render={({ message }) => (
                <p style={{ color: "red" }}>{message}</p>
              )}
            />

<div className="login_input_border">
              <input
                {...register("phone", { required: "Country is required" })}
                type={"number"}
                name={"phone"}
                placeholder={"Phone Number"}
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
              name="country"
              render={({ message }) => (
                <p style={{ color: "red" }}>{message}</p>
              )}
            />


  <div className="">
              <input
                {...register("img", { required: "Image is required" })}
                type={"file"}
                name={"img"}
               
                className=" flex"
              />
            
            </div>
            <ErrorMessage
              errors={errors}
              name="image"
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

export default Register;
