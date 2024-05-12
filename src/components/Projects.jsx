import { projects } from "../constants";

const Projects = () => {
  return (
    <div>
      <ul>
        {projects.map((item) => (
          <li key={item.id}>
            <img
              className="rounded-xl mb-3"
              src={item.image}
              alt={item.title}
            />
            <h1 className="text-lg font-semibold mb-3">{item.title}</h1>
            <p className="text-sm mb-3">{item.description}</p>
            <div className="text-sm">
              <p> Total Member &nbsp;&nbsp;: {item.totalMember}</p>
              <p>
                As
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                : {item.as}
              </p>
              <p>
                Year
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                {item.year}
              </p>
              <p>
                Stack
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                {item.stack}
              </p>
              <p>
                URL Code &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                <a className="underline text-blue-500" href={item.urlCode}>
                  {item.urlCode}
                </a>
              </p>
            </div>
            <div className="w-full h-1.5 mt-5 mb-5 bg-gradient-to-br from-[#80E8FF] to-[#BC7AFF] rounded-lg"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
