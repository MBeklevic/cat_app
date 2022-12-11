import React, { Component } from 'react';
import './App.css';
import CatPage from './components/CatPage';
import { Route, Routes } from 'react-router-dom';
import SingleCatPage from './components/SingleCatPage';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Routes>
          <Route exact path='/' element={<CatPage />} />
          <Route path='/:name' element={<SingleCatPage />} />
          <Route path="*" element={<CatPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
