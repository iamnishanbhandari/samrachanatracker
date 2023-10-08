import React from "react";
import NavBar from "./components/navbar/NavBar";
import Processing from "./components/pages/Processing";
import SeedGrowth from "./components/pages/SeedGrowth";

const App = () => {
  return (
    <>
      <div class="bg-gray-10 h-auto">
        {/* <NavBar /> */}
        {/* <Processing /> */}
        <SeedGrowth />
      </div>
    </>
  );
};

export default App;
