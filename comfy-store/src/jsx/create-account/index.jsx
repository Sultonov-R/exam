import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState,} from "react";
import Input from "../../components/inputs";
import Button from "../../components/buttons";
import Cookies from "js-cookie";

const CreateAccount = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();

    console.log(e.target.value);

    if (validate()) {
      let data = {
        username: user,
        email: email,
        password: password,
      };

      fetch(
        "https://strapi-store-server.onrender.com/api/auth/local/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);

          if(resp && resp.jwt) {
            Cookies.set("token", resp.jwt);
            localStorage.setItem("username", resp.user.username);
            localStorage.setItem("email", resp.user.email);
            Navigate("/home",  { replace: true })
          } 
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function validate() {
    let result = true;

    if (user === "" || user === null) {
      result = false;
      alert("Please enter username");
    }
    if (email === "" || email === null) {
      result = false;
      alert("Please enter email");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Please enter password");
    }

    return result;
  }


  return (
    <>
      <div className="register-wrapper">
        <h4 className="register-title">Register</h4>
        <Input
          formName="inputForm"
          labelName="user"
          inputTitle="Username"
          type="text"
          inputClass="input-email"
          labelClass="input-label"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <Input
          formName="inputForm"
          labelName="email"
          inputTitle="Email"
          type="email"
          inputClass="input-email"
          labelClass="input-label"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          formName="inputForm"
          labelName="password"
          inputTitle="Password"
          type="password"
          inputClass="input-email"
          labelClass="input-label"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button
          onClick={handleButtonClick}
          title="REGISTER"
          buttonClass="register-btn"
        />

        <div className="footer-form">
          <span>Already a member?</span>
          <Link to="/signInGuest  ">Login</Link>
        </div>
      </div>
    </>
  );
};
export default CreateAccount;
