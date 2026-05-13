import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import Loader from './components/ui/Loader';
import Home from './pages/Home';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <WhatsAppFloat />
    </>
  );
}

export default function App() {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setInitialLoad(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <Loader show={initialLoad} />

      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
