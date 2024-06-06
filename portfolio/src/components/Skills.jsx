import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bddIcon from "../assets/img/bdd.png";
import crmIcon from "../assets/img/crm.png";
import htmlIcon from "../assets/img/html.png";
import jsIcon from "../assets/img/js.png";
import otherIcon from "../assets/img/other.png";
import toolsIcon from "../assets/img/tools.png";

export default function Skills() {
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

  const skills = [
    {
      icon: htmlIcon,
      name: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      icon: jsIcon,
      name: "Backend",
      items: ["JavaScipt", "C#", "Java", "Node"],
    },
    {
      icon: bddIcon,
      name: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    },
    {
      icon: toolsIcon,
      name: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "XrmToolBox"],
    },
    {
      icon: crmIcon,
      name: "CRM",
      items: ["Microsoft Dynamics 365", "Salesforce", "Efficy"],
    },
    {
      icon: otherIcon,
      name: "Others",
      items: ["Agile", "Scrum", "Pair-programming", "Testing", "Estimations"],
    },
  ];

  return (
    <section className="pb-5 sm:pb-12 relative" id="skills">
      <div className="container mx-auto bg-[mediumpurple] rounded-3xl pb-5">
        <h1 className="text-4xl font-bold text-center text-white p-5 mx-10 -mt-5 sm:-mt-10">
          Skills
        </h1>
        <div className="p-5 rounded-xl shadow-lg mx-10 bg-white">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            className="relative"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-100 p-5 rounded-lg shadow-lg mx-10 h-full"
              >
                <h1 className="text-4xl font-bold text-center text-indigo-600">
                  <img
                    className="w-20 h-20 mx-auto mb-2"
                    src={skill.icon}
                    alt={skill.name}
                  />
                  {skill.name}
                </h1>
                <ul className="text-lg text-center mt-2 mx-10">
                  {skill.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
