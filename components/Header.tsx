import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
    </>
  );
};
export default Header;
