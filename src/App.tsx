import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";


const Home = lazy(async () => await import("@/pages/home"));

function App() {
  return (
    <Suspense fallback={<>load ...</>}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
