import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const musicGroups = [
  {
    title: "Acapella remix",
    tracks: [
      "https://api.soundcloud.com/tracks/720763774",
      "https://api.soundcloud.com/tracks/1231461352",
      "https://api.soundcloud.com/tracks/691734769",
    ],
  },
  {
    title: "Chill sounds",
    tracks: [
      "https://api.soundcloud.com/tracks/794419846",
      "https://api.soundcloud.com/tracks/684696172",
      "https://api.soundcloud.com/tracks/684683443",
    ],
  },
  {
    title: "Other musics",
    tracks: [
      "https://api.soundcloud.com/tracks/876256264",
      "https://api.soundcloud.com/tracks/770652427",
      "https://api.soundcloud.com/tracks/770210422",
    ],
  },
];

const MusicGroup = ({ title, tracks }) => (
  <div className="bg-blue-100 px-4 pb-4 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-center my-4">{title}</h2>
    <div className="space-y-4">
      {tracks.map((trackUrl, index) => (
        <iframe
          key={index}
          width="100%"
          height="300"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
            trackUrl
          )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://w.soundcloud.com/player/?url=";
          }}
        ></iframe>
      ))}
    </div>
  </div>
);
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

const MusicGroupMobile = ({ musicGroups }) => {
  return (
    <div className="bg-blue-100 px-4 pb-4 rounded-lg shadow-lg">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        className="relative"
      >
        {musicGroups.flatMap((group, groupIndex) =>
          group.tracks.map((trackUrl, trackIndex) => (
            <div key={`${groupIndex}-${trackIndex}`}>
              <h2 className="text-2xl font-semibold text-center my-4">
                {group.title}
              </h2>
              <iframe
                width="100%"
                height="300"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                  trackUrl
                )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://w.soundcloud.com/player/?url=";
                }}
              />
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
};

const MusicProductions = () => {
  const isMobile = window.innerWidth <= 500; // Adjust this value as needed

  return (
    <section className="relative" id="musicProduction">
      <div className="mt-5 sm:mt-10 bg-[mediumpurple] rounded-3xl pb-5">
        <h1 className="text-4xl font-bold text-center text-white p-5 mx-10">
          Music productions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {isMobile ? (
            <MusicGroupMobile musicGroups={musicGroups} />
          ) : (
            musicGroups.map((group, index) => (
              <MusicGroup
                key={index}
                title={group.title}
                tracks={group.tracks}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MusicProductions;
