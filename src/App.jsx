import { useState, useEffect, useRef } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isSidebarOpen) return;

      const sidebarEl = sidebarRef.current;
      const hamburgerEl = hamburgerRef.current;

      if (
        sidebarEl &&
        !sidebarEl.contains(event.target) &&
        hamburgerEl &&
        !hamburgerEl.contains(event.target)
      ) {
        // Trigger close animation
        sidebarEl.classList.remove("sidebar-open");
        sidebarEl.classList.add("sidebar-close");

        setIsSidebarOpen(false);

        setTimeout(() => {
          setShouldRenderSidebar(false);
        }, 300);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Toggle function
  const toggleSidebar = () => {
    if (!isSidebarOpen) {
      // Opening: render sidebar first
      setShouldRenderSidebar(true);
    } else {
      // Closing: trigger close animation
      if (sidebarRef.current) {
        sidebarRef.current.classList.remove("sidebar-open");
        sidebarRef.current.classList.add("sidebar-close");
      }
      // Unmount after animation
      setTimeout(() => {
        setShouldRenderSidebar(false);
      }, 300); // Must match CSS animation duration
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Add open class after sidebar mounts
  useEffect(() => {
    if (shouldRenderSidebar && isSidebarOpen && sidebarRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (sidebarRef.current) {
          sidebarRef.current.classList.add("sidebar-open");
          sidebarRef.current.classList.remove("sidebar-close");
        }
      }, 10);
    }
  }, [shouldRenderSidebar, isSidebarOpen]);

  return (
    <>
      <div>
        {/* Navbar and Sidebar Logic Starts */}
        <div className="navbar">
          <button
            ref={hamburgerRef}
            className={`hamburger ${isSidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="brand-name">
            <h3>
              <i class="fa-solid fa-flask"></i> Aphelion Labs.
            </h3>
          </div>
        </div>

        {/* Conditionally render sidebar */}
        {shouldRenderSidebar && (
          <div ref={sidebarRef} className="sidebar">
            <div className="sliding-div-container item-style"></div>
          </div>
        )}
        {/* Navbar and Sidebar Logic Ends */}
      </div>
      <div className="intro-card-div">
        <div className="intro-card">
          <h2>Welcome to Aphelion Labs</h2>
          <p>
            Aphelion Labs is a forward-thinking design and development studio
            dedicated to crafting seamless digital experiences through intuitive
            user interfaces. We specialize in building functional, aesthetic
            applications that prioritize clarity and user engagement across
            various platforms. Every product we build reflects our commitment to
            clean design and practical innovation, ensuring that complex tasks
            become simple for our users. At Aphelion Labs, we are constantly
            pushing the boundaries of interface design to define the next
            generation of digital utility.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
