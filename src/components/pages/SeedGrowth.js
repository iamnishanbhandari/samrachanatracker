import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavBar from "../navbar/NavBar";

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
        <div class="flex flex-col justify-center align-center my-auto border border-gray-700 h-[100vh]">
          <div class="border border-green-800 h-96 items-center flex justify-center">
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
                      <TableCell align="right">Next Action Pending</TableCell>
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
    </>
  );
};

export default SeedGrowth;
