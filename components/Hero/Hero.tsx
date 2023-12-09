import React from "react";
import HeroProfile from "./HeroProfile";
import LiamMobile from "../../public/Liam_mobile.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <HeroProfile
        image={LiamMobile}
        subheading="Hi My name is"
        heading="liam norris"
      />
    </div>
  );
};

export default Hero;
