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
          <div className="brand-name-sidebar">
            <h3>
              <i class="fa-solid fa-flask"></i> Aphelion Labs.
            </h3>
          </div>
          <div className="sliding-div-container item-style"></div>
        </div>
      )}
      {/* Navbar and Sidebar Logic Ends */}

      <div className="page-card-div">
        <div className="page-card">
          <h2>👋 Welcome to Aphelion Labs.</h2>
          <p>
            Aphelion Labs is a forward-thinking design and development studio
            dedicated to crafting seamless digital experiences through intuitive
            user interfaces.
          </p>

          <p>
            We specialize in building functional, aesthetic applications that
            prioritize clarity and user engagement across various platforms.
            Every product we build reflects our commitment to clean design and
            practical innovation.
          </p>

          <p>
            At Aphelion Labs, we are constantly pushing the boundaries of
            interface design to ensure complex tasks become simple and
            meaningful for our users.
          </p>
        </div>
      </div>

      <div className="page-card-div">
        <div className="page-card">
          <h2>⚙️ Technologies</h2>
          <p>
            We work with a focused set of modern web technologies chosen for
            their reliability and clarity and performance.
          </p>
          <div className="tech-stack-div">
            <div className="tech-stack">
              <div style={{ color: "cyan" }}>
                <i class="fa-brands fa-react"></i>
                <p>React.js</p>
              </div>
              <div style={{ color: "gold" }}>
                <i class="fa-brands fa-js"></i>
                <p>Javascript</p>
              </div>
              <div style={{ color: "orange" }}>
                <i class="fa-brands fa-html5"></i>
                <p>HTML 5</p>
              </div>
            </div>

            <div className="tech-stack">
              <div style={{ color: "red" }}>
                <i class="fa-brands fa-git-alt"></i>
                <p style={{ textAlign: "center" }}>Git</p>
              </div>
              <div style={{ color: "navy" }}>
                <i class="fa-solid fa-globe"></i>
                <p>Full Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-card-div">
        <div className="page-card">
          <h2> 💭 Our vision</h2>
          <p>
            "We exist at the heart of the user experience. What began as a
            passion for beautiful UI has evolved into a mission to serve.
            <br />
            <br />
            Driven by a lifelong devotion to the art of the interface, we have
            found our purpose in the intersection of beauty and utility. We are
            dedicated to creating intuitive, high-impact interfaces that empower
            millions of people globally.
            <br />
            <br />
            For us, great design isn't a luxury—it's our contribution to the
            world one seamless interaction at a time." - Aphelion Labs.
          </p>
        </div>
      </div>

      <div className="footer">
        <p>&copy; Copyright All Rights Reserved 2025.</p>
      </div>
    </>
  );
}

export default App;
