import { BrowserRouter } from "react-router-dom";

// pages
import AnimatedRoutes from './components/app/AnimatedRoutes'

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div className="relative h-screen overflow-auto">
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
