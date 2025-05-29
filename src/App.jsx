import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Manuals from './pages/Manuals';
import Aboutus from './pages/Aboutus';

import  './index.css';


function AnimatedRoutes() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: 'easeInOut' },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {[
          { path: '/', Component: Home },
          { path: '/products', Component: Products },
          { path: '/products/:id', Component: ProductDetails },
          { path: '/manuals', Component: Manuals },
          { path: '/about', Component: Aboutus },
          { path: '*', Component: NotFound },
        ].map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                initial={pageTransition.initial}
                animate={pageTransition.animate}
                exit={pageTransition.exit}
                transition={pageTransition.transition}
                className="px-4 sm:px-8 py-6 sm:py-10" // Mobile padding
              >
                <Component />
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-gray-800 bg-gray-50">
        <Navbar />
        <main className="flex-grow overflow-x-hidden">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
