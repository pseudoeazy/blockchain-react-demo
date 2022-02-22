import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ title: string }> = ({ title, children }) => (
  <div
    className="main-page-layout"
    style={{ maxWidth: 1366, margin: "0 auto" }}
  >
    <Header title={title} />
    {children}
    <Footer />
  </div>
);

export default Layout;
