/* import "./App.css";
import Landing from "./components/Landing";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
 */

import { ThemeProvider } from "./contexts/ThemeContext";
import Landing from "./components/Landing";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen max-w-7xl mx-auto px-4">
        <Header />
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
