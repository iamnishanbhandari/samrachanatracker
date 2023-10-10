import React from "react";
import NavBar from "../navbar/NavBar";
import SideBar from "../pages/SideBar";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Consumer = () => {
  return (
    <>
      <NavBar />
      <div style={{}}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              marginLeft: "5px",
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

                <Link to={"/SeedProducingAgency"}>
                  <Button
                    sx={{
                      boxShadow:
                        "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                      height: "60px",
                      mt: "0px",
                      width: "100%",
                    }}
                  >
                    Seed Producing Agency
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
              </Box>
            </Box>
          </div>

          <div>
            <div class="flex justify-evenly  h-[80vh] gap-60 ">
              <div class="shadow-lg p-6 mb-6 border ml-40 mt-5 bg-white rounded-md w-96 justify-center h-96  text-center items-center pt-28 ">
                <div>
                  <input
                    type="text"
                    class="border border-gray-300 px-2 py-4 m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                    placeholder="Enter Tag no "
                  ></input>
                  <div>
                    <button class="bg-gray-800 text-white m-2 py-2 px-2 rounded-xl w-80">
                      GET TRACKING DETAILS
                    </button>
                  </div>
                </div>
              </div>

              <div class="shadow-lg p-6 mb-6 bg-white rounded-md mt-0 ">
                <div>
                  <h1 class="text-xl font-bold m-8 text-center ">
                    Tracking Details
                  </h1>
                </div>

                <div class=" shadow-custom  bg-white rounded-md w-96 flex justify-evenly ">
                  <div>
                    <h1 class="text-xl font-bold  mt-12">
                      <img
                        src="https://image.similarpng.com/very-thumbnail/2021/06/Checkmark-green-tick-isolated-on-transparent-background-PNG.png"
                        alt="tick"
                        style={{ height: "80px", borderRadius: "80px" }}
                      ></img>
                    </h1>
                  </div>
                  <div>
                    <div class="shadow-custom  bg-white rounded-md ">
                      <div class="flex flex-col ">
                        <div>
                          <h3 class="font-bold"> SeedProducingAgency</h3>
                        </div>
                        <div>
                          <p>Crop:Jowar</p>
                        </div>
                        <div>
                          <p>Cropvariety:normal</p>
                        </div>
                        <div>
                          <p>SourceQuantity:90</p>
                        </div>

                        <div>
                          <p>Date:2017-05-26</p>
                        </div>
                        <div>
                          <p>Owner:siddhu</p>
                        </div>
                        <div>
                          <p>Plot no:12</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="shadow-custom  bg-white rounded-md w-96 flex justify-evenly mt-2">
                  <div>
                    <h1 class="text-lg font-bold  mt-2">
                      <img
                        src="https://image.similarpng.com/very-thumbnail/2021/06/Checkmark-green-tick-isolated-on-transparent-background-PNG.png"
                        alt="tick"
                        style={{ height: "80px", borderRadius: "80px" }}
                      ></img>
                    </h1>
                  </div>
                  <div>
                    <div class=" w-40 h-20 ">
                      <div class="flex flex-col ">
                        <div>
                          <h3 class="font-bold"> Seed Processor</h3>
                        </div>
                        <div>
                          <p> Quantity Processor:11</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="shadow-custom   bg-white rounded-md w-96 flex justify-evenly mt-5">
                  <div>
                    <h1 class="text-xl font-bold  mt-2">
                      <img
                        src="https://image.similarpng.com/very-thumbnail/2021/06/Checkmark-green-tick-isolated-on-transparent-background-PNG.png"
                        alt="tick"
                        style={{ height: "80px", borderRadius: "80px" }}
                      ></img>
                    </h1>
                  </div>
                  <div>
                    <div class=" w-40 h-20 ">
                      <div class="flex flex-col ">
                        <div>
                          <h3 class="font-bold"> Seed Processor</h3>
                        </div>
                        <div>
                          <p>Quantity Processed:11</p>
                        </div>
                        <div>
                          <p>Date: 2017-05-26</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="shadow-custom  bg-white rounded-md w-96 flex justify-evenly  ">
                  <div>
                    <h1 class="text-xl font-bold  mt-2">
                      <img
                        src="https://image.similarpng.com/very-thumbnail/2021/06/Checkmark-green-tick-isolated-on-transparent-background-PNG.png"
                        alt="tick"
                        style={{ height: "80px", borderRadius: "80px" }}
                      ></img>
                    </h1>
                  </div>
                  <div>
                    <div class=" w-40 h-20 ">
                      <div class="flex flex-col ">
                        <div>
                          <h3 class="font-bold"> Lab Details</h3>
                        </div>
                        <div>
                          <p>Test date:2017/05/26</p>
                        </div>
                        <div>
                          <p>Result:pass</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="shadow-custom  bg-white rounded-md w-96 flex justify-evenly mt-5">
                  <div>
                    <h1 class="text-xl font-bold  mt-2">
                      <img
                        src="https://image.similarpng.com/very-thumbnail/2021/06/Checkmark-green-tick-isolated-on-transparent-background-PNG.png"
                        alt="tick"
                        style={{ height: "80px", borderRadius: "80px" }}
                      ></img>
                    </h1>
                  </div>
                  <div>
                    <div class=" w-40 h-20 ">
                      <div class="flex flex-col ">
                        <div>
                          <h3 class="font-bold">Certificate: 121 </h3>
                        </div>
                        <div>
                          <p>Date of test : 2023/26</p>
                        </div>
                        <div>
                          <p>Validity in years:4</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consumer;
