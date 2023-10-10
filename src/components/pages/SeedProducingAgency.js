import React from "react";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const SeedProducingAgency = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          marginLeft: "5px",
          gap: "400px",
        }}
      >
        <Box
          sx={{
            // border: "1px solid grey",
            height: "81vh",
            width: "300px",
            marginTop: "0px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            p: "10px",
          }}
        >
          <Box>
            <Link to={"/"}>
              <Button
                sx={{
                  boxShadow:
                    "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  height: "60px",
                  mt: "0px",
                  width: "100%",
                }}
              >
                Dashboard
              </Button>
            </Link>

            <Link to={"/SeedGrowth"}>
              <Button
                sx={{
                  // border: "1px solid gray",
                  boxShadow:
                    "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  // boxShadow:
                  //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                  height: "60px",
                  width: "100%",
                  mt: "15px",
                }}
              >
                Seed Growth
              </Button>{" "}
            </Link>

            <Link to={"/SeedCetificationAuthority"}>
              <Button
                sx={{
                  // border: "1px solid gray",
                  boxShadow:
                    "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  // boxShadow:
                  //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                  height: "60px",
                  width: "100%",
                  mt: "15px",
                }}
              >
                Seed Cetification Authority
              </Button>{" "}
            </Link>

            <Link to={"/Lab"}>
              <Button
                sx={{
                  // border: "1px solid gray",
                  // boxShadow:
                  //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                  boxShadow:
                    "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  height: "60px",
                  width: "100%",
                  mt: "15px",
                }}
              >
                Lab
              </Button>{" "}
            </Link>

            <Link to={"/Processing"}>
              <Button
                sx={{
                  // border: "1px solid gray",
                  // boxShadow:
                  //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                  boxShadow:
                    "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  height: "60px",
                  width: "100%",
                  mt: "15px",
                }}
              >
                Processing
              </Button>{" "}
            </Link>

            <Link to={"/Distributor"}>
              <Button
                sx={{
                  // border: "1px solid gray",
                  boxShadow:
                    "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  // boxShadow:
                  //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                  height: "60px",
                  width: "100%",
                  mt: "15px",
                }}
              >
                Distributor
              </Button>{" "}
            </Link>
            <Link to={"/Consumer"}>
              <Button
                sx={{
                  // border: "1px solid gray",
                  boxShadow:
                    "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  // boxShadow:
                  //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                  height: "60px",
                  width: "100%",
                  mt: "15px",
                }}
              >
                Consumer
              </Button>{" "}
            </Link>
          </Box>
        </Box>

        <div class="flex justify-center mt-2 bg-#F7EEF3">
          <div class="border border-gray-300  flex flex-col justify-center w-96  rounded-xl">
            <div>
              <input
                type="text"
                class="border border-gray-300 px-2 py-4 m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                placeholder="Enter Tag no "
              ></input>
            </div>

            <div>
              <input
                type="number"
                class="border border-gray-300 px-2 py-4  m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                placeholder="Enter Certification info"
              ></input>
            </div>

            <div>
              <input
                type="date"
                class="border border-gray-300 px-2 py-4 m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                placeholder="Enter Issuing Date"
              ></input>
            </div>

            <div>
              <input
                type="number"
                class="border border-gray-300 px-2 py-4  m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                placeholder="Enter Variety"
              ></input>
            </div>

            <div>
              <input
                type="number"
                class="border border-gray-300 px-2 py-4  m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                placeholder="Enter Owner"
              ></input>
            </div>

            <div>
              <input
                type="number"
                class="border border-gray-300 px-2 py-4  m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                placeholder="Enter Plot No"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeedProducingAgency;
