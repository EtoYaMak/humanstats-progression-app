import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Initialize theme from local storage or default to dark
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark"); // Default to dark

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store the theme in local storage
  };

  useEffect(() => {
    document.body.className = theme; // Apply the theme to the body
  }, [theme]); // Apply the new theme

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useTheme };
