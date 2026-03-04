import StageDropMatrix from "./StageDropMatrix";
import JourneyDetails from "./JourneyDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StageDropMatrix />} />
      <Route path="/journeys" element={<JourneyDetails />} />
    </Routes>
  );
}

export default App;