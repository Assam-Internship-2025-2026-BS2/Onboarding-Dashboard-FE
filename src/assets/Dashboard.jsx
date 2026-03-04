import { useEffect, useState } from "react";
import { fetchInsights } from "./InsightsService";
import InsightsSection from "./InsightsSection";

function Dashboard() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    const loadInsights = async () => {
      const data = await fetchInsights();

      const mapped = data.map((item) => ({
        ...item,
        onClick: () => {
          if (item.redirectUrl) {
            window.location.href = item.redirectUrl;
          }
        }
      }));

      setInsights(mapped);
    };

    loadInsights();
  }, []);

  const criticalCount = insights.filter(
    (i) => i.severity === "critical"
  ).length;

  return (
    <div className="dashboard-layout">
      <div className="dashboard-left">
        <InsightsSection
          insights={insights}
          criticalCount={criticalCount}
        />
      </div>

      <div className="dashboard-right">
        {/* Other dashboard widgets */}
      </div>
    </div>
  );
}

export default Dashboard;