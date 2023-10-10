import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const Consumer = () => {
  return (
    <>
      <div style={{}}>
        <div className="">
          <div>
            <div className="flex flex-col lg:flex-row w-full lg:h-screen  py-10 p-5 lg:space-x-5 bg-gray-50 ">
              <div className="shadow-lg p-6 mb-6 border  bg-white rounded-md w-full justify-center lg:h-96  text-center items-center lg:pt-28 ">
                <input
                  type="text"
                  className="border border-gray-300 px-2 py-4 m-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
                  placeholder="Enter Tag no "
                ></input>
                <div>
                  <button className="bg-gray-800 text-white mt-8 py-5  rounded-xl w-11/12">
                    GET TRACKING DETAILS
                  </button>
                </div>
              </div>

              <div className="lg:shadow-lg  bg-white  mb-6  lg:border rounded-md  w-full lg:w-11/12 h-full ">
                <div>
                  <h1 className="text-xl font-bold m-8 text-center lg:text-left ">
                    Tracking Details
                  </h1>
                </div>
                <div className="border  p-5">
                  <div className=" shadow-custom  border  p-5 bg-white rounded-md lg:w-96 flex justify-evenly ">
                    <div>
                      <h1 className="text-xl font-bold  mt-12">
                        <CheckIcon
                          className="text-green-500 "
                          sx={{ fontSize: 50 }}
                        />
                      </h1>
                    </div>
                    <div>
                      <div className="shadow-custom  bg-white rounded-md ">
                        <div className="flex flex-col ">
                          <div>
                            <h3 className="font-bold"> SeedProducingAgency</h3>
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

                  <div className="shadow-custom border p-5  bg-white rounded-md lg:w-96 flex justify-evenly mt-2">
                    <div>
                      <h1 className="text-lg font-bold  mt-2">
                        <CheckIcon
                          className="text-green-500 "
                          sx={{ fontSize: 50 }}
                        />
                      </h1>
                    </div>
                    <div>
                      <div className=" w-40 h-20 ">
                        <div className="flex flex-col ">
                          <div>
                            <h3 className="font-bold"> Seed Processor</h3>
                          </div>
                          <div>
                            <p> Quantity Processor:11</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="shadow-custom border p-5  bg-white rounded-md lg:w-96 flex justify-evenly mt-2">
                    <div>
                      <h1 className="text-xl font-bold  mt-2">
                        <CheckIcon
                          className="text-green-500 "
                          sx={{ fontSize: 50 }}
                        />
                      </h1>
                    </div>
                    <div>
                      <div className=" w-40 h-20 ">
                        <div className="flex flex-col ">
                          <div>
                            <h3 className="font-bold"> Seed Processor</h3>
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

                  <div className="shadow-custom border p-5 bg-white rounded-md lg:w-96 flex justify-evenly mt-2  ">
                    <div>
                      <h1 className="text-xl font-bold  mt-2">
                        <CheckIcon
                          className="text-green-500 "
                          sx={{ fontSize: 50 }}
                        />
                      </h1>
                    </div>
                    <div>
                      <div className=" w-40 h-20 ">
                        <div className="flex flex-col ">
                          <div>
                            <h3 className="font-bold"> Lab Details</h3>
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

                  <div className="shadow-custom border p-5 bg-white rounded-md lg:w-96 flex justify-evenly mt-2">
                    <div>
                      <h1 className="text-xl font-bold  mt-2">
                        <CheckIcon
                          className="text-green-500 "
                          sx={{ fontSize: 50 }}
                        />
                      </h1>
                    </div>
                    <div>
                      <div className=" w-40 h-20 ">
                        <div className="flex flex-col ">
                          <div>
                            <h3 className="font-bold">Certificate: 121 </h3>
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
      </div>
    </>
  );
};

export default Consumer;
