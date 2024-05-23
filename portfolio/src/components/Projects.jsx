export default function Projects() {
  return (
    <section className="pb-12 relative">
      <div className="container mx-auto bg-black rounded-3xl">
        <h1 className="text-4xl font-bold text-center text-indigo-600 p-5 rounded shadow-lg mx-10 -mt-10">
          Projects
        </h1>
        <div className="p-5 rounded shadow-lg mx-10 mb-5">
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
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>PHP</li>
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
