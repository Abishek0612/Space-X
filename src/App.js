import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Header from "./section/Header";
import Historypage from "./components/HistoryPage/Historypage";
import Launch from "./components/Lauches/Launch";
import Rockets from "./components/Rockets/Rockets";
import Missions from "./components/Missions/Missions";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/history" element={<Historypage />} />
        <Route exact path="/missions" element={<Missions />} />
        <Route exact path="/launch" element={<Launch />} />
        <Route exact path="/rockets" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./history.css";

// function Historypage() {
//   const [data, setData] = useState([]);
//   const [showdetail, setShowdetail] = useState();

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://api.spacexdata.com/v4/launches")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         alert("Error occured while Fetching data!");
//       });
//   }, []);

//   const handleClick = () => {
//     setShowdetail(true);
//   };

//   if (isLoading) {
//     return <h1 style={{ fontSize: "50px" }}>Loading....</h1>;
//   }
//   return (
//     <div className="container">

//       {isLoading ? (
//         <h1>Loading..</h1>
//       ) : (
//         data.map((item) => (
//           <div key={item.id} className="item">
//             <img src={item.links.patch.small} alt={item.name} />
//             <h2>{item.name}</h2>
//             <button onClick={handleClick}>Click</button>
//             {showdetail && <p>{item.details}</p>}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Historypage;
