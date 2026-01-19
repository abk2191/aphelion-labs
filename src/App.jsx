import { useState, useRef } from "react";
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
