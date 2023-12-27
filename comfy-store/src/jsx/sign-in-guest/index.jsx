import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Input from "../../components/inputs";
import Button from "../../components/buttons";

const SignInGuest = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleLogin = async () => {
    
    try{
      
      const resp = await fetch("https://strapi-store-server.onrender.com/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    });

    if (resp.ok) {
      console.log("successful");
      Navigate("/home", { replace: true });
    } else {
      console.error("unsuccessful");
    } 

    } catch {
      console.error(error);
    }};

  return (
    <>
      <div className="login-wrapper">
        <h4 className="signIn-title">Login</h4>
        <Input
          onChange={(e) => setIdentifier(e.target.value)}
          value={identifier}
          formName="inputForm"
          labelName="email"
          inputTitle="Email"
          type="email"
          inputClass="input-email"
          labelClass="input-label"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          formName="inputForm"
          labelName="password"
          inputTitle="Password"
          type="password"
          inputClass="input-email"
          labelClass="input-label"
        />
        <Button onClick={handleLogin} title="LOGIN" buttonClass="login-btn" />
        <Button title="GUEST USER" buttonClass="guest-user-btn" />

        <div className="footer-form">
          <span>Not a member yet?</span>
          <Link to="/createAccount">Register</Link>
        </div>
      </div>
    </>
  );
};

export default SignInGuest;
