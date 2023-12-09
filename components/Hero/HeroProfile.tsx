import Image, { StaticImageData } from "next/image";
import React from "react";
import Icons from "../Shared/Icons";
import HeroText from "./HeroText";

type HeroProfileProps = {
  image: StaticImageData;
  subheading: string;
  heading: string;
  icons?: string[];
};

const HeroProfile = ({
  heading,
  icons,
  image,
  subheading,
}: HeroProfileProps) => {
  return (
    <div className="flex relative w-full bg-cover bg-center justify-center items-center flex-col bg-heroTop bg-no-repeat h-screen text-center">
      <Image
        className=" absolute-z-40"
        alt="image of profile"
        src={image}
        width={1024}
        height={1024}
      />
      <div className="flex relative  flex-col items-center justify-end ">
        <p className="uppercase text-2xl customGradient bg-gradient-to-r from-greenNight to-blueNight">
          {subheading}
        </p>
        <p className="capitalize font-bold text-6xl customGradient bg-clip-text bg-gradient-to-r from-greenNight to-blueNight">
          {heading}
        </p>
      </div>
      <Icons />
      <HeroText/>
    </div>
  );
};

export default HeroProfile;
