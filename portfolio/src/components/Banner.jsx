import { useEffect, useState } from "react";
import logo from "../assets/img/logo.jpg";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "CRM developer",
    "Car Enthusiast",
    "Music Producer",
    "Gamer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.6);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(1000);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section
      id="home"
      className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white pt-5 pb-10 sm:py-20 flex flex-col sm:flex-row items-center"
    >
      <div className="order-1 sm:order-2 relative container mx-auto">
        <img
          src={logo}
          alt="profile"
          className="w-64 sm:w-80 h-64 sm:h-80 mx-auto rounded-full mb-5"
        />
        <div className="hidden sm:flex w-80 h-80 mx-auto rounded-full absolute bottom-0 left-0 right-0 top-0 overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 transition duration-300 ease-in-out hover:opacity-0 ">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white font-bold animate-blink opacity-100 text-sm sm:text-base md:text-lg lg:text-xl">
            Hover me!
          </div>
        </div>
      </div>
      <div className="order-2 sm:order-1 container mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-600 bg-white p-5 rounded shadow-lg mx-10 mb-5">
          Welcome to my portfolio
        </h1>
        <h1 className=" text-3xl text-center">
          {`Hi, i'm a `}
          <span>{text}</span>
        </h1>
        <p className="text-lg text-center mt-4 mx-10">
          I love to create and develop new things. Car's and games are my second
          passion. Here you can see some of my projects and skills.
        </p>
        <p className="text-xl font-semibold italic text-center mt-4">
          Feel free to contact me if you want to work with me.
        </p>
      </div>
    </section>
  );
}
