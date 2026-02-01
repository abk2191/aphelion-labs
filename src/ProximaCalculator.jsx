function ProximaCalculator({ isDarkTheme }) {
  const handleClick = () => {
    window.open(
      "https://abk2191.github.io/react-calculator/",
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <>
      <div>
        <div
          className={`andromeda-banner ${isDarkTheme ? "andromeda-banner-dark" : ""}`}
        >
          <h1>Proxima Calculator.</h1>
        </div>

        <div className="page-card-div">
          <div className={`page-card ${isDarkTheme ? "page-card-dark" : ""}`}>
            <p>
              Meet the Proxima Calculator, a sleek and intuitive tool designed
              to make your daily calculations effortless. Its modern dark mode
              interface provides a high-contrast, eye-straining-free experience
              that is perfect for any lighting. You never have to worry about
              losing your place, as the built-in history feature allows you to
              review and track your previous results instantly. <br /> <br />
              With a clean layout and responsive design, it handles everything
              from simple sums to complex percentages with ease. We invite you
              to experience a more organized way to manage your numbers today.
            </p>
          </div>
        </div>

        <div className="andromeda-screenshot-wrapper">
          <div className="andromeda-screenshot-proxima-one"></div>
          <div className="andromeda-screenshot-proxima-two"></div>
        </div>

        <div className="get-button">
          {/* <button class="cssbuttons-io-button" onClick={handleClick}>
            Try Proxima Calculator
            <div class="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button> */}

          <button class="contactButton" onClick={handleClick}>
            Try Proxima Calculator
            <div class="iconButton">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProximaCalculator;
