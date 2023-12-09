import React from "react";

const HeroText = () => {
  return (
    <div className="font-bold text-xl">
      I&lsquo;ve spent the last decade building valuable products that play
      between three dimensions of technology:{" "}
      <span className="bg-gradient-to-r from-greenNight to-blueNight customGradient">
        People
      </span>
      ,{" "}
      <span className="customGradient bg-gradient-to-r from-orangeNight to-pinkNight">
        Markets
      </span>
      , &{" "}
      <span className="customGradient bg-gradient-to-r from-purpleNight to-skyNight">
        Machines
      </span>
      . Connecting the three through online communities, marketplaces, and
      platforms is my deep professional passion.
    </div>
  );
};

export default HeroText;
