import React from "react";
import NavBar from "./components/navbar/NavBar";
import Processing from "./components/pages/Processing";
import SeedGrowth from "./components/pages/SeedGrowth";
import SeedCetificationAuthority from "./components/pages/SeedCetificationAuthority";
import SeedProducingAgency from "./components/pages/SeedProducingAgency";
import Registration from "./components/registration/Registration";
import Signin from "./components/signin/Signin";
import Consumer from "./components/consumer/Consumer";
import Lab from "./components/pages/Lab";
import Distributor from "./components/pages/Distributor";
import Dashboard from "./components/dashboard/Dashboard";
import SideBar from "./components/pages/SideBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div class="bg-gray-10 h-auto">
        <Router>
          <Routes>
            <Route path="/Processing" element={<Processing />} />
            <Route path="/SeedGrowth" element={<SeedGrowth />} />
            <Route
              path="/SeedCetificationAuthority"
              element={<SeedCetificationAuthority />}
            />
            <Route
              path="/SeedProducingAgency"
              element={<SeedProducingAgency />}
            />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/Consumer" element={<Consumer />} />
            <Route path="/Lab" element={<Lab />} />
            <Route path="/Distributor" element={<Distributor />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Signin" element={<Signin />} />

            {/* <Route path="/processing" element={<Processing />} /> */}

            {/* <NavBar /> */}
            {/* <Processing /> */}
            {/* <SeedGrowth /> */}
            {/* <SeedCetificationAuthority /> */}
            {/* <SeedProducingAgency /> */}
            {/* <Registration /> */}
            {/* <Signin /> */}
            {/* <Dashboard /> */}
            {/* <Consumer /> */}
            {/* <SideBar /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
