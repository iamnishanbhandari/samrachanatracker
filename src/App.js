import React from "react";
import NavBar from "./components/navbar/NavBar";
import Processing from "./components/pages/Processing";
import SeedGrowth from "./components/pages/SeedGrowth";
import SeedCetificationAuthority from "./components/pages/SeedCetificationAuthority";
import SeedProducingAgency from "./components/pages/SeedProducingAgency";
import Registration from "./components/registration/Registration";
import Signin from "./components/signin/Signin";
import Dashboard from "./components/dashboard/Dashboard";
import Consumer from "./components/consumer/Consumer";

const App = () => {
  return (
    <>
      <div class="bg-gray-10 h-auto">
        {/* <NavBar /> */}
        {/* <Processing /> */}
        {/* <SeedGrowth /> */}
        {/* <SeedCetificationAuthority /> */}
        {/* <SeedProducingAgency /> */}
        {/* <Registration /> */}
        {/* <Signin /> */}
        {/* <Dashboard /> */}
        <Consumer />
      </div>
    </>
  );
};

export default App;
