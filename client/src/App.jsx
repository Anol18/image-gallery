import { Suspense, lazy, useState } from "react";
import "./App.css";
const Layout = lazy(() => import("./pages/layout/Layout")); //dynamically importing Layout
import Spinner from "./components/Spinner";
function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Layout className="rounded-md" />
      </Suspense>
    </>
  );
}

export default App;
