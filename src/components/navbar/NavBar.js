import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {/* hero section */}
      <div class="bg-gray-800 text-white w-100 h-20">
        <div class="px-20 py-5 font-bold text-2xl"> Samrachana Tracking</div>
      </div>

      <nav class="">
        <div class="bg-white-800 text-black h-20 flex justify-between ">
          <div class="px-20 py-5 text-2xl h-20 border font-semibold">
            {" "}
            Processing Plant
          </div>
          <div class="flex gap-10">
            <Link to={"/Signin"}>
              <Button
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  pt: "23px",
                }}
              >
                Signin
              </Button>
            </Link>
            <Link to={"/Registration"}>
              <Button
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  pt: "23px",
                }}
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
