import { projects } from "../constants";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import "animate.css";

const AnimatedProject = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`animate__animated ${
        isVisible
          ? index % 2 !== 0
            ? "animate__fadeInLeft"
            : "animate__fadeInRight"
          : "invisible"
      }`}
    >
      <img
        className="rounded-xl mb-3"
        src={project.image}
        alt={project.title}
      />
      <h1 className="text-lg font-semibold mb-3">{project.title}</h1>
      <p className="text-sm mb-3">{project.description}</p>
      <div className="text-sm">
        <p> Total Member &nbsp;&nbsp;: {project.totalMember}</p>
        <p>
          As
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          : {project.as}
        </p>
        <p>
          Year
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          {project.year}
        </p>
        <p>
          Stack
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          {project.stack}
        </p>
        <p>
          URL Code &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <a className="underline text-blue-500" href={project.urlCode}>
            {project.urlCode}
          </a>
        </p>
      </div>
      <div className="w-full h-1.5 mt-5 mb-5 bg-gradient-to-br from-[#80E8FF] to-[#BC7AFF] rounded-lg"></div>
    </div>
  );
};

AnimatedProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    totalMember: PropTypes.number.isRequired,
    as: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    stack: PropTypes.string.isRequired,
    urlCode: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Projects = () => {
  return (
    <div>
      {projects.map((item, index) => (
        <AnimatedProject key={item.id} project={item} index={index} />
      ))}
    </div>
  );
};

export default Projects;
