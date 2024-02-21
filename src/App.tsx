import { RouterProvider } from "react-router-dom";
import { createRouter } from "./providers/router";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={createRouter()} />
      </Suspense>
    </>
  );
}

export default App;
