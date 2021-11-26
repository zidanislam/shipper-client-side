import React from "react";
import useFirebase from "../Hooks/useFirebase";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";

const Login = () => {
  const { user, singInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/";

  //handel google login
  const handelGooglelogin = () => {
    singInWithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <div>
      <button onClick={handelGooglelogin} className="btn btn-dark mb-4">
        sign in with google
      </button>
    </div>
  );
};

export default Login;
