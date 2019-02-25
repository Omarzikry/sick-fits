import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/sell">
        <a>sell</a>
      </Link>
    </div>
  );
};

export default Nav;
