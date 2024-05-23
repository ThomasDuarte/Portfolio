import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  return (
    <section className="pb-12 relative">
      <div className="container mx-auto bg-black rounded-3xl">
        <h1 className="text-4xl font-bold text-center text-indigo-600 p-5 rounded shadow-lg mx-10 -mt-10">
          Skills
        </h1>
        <div className="p-5 rounded shadow-lg mx-10 mb-5">
          <Carousel
            responsive={responsive}
            infinite={true}
            className="relative rounded shadow-lg"
          >
            <div className="bg-gray-100 p-5 rounded shadow-lg mx-10 mb-5">
              <h1 className="text-4xl font-bold text-center text-indigo-600">
                <img
                  className="w-20 h-20 mx-auto"
                  src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                  alt="html"
                />
                Frontend
              </h1>
              <ul className="text-lg text-center mt-4 mx-10">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-5 rounded shadow-lg mx-10 mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                alt="html"
              />
              <h1 className="text-4xl font-bold text-center text-indigo-600">
                Backend
              </h1>
              <ul className="text-lg text-center mt-4 mx-10">
                <li>JavaScipt</li>
                <li>C#</li>
                <li>Java</li>
                <li>Node</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-5 rounded shadow-lg mx-10 mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="https://img.icons8.com/color/48/000000/database-restore.png"
                alt="html"
              />
              <h1 className="text-4xl font-bold text-center text-indigo-600">
                Database
              </h1>
              <ul className="text-lg text-center mt-4 mx-10">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>SQLite</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-5 rounded shadow-lg mx-10 mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="https://img.icons8.com/color/48/000000/monitor.png"
                alt="html"
              />
              <h1 className="text-4xl font-bold text-center text-indigo-600">
                Tools
              </h1>
              <ul className="text-lg text-center mt-4 mx-10">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>XrmToolBox</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-5 rounded shadow-lg mx-10 mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="https://img.icons8.com/color/48/000000/monitor.png"
                alt="html"
              />
              <h1 className="text-4xl font-bold text-center text-indigo-600">
                CRM
              </h1>
              <ul className="text-lg text-center mt-4 mx-10">
                <li>Microsoft Dynamics 365</li>
                <li>Salesforce</li>
                <li>Efficy</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-5 rounded shadow-lg mx-10 mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="https://img.icons8.com/color/48/000000/monitor.png"
                alt="html"
              />
              <h1 className="text-4xl font-bold text-center text-indigo-600">
                Others
              </h1>
              <ul className="text-lg text-center mt-4 mx-10">
                <li>Agile</li>
                <li>Scrum</li>
                <li>Pair-programming</li>
                <li>Testing</li>
                <li>Estimation</li>
              </ul>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
