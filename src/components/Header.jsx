import "animate.css";

const Header = () => {
  return (
    <div className="mt-5">
      <div className="w-full flex items-center justify-center">
        <div className="bg-gradient-to-br from-[#80E8FF] to-[#BC7AFF] w-[9.8rem] h-[9.8rem] flex items-center justify-center rounded-full mb-5 animate__animated animate__bounceInDown animate-duration">
          <img
            src="https://amierza.github.io/portfolio-1/assets/mirza.jpg"
            alt="me"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-[1.5rem] font-semibold">
          Ahmad <span className="text-gradient">Mirza</span> Rafiq Azmi
        </h1>
        <p>Backend Developer</p>
      </div>
      <div className="mt-[2rem] text-sm">
        <h1 className="font-bold text-xl">Hi, I{"'"}m Mirza</h1>
        <p className="mb-5">
          I have experience in several technologies such as Flutter and Laravel.
          Over the past year, I have been actively working on various projects
          using both technologies, allowing me to deepen my skills in mobile and
          web application development. However, my current focus has shifted
          toward backend development, particularly in Golang.
        </p>
        <h1 className="font-bold text-xl">My Focus</h1>
        <p className="mb-3">
          Currently, I am immersed in Golang. I have worked on several projects
          using Golang, and while I may not have mastered every aspect of it, I
          have a solid understanding of the basics. I{"'"}m comfortable with the
          folder structure, API development, and implementation. Recently, I
          have also started learning about RabbitMQ in Golang and I also have
          some exposure to gRPC.
        </p>
        <p>
          Besides Golang, I have a background in Python, although my experience
          is mostly related to academic projects. I have also worked with other
          technologies such as Laravel, Flutter, and React. My proficiency in
          Laravel and Flutter is relatively stronger compared to React and
          Python.
        </p>
      </div>
      <div className="mt-5 text-sm">
        <h1 className="">Let{"'"}s connect!</h1>
        <span>
          LinkedIn &nbsp;&nbsp;&nbsp;:{" "}
          <a
            className="underline text-blue-500"
            href="https://www.linkedin.com/in/ahmad-mirza-rafiq-azmi/"
          >
            https://www.linkedin.com/in/ahmad-mirza-rafiq-azmi/
          </a>
        </span>
        <br />
        <span>
          Github &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <a
            className="underline text-blue-500"
            href="https://github.com/Amierza"
          >
            https://github.com/Amierza
          </a>
        </span>
        <br />
        <span>
          Instagram :{" "}
          <a
            className="underline text-blue-500"
            href="https://www.instagram.com/mirza_rafiq15/"
          >
            https://www.instagram.com/mirza_rafiq15/
          </a>
        </span>
      </div>
      <div className="h-1.5 mt-5 mb-5 bg-gradient-to-br from-[#80E8FF] to-[#BC7AFF] rounded-lg"></div>
    </div>
  );
};

export default Header;
