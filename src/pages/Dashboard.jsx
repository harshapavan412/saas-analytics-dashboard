import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import Charts from "../components/Charts";
import ActivityTable from "../components/ActivityTable";

const Dashboard = ({ toggleTheme, theme }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) {
    return (
      <div className="main" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div>
      <Sidebar />
      <div className="main">
       <Header toggleTheme={toggleTheme} theme={theme} />
        <div className="content">

          <div className="metrics">
            <MetricCard title="Total Users" value="24,530" change="+12% this month" />
            <MetricCard title="Active Users" value="8,120" change="+5% this week" />
            <MetricCard title="Revenue" value="$72,300" change="+18% this month" />
            <MetricCard title="Conversion Rate" value="4.2%" change="+1.2% increase" />
          </div>

          <h2 style={{ margin: "20px 0" }}>Analytics Overview</h2>
          <Charts />

          <ActivityTable />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;