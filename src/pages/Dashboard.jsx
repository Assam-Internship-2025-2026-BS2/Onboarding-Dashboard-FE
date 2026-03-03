import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import ExecutiveHealthBanner from "../components/dashboard/ExecutiveHealthBanner";
import mockData from "../mock/dashboardData.json";
import GlobalFilters from "../components/dashboard/GlobalFilters";
import "./Dashboard.css";
import KPIStrip from "../components/dashboard/KPIStrip";


const Dashboard = () => {
  const { filters } = useContext(FilterContext);

  // Find matching mock response
const matchedResponse = mockData.responses.find((item) => {
  return (
    item.filters_applied.time_range === filters.time &&
    item.filters_applied.channel === filters.channel &&
    item.filters_applied.region === filters.region &&
    item.filters_applied.segment === filters.segment
  );
});

//  Fallback to default dataset
const fallbackResponse = mockData.responses.find(
  (item) =>
    item.filters_applied.time_range === "This Month" &&
    item.filters_applied.channel === "All Channels" &&
    item.filters_applied.region === "All Regions" &&
    item.filters_applied.segment === "All Segments"
);

const dashboardData = (matchedResponse || fallbackResponse)?.data;
console.log("dashboardData:", dashboardData);
console.log("kpi_cards:", dashboardData?.kpi_cards);

return (
  <>
    <div className="dashboard-top-section">
      <div className="dashboard-header">
        <h1>Digital Onboarding Dashboard</h1>
      </div>

      <GlobalFilters />
    </div>

    <div className="dashboard-content">
      {dashboardData && (
        <>
          <ExecutiveHealthBanner data={dashboardData.overall_health} />
          <KPIStrip data={dashboardData.kpi_cards} />
        </>
      )}
    </div>
  </>
);
};

export default Dashboard;