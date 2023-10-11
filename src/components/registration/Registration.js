import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Registration = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className=" flex flex-col justify-center mx-auto lg:w-1/2 border p-5 bg-white rounded-xl">
        <div className="">
          <h1 className="font-bold text-2xl text-left w-full mb-4">Add User</h1>
        </div>
        <div>
          <input
            type="text"
            className="border border-gray-300 px-2 py-4 my-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
            placeholder="Enter Tag no "
          ></input>
        </div>

        <div>
          <input
            type="text"
            className="border border-gray-300 px-2 py-4 my-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
            placeholder="Enter Name of User "
          ></input>
        </div>

        <div className="flex flex-col space-y-4 my-2">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              {" "}
              <h2>Select User Type</h2>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Seed Producing Agency"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Seed Producing Agency"
                control={<Radio />}
                label="Seed Producing Agency"
              />
              <FormControlLabel
                value="Seed Grower"
                control={<Radio />}
                label="Seed Grower"
              />
              <FormControlLabel
                value="Seed Processor"
                control={<Radio />}
                label="Seed Processor"
              />
              <FormControlLabel value="Lab" control={<Radio />} label="Lab" />
              <FormControlLabel
                value="Seed Certification Authority"
                control={<Radio />}
                label="Seed Certification Authority"
              />
              <FormControlLabel
                value="Distributor"
                control={<Radio />}
                label="Distributor"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div>
          <button className="bg-gray-300 text-white w-full my-6 py-4 px-8 rounded-xl">
            Create User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
