import React from 'react';
import './App.css';
import Heder from "./components/Heder"
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Heder />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
