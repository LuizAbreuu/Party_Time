import { Outlet } from 'react-router-dom';

// Components 
import Navbar from './components/Navbar';

import { ToastContainer } from "react-toastify";

import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
