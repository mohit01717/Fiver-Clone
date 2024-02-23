import React, { useState } from "react";
import EyeOn from "remixicon-react/EyeLineIcon";
import OffEye from "remixicon-react/EyeOffLineIcon";
import Stop_circle from "remixicon-react/StopCircleLineIcon";
import "./login.css";
const Input = ({ type, name, placeholder, onchange, value }) => {
  return (
    <input
      className="Input_user"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onchange}
      value={value}
      required
    />
  );
};
const Button = ({ name,onclick }) => {
  return <button className="btn" onClick={onclick}>{name}</button>;
};
const Login = ({ name }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState({});
  const [eye, seteye] = useState(false);
  const [stop, setstop] = useState(false);

function handleClick(){
    // Perform validation
    const newErrors = {};
    if (email.trim() === '') {
     
      newErrors.username = 'Username is required';
    }
    else{
      
    }
    if (password.trim() === '') {
      newErrors.password = 'Password is required';
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
        <div className="login_input_border">
          <Input
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            onchange={(e) => setemail(e.target.value)}
            value={email}
          />
          {stop ? <Stop_circle color="red" /> : <Stop_circle color="black" />}
        </div>
        <div className="login_input_border">
          <Input
            type={eye?"text":"password"}
            name={"password"}
            
            placeholder={"Password"}
            onchange={(e) => setpassword(e.target.value)}
            value={password}
          />
          {eye ? (
            <EyeOn
              style={{ cursor: "pointer" }}
              onClick={() => seteye(false)}
            />
          ) : (
            <OffEye style={{cursor:"pointer"}} onClick={() => seteye(true)} />
          )}
        </div>

        <Button name={name} onclick={handleClick}  />
      </div>
    </div>
  );
};

export default Login;
