import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  let history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const lastPath = localStorage.getItem("pathName") || "/";

  const handleClick = () => {
    history.push(lastPath);
    dispatch({
      type: types.login,
      payload: { name: "Fabian" },
    });
  };

  return (
    <div className="container my-5">
      <h1>LoginScreen</h1>
      <button className="btn btn-primary btn-large" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};
