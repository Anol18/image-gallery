import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

const Layout = lazy(() => import("./pages/layout/Layout")); //dynamically importing Layout

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
