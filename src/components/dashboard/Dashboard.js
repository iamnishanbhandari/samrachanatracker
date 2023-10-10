import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavBar from "../navbar/NavBar";

const Dashboard = () => {
  function createData(name, calories, fat) {
    return { name, calories, fat };
  }

  const rows = [
    createData("1", 159, "Seed Grower"),
    createData("11", 237, "Seed Grower"),
    createData("111", 262, "Seed Grower"),
    createData("1111", 305, "Seed Grower"),
  ];

  return (
    <>
      {/* SideBar */}
      <div className="flex w-full">
        <div className="flex flex-col justify-center bg-gray-50 items-center  py-5  w-full">
          <div className=" lg:h-40  flex justify-center">
            <div className="flex lg:flex-row flex-col justify-start w-full items-start  lg:gap-4 m-5">
              <div className="shadow-custom p-6 mb-6 border border-navy-950 bg-white rounded-md  w-60">
                <div> Total Roles</div>
                <div> 5</div>
              </div>
              <div className="shadow-custom p-6 mb-6 border border-navy-950 bg-white rounded-md  w-60">
                <div> Total Batches</div>
                <div> 15</div>
              </div>
            </div>
          </div>

          <div className="  lg:h-96 flex w-max justify-start  flex-col mt-[-10px] ">
            <div>
              <button className=" outline-none h-14 rounded-md py-4 px-4 mb-5 bg-blue-900 text-white font-semi-bold ">
                {" "}
                Show Transactions
              </button>
            </div>
            <div>
              <TableContainer component={Paper}>
                <Table
                  className="flex lg:min-w-[500px]"
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
                      <TableCell align="center">Next Action Pending</TableCell>
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
