const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">InsightBoard</h2>
      <nav>
        <p className="sidebar-link">Dashboard</p>
        <p className="sidebar-link">Analytics</p>
        <p className="sidebar-link">Users</p>
        <p className="sidebar-link">Settings</p>
      </nav>
    </div>
  );
};

export default Sidebar;