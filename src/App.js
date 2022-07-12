import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import MenuPage from './Components/MenuPage'
import Login from './Pages/Login';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

    </Fragment>
  );
}

export default App;
