import { useState } from "react";
import Sample from "./component/Sample"; 

function App() {
  const myname = "kamal";
  const myage = "19";
  const myfriend = "dk sham abi";

  return (
    <>
      <Sample myname={myname} myage={myage} myfriend={myfriend}/>

    </>
  );
}

export default App;