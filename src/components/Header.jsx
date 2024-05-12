const Header = () => {
  return (
    <div className="mt-5">
      <div className="w-full flex items-center justify-center">
        <div className="bg-gradient-to-br from-[#80E8FF] to-[#BC7AFF] w-[9.8rem] h-[9.8rem] flex items-center justify-center rounded-full mb-5">
          <img
            src="https://raw.githubusercontent.com/AhmadMirza2023/portfolio-1/main/src/assets/mirza.jpg"
            alt="me"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-[1.5rem] font-semibold">
          Ahmad <span className="text-gradient">Mirza</span> Rafiq Azm
        </h1>
        <p>Full Stack Developer</p>
      </div>
      <div className="mt-[2rem] text-sm px-5 md:px-0">
        <p className="mb-3">
          Hi, I{"'"}m Mirza, I have experience in several technologies such as
          Flutter and Laravel. In the last year, I have been actively working on
          various projects using both technologies, which allowed me to expand
          my skills in mobile and web application development.
        </p>
        <p>
          Lately, I{"'"}ve been focusing my attention on the world of
          JavaScript, specifically MERN technologies (MongoDB, Express.js,
          React, and Node.js). I was attracted to this technology stack because
          of its flexibility, performance, and broad ecosystem.
        </p>
      </div>
      <div className="mt-5 px-5 md:px-0 text-sm">
        <h1 className="">Let{"'"}s connect!</h1>
        <span>
          LinkedIn &nbsp;&nbsp;&nbsp;:{" "}
          <a
            className="underline text-blue-500"
            href="https://www.linkedin.com/feed/"
          >
            https://www.linkedin.com/feed/
          </a>
        </span>
        <br />
        <span>
          Github &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <a
            className="underline text-blue-500"
            href="https://github.com/AhmadMirza2023"
          >
            https://github.com/AhmadMirza2023
          </a>
        </span>
        <br />
        <span>
          Instagram :{" "}
          <a
            className="underline text-blue-500"
            href="https://www.linkedin.com/feed/"
          >
            https://www.linkedin.com/feed/
          </a>
        </span>
      </div>
      <div className="h-1.5 mt-5 mb-5 mx-5 md:mx-0 bg-gradient-to-br from-[#80E8FF] to-[#BC7AFF] rounded-lg"></div>
    </div>
  );
};

export default Header;
