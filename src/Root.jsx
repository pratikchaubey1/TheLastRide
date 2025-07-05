import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";

function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
}

export default Root;
