import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavBar from "../navbar/NavBar";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const SeedGrowth = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("1", 159, 6.0, 24, 4.0),
    createData("11", 237, 9.0, 37, 4.3),
    createData("111", 262, 16.0, 24, 6.0),
    createData("1111", 305, 3.7, 67, 4.3),
    createData("1111", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <div>
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
              display: "flex",
              justifyContent: "space-between",
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
                    Dashboard{" "}
                  </Button>
                </Link>

                <Link to={"/SeedProducingAgency"}>
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
                    Seed Producing Agency{" "}
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
          </Box>
          <Box>
            <div class="flex flex-col justify-center align-center my-auto  h-[100vh]">
              <div class="border border-navy-800 h-96 w-96 mx-auto items-center flex justify-center">
                <div>
                  <div>
                    <input
                      type="number"
                      class="border border-gray-300 px-2 py-4  m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                      placeholder="Enter Tag no"
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
                    <button class="bg-gray-800 text-white m-2 py-2 px-2 rounded-xl w-80">
                      Cultivate
                    </button>
                  </div>
                </div>
              </div>

              <div class="border  h-96 flex my-auto mx-auto flex-col ">
                <div>
                  <button class=" outline-none h-14 rounded-md my-4 mx-4 bg-blue-900 text-white font-semi-bold ">
                    {" "}
                    Show Transcactions
                  </button>
                </div>
                <div>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Tag No</TableCell>
                          <TableCell align="right">Date</TableCell>
                          <TableCell align="right">
                            Next Action Pending
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SeedGrowth;
