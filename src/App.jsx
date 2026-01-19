import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Footer from "./Footer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);
  const hamburgerRef = useRef(null);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [showWrapperTrigger, setShowWrapperTrigger] = useState(0);

  // Toggle Sidebar Function
  const toggleSidebar = () => {
    if (!isSidebarOpen) {
      setShowWrapperTrigger((prev) => prev + 1);
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
    setIsSidebarActive(false);
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

  return (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        hamburgerRef={hamburgerRef}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        shouldRenderSidebar={shouldRenderSidebar}
        onClose={handleCloseSidebar}
        hamburgerRef={hamburgerRef}
        isSidebarActive={isSidebarActive}
        showWrapperTrigger={showWrapperTrigger}
      />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
