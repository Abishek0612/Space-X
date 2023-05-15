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
