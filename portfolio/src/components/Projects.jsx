import { t } from "i18next";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import carLightsWebsite from "../assets/img/carLightsWebsite.png";
import perlinNoise from "../assets/img/perlinNoise.png";
import tipsHaler from "../assets/img/tipsHaler.jpeg";
import tree6clope from "../assets/img/tree6clope.jpeg";

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
      title: t("projects_Perlin_Title"),
      description: t("projects_Perlin_Description"),
      image: perlinNoise,
      url: "https://github.com/ThomasDuarte/Perlin-Noise",
    },
    {
      title: t("projects_CarLights_Title"),
      description: t("projects_CarLights_Description"),
      image: carLightsWebsite,
      url: "https://github.com/ThomasDuarte/React_ServerBar",
    },
    {
      title: t("projects_TipsHaler_Title"),
      description: t("projects_TipsHaler_Description"),
      image: tipsHaler,
      url: "https://optimhal.com/chambre-dinhalation-tips-haler/",
    },
    {
      title: t("projects_Tree6clope_Title"),
      description: t("projects_Tree6clope_Description"),
      image: tree6clope,
      url: "https://www.tree6clope.com/",
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
    <section
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white pb-5 sm:pb-12 relative"
      id="projects"
    >
      <div className="container mx-auto">
        <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 text-4xl font-bold text-center text-white p-5 rounded-xl shadow-lg mx-10 mb-5">
          {t("projects_Title")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(index)}
              className=""
            >
              <ReactCardFlip
                key={index}
                isFlipped={isFlipped[index]}
                flipDirection="horizontal"
              >
                <div className="flex justify-center items-center flex-col mb-3 sm:mb-auto">
                  <img
                    className="w-72 sm:w-64 h-72 sm:h-64 object-cover object-center rounded-lg"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="text-lg font-bold mt-2">
                    <h2>{project.title}</h2>
                  </div>
                </div>
                <div className="mx-5 sm:mx-auto mb-3 sm:mb-auto">
                  <p className="text-lg text-justify mb-4 ">
                    {project.description}
                  </p>
                  {project.url !== "" && (
                    <a
                      className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500"
                      href={project.url}
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
