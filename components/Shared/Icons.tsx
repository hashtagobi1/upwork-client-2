import Link from "next/link";
import React, { HTMLAttributes, ReactElement } from "react";

type Props = {};

type IconType = {
  link: string;
  icon: ReactElement<any, any>;
  i?: number;
};

const icons: IconType[] = [
  {
    icon: <i className="bi bi-linkedin"></i>,
    link: "https://www.linkedin.com",
  },
  {
    icon: <i className="bi bi-github"></i>,
    link: "https://www.github.com",
  },
  {
    icon: <i className="bi bi-twitter"></i>,
    link: "https://www.twitter.com",
  },
];

const Icons = () => {
  const renderIcon = (
    icon: ReactElement<any, any>,
    link: string,
    key: number
  ) => {
    return (
      <Link className=" rounded-full" key={key} href={link!} passHref>
        <div className=" m-3 border rounded-full text-blueNight border-bg p-3 flex-row">
          {icon}
        </div>
      </Link>
    );
  };
  return (
    <div className=" rounded-full flex">
      {icons.map((icon, i) => renderIcon(icon.icon, icon.link, i))}
    </div>
  );
};

export default Icons;
