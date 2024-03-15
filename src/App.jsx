import { useState } from "react";
import AddTrans from "./components/AddTrans";
import Trans from "./components/Trans";

function App() {
  return (
    <>
      <div
        className="w-full h-screen flex  justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="">
          <AddTrans />
          <Trans />
        </div>
      </div>
    </>
  );
}

export default App;
