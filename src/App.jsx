import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Switching to:", newTheme);
    setTheme(newTheme);
  };

  return (
    <Dashboard toggleTheme={toggleTheme} theme={theme} />
  );
}

export default App;;