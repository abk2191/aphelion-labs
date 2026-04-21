import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Andromeda from "./Andromeda";
import ProximaCalculator from "./ProximaCalculator";
import KnowTheDeveloper from "./KnowTheDeveloper";
import ScratchPad from "./ScratchPad";

function App() {
  //****************************************************************************/
  //****************************************************************************/
  //***************************** LIFTED STATES  *******************************/
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); //*****************/
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Return saved theme or default to "light"
    return savedTheme || "light";
  }); //*****/
  //***************************** LIFTED STATES  *******************************/
  const hamburgerRef = useRef(null); //*****************************************/
  //****************************************************************************/
  //****************************************************************************/

  function handleThemeToggle() {
    setCurrentTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      // Save to localStorage whenever theme changes
      localStorage.setItem("theme", newTheme);
      // Update the data-theme attribute on the document element
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  }

  // Initialize theme on component mount
  useEffect(() => {
    // Set the initial theme on the document element
    document.documentElement.setAttribute("data-theme", currentTheme);

    // Remove the old body style changes since CSS variables handle this now
    const cleanup = () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };

    return cleanup;
  }, []);

  // Toggle Sidebar Function
  const toggleSidebar = () => {
    if (!isSidebarOpen) {
      setShouldRenderSidebar(true);
      setTimeout(() => {
        setIsSidebarOpen(true);
      }, 10); // Initial delay to ensure DOM is ready
    } else {
      setIsSidebarOpen(false);
      setTimeout(() => {
        setShouldRenderSidebar(false);
      }, 300);
    }
  };

  //Close Sidebar Function
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setTimeout(() => {
      setShouldRenderSidebar(false);
    }, 300);
  };

  //Lock body scroll ONLY on mobile + only when sidebar is open
  useEffect(() => {
    if (isSidebarOpen && window.innerWidth <= 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  //****************************************************************************/
  //****************************************************************************/
  //****************************************************************************/

  return (
    <Router basename="/aphelion-labs">
      <div className="app-container">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          hamburgerRef={hamburgerRef}
          handleThemeToggle={handleThemeToggle}
          currentTheme={currentTheme}
        />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          shouldRenderSidebar={shouldRenderSidebar}
          onClose={handleCloseSidebar}
          hamburgerRef={hamburgerRef}
          currentTheme={currentTheme}
        />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/andromeda"
            element={<Andromeda currentTheme={currentTheme} />}
          />
          <Route
            path="/proximacalculator"
            element={<ProximaCalculator currentTheme={currentTheme} />}
          />
          <Route
            path="/scratchpad"
            element={<ScratchPad currentTheme={currentTheme} />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
