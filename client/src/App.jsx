import { Suspense, lazy, useState } from "react";
import "./App.css";
// Import loading animation from ant design
import { Spin } from "antd";
// const Layout = lazy(() => import("./pages/layout/Layout"));
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <>
      <Layout className="rounded-md" />
    </>
  );
}

export default App;
