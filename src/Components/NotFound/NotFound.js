import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-dark p-5">
      <img
        className="mb-4 img-fluid"
        src="https://i.ibb.co/RzxM6Cz/banner-error-404.jpg"
        alt=""
      />
      <br />
      <Link to="/home">Goto home page ?</Link>
    </div>
  );
};

export default NotFound;
