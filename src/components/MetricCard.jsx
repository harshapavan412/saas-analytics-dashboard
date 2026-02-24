const MetricCard = ({ title, value, change }) => {
  return (
    <div className="metric-card">
      <p className="metric-title">{title}</p>
      <h2 className="metric-value">{value}</h2>
      <span className="metric-change">{change}</span>
    </div>
  );
};

export default MetricCard;