import { Spin } from "antd";
import Header from "../../components/Header";
import Gallery from "../gallery/Gallery";
import React, { Suspense, lazy } from "react";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Gallery />
      </div>
    </>
  );
};

export default Layout;
