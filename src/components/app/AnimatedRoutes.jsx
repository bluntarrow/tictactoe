import { Route, Routes, useLocation } from "react-router-dom";

// pages
import Home from "../../pages/Home";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <div>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
