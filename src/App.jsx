import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Footer from "./Footer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);
  const hamburgerRef = useRef(null);

  // ************************************************************************
  // ************************************************************************
  // ************************************************************************
  // ************************************************************************

  // Toggle Sidebar Function*
  const toggleSidebar = () => {
    if (!isSidebarOpen) {
      setShouldRenderSidebar(true);
      setTimeout(() => {
        setIsSidebarOpen(true);
      }, 10);
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

  // ************************************************************************
  // ************************************************************************
  // ************************************************************************
  // ************************************************************************

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
      />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
