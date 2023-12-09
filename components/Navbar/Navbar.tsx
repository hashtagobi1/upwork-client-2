import React from "react";
import CompanyName from "./CompanyName";
import BurgerMenu from "./BurgerMenu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <CompanyName />
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
