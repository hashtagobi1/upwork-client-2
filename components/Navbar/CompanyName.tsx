import Link from "next/link";
import React from "react";

type Props = {};

const CompanyName = (props: Props) => {
  return (
    <Link
      href={"/"}
      passHref
      className="uppercase text-4xl font-bold bg-gradient-to-r from-green-600  to-blue-400 inline-block text-transparent bg-clip-text tracking-widest"
    >
      Thought<span className="font-normal">Codex</span>
    </Link>
  );
};

export default CompanyName;
