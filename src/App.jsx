<<<<<<< HEAD
import StageDropMatrix from "./StageDropMatrix";
import JourneyDetails from "./JourneyDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StageDropMatrix />} />
      <Route path="/journeys" element={<JourneyDetails />} />
    </Routes>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import CustomerInsights from "./pages/CustomerInsights";
import Analysis from "./pages/Analysis";
import { FilterProvider } from "./context/FilterContext";

import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customer-insights" element={<CustomerInsights />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
        </main>
      </BrowserRouter>
      </FilterProvider>
    </ThemeProvider>
>>>>>>> origin/saurab-fe
  );
}

export default App;