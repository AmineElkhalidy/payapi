import React from "react";

// Header & Footer
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface Child {
  children: React.ReactNode;
}

const Layout = ({ children }: Child) => {
  return (
    <React.Fragment>
      <Header />

      <main className="main">{children}</main>

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
