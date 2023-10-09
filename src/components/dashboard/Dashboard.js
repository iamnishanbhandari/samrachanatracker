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

const Dashboard = () => {
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
        <div>
          <NavBar />
          <div style={{ display: "flex", marginLeft: "5px" }}>
            <Box
              sx={{
                // border: "1px solid grey",
                height: "81vh",
                width: "300px",
                marginTop: "0px",
              }}
            >
              <Box>
                <Button
                  sx={{
                    // border: "1px solid gray",
                    // boxShadow:
                    // "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                    boxShadow:
                      "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                    height: "60px",
                    mt: "0px",
                    width: "100%",
                    // color: "black",
                    // fontSize: "15px",
                  }}
                >
                  Seed Producing Agency
                </Button>
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
              </Box>
            </Box>
            <div class="flex flex-col justify-center bg-gray-50  align-center my-auto border  h-[81vh] w-[100vw]">
              <div class=" h-56 items-center flex justify-center">
                <div class="flex  justify-evenly  w-[100%] gap-10">
                  <div class="shadow-custom p-6 mb-6 bg-white rounded-md  w-96">
                    <div> Total Roles</div>
                    <div> 5</div>
                  </div>
                  <div class="shadow-custom p-6 mb-6 bg-white rounded-md  w-96">
                    <div> Total Batches</div>
                    <div> 15</div>
                  </div>
                </div>
              </div>

              <div class="border  h-96 flex my-auto mx-auto flex-col ">
                <div>
                  <button class=" outline-none h-14 rounded-md my-4 mx-4 p-4 bg-blue-900 text-white font-semi-bold ">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
