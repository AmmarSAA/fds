/**********************
* File Name: 404.jsx  *
* Author: Ammar S.A.A *
* Output: 404 Error   *
**********************/

import React from "react";
import { Link } from "react-router-dom";
import { BsExclamationCircle, BsHouse } from "react-icons/bs";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <BsExclamationCircle size={80} color="#dc3545" className="float-end"/>
      <h1 className="mt-4">Oops! Page Not Found</h1>
      <p className="text-center">The page you are looking for does not exist.</p>
      <div className="p-2">
        <Link to="/" type="button" className="btn custom-button d-flex align-items-center gap-2 btn btn-danger">
          <BsHouse className="text-light navbar-icon text-white" />
          <span className="d-none d-lg-inline text-white"> Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
