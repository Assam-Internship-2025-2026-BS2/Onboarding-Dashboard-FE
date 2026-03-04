import InsightCard from "./InsightsCard";

function InsightsSection({ insights = [], criticalCount = 0 }) {
  return (
    <div className="insights-container">

      <div className="insights-header">
        <h2>Today's Key Insights</h2>

        {criticalCount > 0 && (
          <span className="critical-badge">
            {criticalCount} Critical
          </span>
        )}
      </div>

      <div className="insight-list">
        {insights.map((item) => (
          <InsightCard
            key={item.id}
            product={item.product}
            metric={item.metric}
            impact={item.impact}
            description={item.description}
            extraInfo={item.extraInfo}
            severity={item.severity}
            ctaLabel={item.ctaLabel}
            onClick={item.onClick}
          />
        ))}
      </div>

    </div>
  );
}

export default InsightsSection;