// Data command fetching Day | Month | Date | Time
export const command = "date +'%A|%B|%d|%I:%M %p'";

// Refresh every second (1000ms) to ensure time stays accurate
export const refreshFrequency = 1000;

// Emotion CSS for the layout and typography
export const className = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Schoolbell&family=VT323&display=swap');
  @font-face {
    font-family: 'IceCream';
      src: url('/IceCreamMan.otf') format('truetype');
  }

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const render = ({ output }) => {
  if (!output) return null;

  // Split the piped string into individual variables
  const [day, month, date, time] = output.trim().split("|");

  return (
    <div className="w-screen h-screen">
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div
        className="select-none relative flex items-center justify-center w-full h-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, black 10%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0.2) 95%, transparent 90%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 10%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0.1) 95%, transparent 90%)",
        }}
      >
        {/* Background Date Number */}
        <div
          className="absolute inset-0 flex items-center justify-center font-black z-0 select-none"
          style={{
            marginTop: "-50vh",
            transform: "skewX(-15deg) skewY(-0deg) rotate(-2deg)",
          }}
        >
          <img
            src="Calender.svg"
            className="absolute object-contain"
            style={{ width: "250px", height: "250px", opacity: 0.9 }}
            alt=""
          />
          <div
            className="relative flex items-center justify-center"
            style={{
              fontFamily: "'IceCream', sans-serif",
              fontSize: "130px",
              fontweight: "900",
              color: "rgba(52, 52, 52, 0.83)",
              // color: "rgba(127, 204, 163, 0.87)",
              lineHeight: 0.8,
              marginTop: "20px", // Push date down into the calendar bounds if needed
              transform: "skewX(-10deg) skewY(-5deg) rotate(-5deg)", // Skew and rotate the date itself
            }}
          >
            {date}
          </div>
        </div>

        {/* Foreground Container */}
        <div
          className="relative z-10 flex items-center justify-center w-full h-full gap-12 origin-center"
          style={{ transform: "skewX(-17deg) skewY(-0deg) rotate(-2deg)" }}
        >
          {/* Month and Time Block */}
          <div className="flex flex-col justify-center mt-10">
            <h1
              className="font-extrabold uppercase text-white m-0 text-right"
              style={{
                fontFamily: "'IceCream', sans-serif",
                fontSize: "70px",
                lineHeight: 0.9,
                letterSpacing: "4px",
              }}
            >
              {month}
            </h1>
            <div className="flex items-center justify-end gap-2">
              <span
                className="font-semibold mx-1 my-0"
                style={{
                  fontFamily: "'IceCream', sans-serif",
                  fontSize: "35px",
                  color: "rgba(255,255,255,0.87)",
                }}
              >
                |
              </span>
              <p
                className="font-semibold m-0"
                style={{
                  fontFamily: "'IceCream', sans-serif",
                  fontSize: "25px",
                  color: "rgba(255,255,255,0.87)",
                  letterSpacing: "3px",
                }}
              >
                {time}
              </p>
            </div>
          </div>

          {/* Rotated Day of the Week */}
          <div
            className="uppercase font-bold mt-24"
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.87)",
              letterSpacing: "10px",
            }}
          >
            {day}
          </div>
        </div>
      </div>
    </div>
  );
};
