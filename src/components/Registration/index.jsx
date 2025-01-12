import React, { useState } from "react";
import "./style.css";
import avatar from "./avatar.jpg";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    console.log(user);
    setUser({
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
  };

  const handleBlur = (event) => {
    if (user.username === "" && /\S+@\S+\.\S+/.test(event.target.value)) {
      setUser({
        ...user,
        email: event.target.value,
        username: event.target.value.split("@")[0],
      });
    }
  };

  return (
    <div className="registration">
      <h2>Registration</h2>
      <form onSubmit={handleClick}>
        <img src={avatar} />
        <input
          onBlur={handleBlur}
          name="email"
          id="email"
          type="email"
          placeholder="Email Address"
          defaultValue={user.email}
          required
        />
        <input
          onChange={(event) => {
            setUser({ ...user, username: event.target.value });
          }}
          type="text"
          placeholder="User Name"
          value={user.username}
          required
        />
        <input
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
          type="password"
          placeholder="Password"
          value={user.password}
          required
        />
        <input
          onChange={(event) => {
            setUser({ ...user, passwordConfirm: event.target.value });
          }}
          type="password"
          placeholder="Confirm Password"
          value={user.passwordConfirm}
          required
        />
        <p
          style={{
            display:
              user.passwordConfirm === "" ||
              user.password === user.passwordConfirm
                ? "none"
                : "",
          }}
        >
          The entered passwords do not match.
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
