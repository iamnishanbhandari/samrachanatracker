import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const SeedGrowth = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("1", 159, "Seed Grower"),
    createData("11", 237, "Seed Grower"),
    createData("111", 262, "Seed Grower"),
    createData("1111", 305, "Seed Grower"),
  ];

  return (
    <>
      <div>
        <div className="">
          <Box>
            <div className="flex flex-col justify-center align-center  bg-gray-50">
              <div className="flex flex-col justify-center w-3/4 mx-auto items-start mt-10">
                <div className="border bg-white border-gray-300 flex flex-col justify-center shadow-lg w-full mx-auto p-5 rounded-xl">
                  <div>
                    <input
                      type="text"
                      className="border border-gray-300 px-2 py-4  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                      placeholder="Enter Tag no "
                    ></input>
                  </div>

                  <div>
                    <input
                      type="date"
                      className="border border-gray-300 px-2 py-4 mt-2  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                      placeholder="Enter Issuing Date"
                    ></input>
                  </div>

                  <div>
                    <button className="bg-gray-400 text-white mt-20 py-5 px-2 rounded-xl w-full">
                      Cultivate
                    </button>
                  </div>
                </div>

                <div>
                  <button className=" outline-none mt-10 rounded-md flex w-full px-10 py-4 bg-blue-900 text-white font-semi-bold ">
                    {" "}
                    Show Transcactions
                  </button>
                </div>
              </div>
              <div className="w-11/12 mx-auto my-10 border  ">
                <TableContainer component={Paper}>
                  <Table
                    className="flex lg:min-w-[500px] bg-white"
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={3}>
                          Seed Batches in Progress
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>Tag No</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">
                          Next Action Pending
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, i) => (
                        <TableRow
                          key={i}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">{row.calories}</TableCell>
                          <TableCell align="center" className="text-blue">
                            <h1 className="bg-red-500 mx-auto w-max py-3 px-5 rounded-xl text-center text-white">
                              {" "}
                              {row.fat}
                            </h1>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SeedGrowth;
