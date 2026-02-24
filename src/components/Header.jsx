const Header = ({ toggleTheme, theme }) => {
  return (
    <div className="header">
      <h3>Dashboard Overview</h3>

      <button
        onClick={toggleTheme}
        style={{
          padding: "6px 12px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "1px solid var(--border-color)",
          background: "var(--bg-card)",
          color: "var(--text-primary)"
        }}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;