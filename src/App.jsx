import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Footer from "./Footer";

function App() {
  //****************************************************************************/
  //***************************** LIFTED STATES  *******************************/
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);
  //****************************************************************************/
  //***************************** LIFTED STATES  *******************************/

  const hamburgerRef = useRef(null);

  //****************************************************************************/
  //****************************************************************************/
  //****************************************************************************/

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

  //****************************************************************************/
  //****************************************************************************/
  //****************************************************************************/

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
