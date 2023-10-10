import React from "react";
import NavBar from "../navbar/NavBar";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 w-full h-screen absolute top-0">
      <button className="bg-gray-800 text-white  py-8 px-8 lg:px-16 text-lg rounded-xl w-max">
        Click here to connect metamask
      </button>
    </div>
  );
};

export default Signin;
