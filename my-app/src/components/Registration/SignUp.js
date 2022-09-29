//import React from "react";
import { useState } from "react";
import "./SignUp.css";
const axios = require("axios").default;

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "http://localhost:8080/api/v1/signup",
      data: {
        email: email,
        password: password,
        name: name,
        phone: phone,
      },
      withCredentials: true,
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        alert(err.response.data.message);
    });
    //console.log(email + " " + name + " " + phone + " " + password);
  };
  console.log(window.location);
  return (
    <div className="login_box">
      <form id="form" onSubmit={submitHandler}>
        <h2 id="heading1">Be a member and share your experience</h2>
        <h3 id="heading2">Registration</h3>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          id="phone"
          type="number"
          name="phone"
          placeholder="Enter Your Phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="button" value="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;