import React from "react";

interface Child {
  children: React.ReactNode;
}

const Layout = ({ children }: Child) => {
  return <div>{children}</div>;
};

export default Layout;
