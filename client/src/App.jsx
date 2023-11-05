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

// <input
//                       type="checkbox"
//                       className="absolute top-5 left-5 h-5 w-8 z-20 cursor-pointer"
//                       key={item.id + "key"}
//                       onChange={(e) => handleSelect(item.id, e)}
//                     />

//                     <img
//                       className="rounded-md border-2 hover:brightness-75 transition-brightness duration-300 bg-white cursor-pointer"
//                       src={item.src}
//                       alt={item.alt}
//                       key={item.id}
//                     />
