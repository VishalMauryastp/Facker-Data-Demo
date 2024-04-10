import { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const ScrollToTop = () => {
    const location = useLocation();
    const prevLocation = useRef();

    useEffect(() => {
      if (
        prevLocation.current &&
        prevLocation.current.pathname !== location.pathname
      ) {
        window.scrollTo(0, 0);
        document
          .querySelector("body")
          .classList.remove("max-[1024px]:overflow-hidden");
      }

      prevLocation.current = location;
    }, [location]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
