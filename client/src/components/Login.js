import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const initialState = { username: "Lambda School", password: "i<3Lambd4" };

  const [credentials, setCredentials] = useState(initialState);

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          // onChange={onChange}
          value={credentials.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          // onChange={onChange}
          value={credentials.password}
        />
        <button className="button">Login</button>
      </form>
    </>
  );
};

export default Login;
