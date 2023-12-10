import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function LoginComponent() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Bharath", age: 26, email: "redux@gmail.com" }));
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default LoginComponent;
