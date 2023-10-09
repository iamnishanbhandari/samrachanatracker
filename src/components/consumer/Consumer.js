import React from "react";
import NavBar from "../navbar/NavBar";
import SideBar from "../pages/SideBar";

const Consumer = () => {
  return (
    <>
      <NavBar />

      <div class="flex justify-evenly  h-[100vh] ">
        <div class="shadow-lg p-6 mb-6 bg-white rounded-md w-96 justify-center h-96  text-center items-center pt-28 ">
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

        <div class="shadow-lg p-6 mb-6 bg-white rounded-md">
          <div>
            <h1 class="text-xl font-bold m-8 text-center ">Tracking Details</h1>
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
    </>
  );
};

export default Consumer;
