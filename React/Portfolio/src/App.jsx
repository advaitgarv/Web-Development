import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/Toaster";
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
