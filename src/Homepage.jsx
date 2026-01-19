function Homepage() {
  return (
    <>
      <div className="banner">
        <img
          src="./banner.jpg"
          alt=""
          // style={{ height: "200px", width: "200px" }}
        />
      </div>
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
    </>
  );
}

export default Homepage;
