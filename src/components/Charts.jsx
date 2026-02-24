import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import { userGrowthData, revenueData } from "../data/mockData";

const Charts = () => {
  return (
    <div className="chart-wrapper">
      <div className="chart-box">
        <h3>User Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={userGrowthData}>
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h3>Revenue</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={revenueData}>
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Bar dataKey="revenue" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;