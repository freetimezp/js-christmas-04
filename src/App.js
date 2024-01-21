import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from "./components/Header";
import Hero from './components/Hero';
import './App.css';

export const AppContext = React.createContext();

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://christmas-04.onrender.com/slides')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AppContext.Provider value={{ data }}>
        <Header />
        <Hero />
      </AppContext.Provider>
    </>
  );
}

export default App;
