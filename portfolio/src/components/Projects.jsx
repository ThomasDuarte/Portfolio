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
      title: "Perlin noise project",
      description:
        "During my Master 1 in computer science, I had to create a project using Perlin noise. This project was in team of 3 peolple. We created a 2D map generator using Perlin noise. We used Javascript to create the project. We also used a little bit of HTML and CSS to create the website. Therz was a second Perlin noise created in Go to compare the two Perlin noise.",
      image: perlinNoise,
      url: "https://github.com/ThomasDuarte/Perlin-Noise",
    },
    {
      title: "Car dashboard lights website",
      description:
        "This was a personnal project. In order to learn React, I created a website about car dashboard lights. I also used a little bit of HTML and TailwindCSS to create the website. The website is composed of a home page with a navBar and a page for each dashboard light. I used a JSON file to store the data of the dashboard lights.",
      image: carLightsWebsite,
      url: "https://github.com/ThomasDuarte/React_ServerBar",
    },
    {
      title: "Academic project : Tips Haler",
      description:
        "During my BTS SNIR, I create a system to help people with asthma. The system is composed of a Raspberry Pi, a pressure sensor and some PVC parts. The Raspberry Pi is connected to a website where the user can see the data collected by the sensors. The user can also set up alerts if the data collected is too high. I worked with a team of 4 people to create the system and I was in charge of creating the website and the connection between the website and the Raspberry Pi.",
      image: tipsHaler,
      url: "https://optimhal.com/chambre-dinhalation-tips-haler/",
    },
    {
      title: "Tree6clope",
      description:
        "During my year of work-study, I had to contribute to the development of the Tree6clope project. I was in charge of the detection of each cigarette butt thrown inside the Tree6clope. I used a Raspberry Pi and a infrared sensors to detect the cigarette butts. I also used a programm in C to count the number of cigarette butts. There was also a part of the project where I had to create a website to display the number of cigarette butts detected.",
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
                <div className="flex justify-center items-center flex-col">
                  <img
                    className="w-64 h-64 object-contain object-center rounded-lg"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="text-lg font-bold mt-2">
                    <h2>{project.title}</h2>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-justify mb-4">
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
