import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import CreatePage from './Pages/Create';
function App() {

  return (
    <div>
      <BrowserRouter>

        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/signup' >
          <SignupPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/addproduct'>
          <CreatePage />
        </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
