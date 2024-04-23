import { useTheme } from "../contexts/ThemeContext"; // Update with your context path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Font Awesome example

function Header() {
  const { theme, toggleTheme } = useTheme(); // Include the theme in the context
  return (
    <div className="flex justify-between items-center py-4 px-4">
      <a
        href="#"
        className="text-xl font-Poppin uppercase antialiased font-semibold"
      >
        Progression.app
      </a>
      <span className="space-x-2 flex justify-center items-center">
        <a
          href="#"
          className="hidden text-base font-medium font-Poppin uppercase antialiased"
        >
          Login
        </a>

        <label className="relative inline-block w-10 h-6">
          {/* Custom label for the toggle checkbox */}
          <input
            type="checkbox"
            className="sr-only"
            onChange={toggleTheme} // Toggle theme on change
            checked={theme === "dark"} // Check if the theme is dark (default)
          />
          <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-500 dark:bg-gray-600">
            {/* Background of the toggle */}
            <span
              className={`absolute w-6 h-6 bg-gray-700 dark:bg-indigo-950 rounded-full transition-transform ${
                theme === "dark" ? "translate-x-4" : "translate-x-0"
              }`}
            >
              <span className="flex justify-center items-center h-full">
                {theme === "dark" ? (
                  <FontAwesomeIcon
                    icon={faMoon}
                    size="xs"
                    className="dark:text-white text-black"
                  /> // Moon for dark mode
                ) : (
                  <FontAwesomeIcon
                    icon={faSun}
                    size="xs"
                    className="text-yellow-500"
                  /> // Sun for light mode
                )}
              </span>
            </span>
          </span>
        </label>
      </span>
    </div>
  );
}

export default Header;
