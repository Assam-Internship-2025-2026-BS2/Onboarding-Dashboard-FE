import { useLocation } from "react-router-dom";

export default function JourneyDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Journey Drill Down</h2>
      <p>Stage: {params.get("stage")}</p>
      <p>Product: {params.get("product")}</p>
    </div>
  );
}