import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Andromeda from "./Andromeda";
import ProximaCalculator from "./ProximaCalculator";
import KnowTheDeveloper from "./KnowTheDeveloper";

function App() {
  //****************************************************************************/
  //****************************************************************************/
  //***************************** LIFTED STATES  *******************************/
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); //*****************/
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false); //*****/
  //***************************** LIFTED STATES  *******************************/
  const hamburgerRef = useRef(null); //*****************************************/
  //****************************************************************************/
  //****************************************************************************/

  function handleThemeToggle() {
    setIsDarkTheme((prev) => !prev);
  }

  useEffect(() => {
    if (isDarkTheme) {
      document.body.style.backgroundColor = "#121212"; // Dark background
      document.body.style.color = "#ffffff"; // Light text
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "inherit";
    }

    // Cleanup function
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDarkTheme]);

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
          isDarkTheme={isDarkTheme}
        />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          shouldRenderSidebar={shouldRenderSidebar}
          onClose={handleCloseSidebar}
          hamburgerRef={hamburgerRef}
          isDarkTheme={isDarkTheme}
        />

        <Routes>
          <Route path="/" element={<Homepage isDarkTheme={isDarkTheme} />} />
          <Route
            path="/andromeda"
            element={<Andromeda isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/proximacalculator"
            element={<ProximaCalculator isDarkTheme={isDarkTheme} />}
          />
        </Routes>

        <Footer isDarkTheme={isDarkTheme} />
      </div>
    </Router>
  );
}

export default App;
