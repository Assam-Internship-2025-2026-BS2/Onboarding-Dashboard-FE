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
  );
}

export default App;