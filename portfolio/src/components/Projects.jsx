import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function Projects() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const projects = [
    {
      title: "Project 1",
      description:
        "This project is a project 1. It is a project that is a project and it is a project. It's also a project that is a project.",
      image: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      title: "Project 2",
      description: "This is a project 2",
      image: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      title: "Project 3",
      description: "This is a project",
      image: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      title: "Project 4",
      description: "This is a project",
      image: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      title: "Project 5",
      description: "This is a project",
      image: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      title: "Project 6",
      description: "This is a project",
      image: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      title: "Project 7",
      description: "This is a project",
      image: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      title: "Project 8",
      description: "This is a project",
      image: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
  ];
  const [isFlipped, setIsFlipped] = useState(
    Array(projects.length).fill(false)
  );
  const handleHover = (index) => {
    setIsFlipped((prev) => {
      const newFlippedStatus = [...prev];
      newFlippedStatus[index] = !newFlippedStatus[index];
      return newFlippedStatus;
    });
  };

  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white pb-12 relative">
      <div className="container mx-auto">
        <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 text-4xl font-bold text-center text-white p-5 rounded shadow-lg mx-10 mb-5">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {projects.map((project, index) => (
            <div
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(index)}
              className=""
            >
              <ReactCardFlip
                key={index}
                isFlipped={isFlipped[index]}
                flipDirection="horizontal"
              >
                <div className="flex justify-center flex-col">
                  <img src={project.image} alt={project.title} />
                  <div className="legend">
                    <h2>{project.title}</h2>
                  </div>
                </div>
                <div>
                  <p>{project.description}</p>
                  <a href={project.url}>Learn More</a>
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
