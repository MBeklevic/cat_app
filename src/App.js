import React, { Component } from 'react';
import './App.css';
import CatPage from './components/CatPage';
import { Route, Routes } from 'react-router-dom';
import SingleCatPage from './components/SingleCatPage';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Routes>
          <Route exact path='/cat_app' element={<CatPage />} />
          <Route path='/cat_app/:name' element={<SingleCatPage />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
