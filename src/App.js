import React from "react";
import NavBar from "./components/navbar/NavBar";
import Processing from "./components/pages/Processing";
import SeedGrowth from "./components/pages/SeedGrowth";
import SeedCetificationAuthority from "./components/pages/SeedCetificationAuthority";
import SeedProducingAgency from "./components/pages/SeedProducingAgency";

const App = () => {
  return (
    <>
      <div class="bg-gray-10 h-auto">
        {/* <NavBar /> */}
        {/* <Processing /> */}
        {/* <SeedGrowth /> */}
        {/* <SeedCetificationAuthority /> */}
        <SeedProducingAgency />
      </div>
    </>
  );
};

export default App;
