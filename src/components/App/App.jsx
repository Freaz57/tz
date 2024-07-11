
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPages from "../pages/MainPages";
import Loader from "../Loader";
import React, {useEffect, useState} from "react";
import PaywallPages from "../pages/PaywallPages";

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);

  return (
      loading ? (
          <Loader />
      ) : (
          <Router>
              <Routes>
                  <Route path="/" element={<PaywallPages />} />
                  <Route path="/MainPages" element={<MainPages />} />
              </Routes>
          </Router>
          )

  )
}

export default App;
