import { Suspense, lazy, useState } from "react";
import "./App.css";
// Import loading animation from ant design
import { Spin } from "antd";
const ImageGallery = lazy(() => import("./pages/gallery/Page"));
function App() {
  return (
    <>
      {/* used suspense for  */}
      <Suspense fallback={<Spin />}>
        <ImageGallery />
      </Suspense>
    </>
  );
}

export default App;
