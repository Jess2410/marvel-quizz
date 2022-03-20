import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../SignUp';
import ErrorPage from '../ErrorPage';

function App() {
  return (
    <BrowserRouter>
     <Header/>
<Routes>
  <Route exact path="/" element={<Landing/>}/>
  <Route path="/welcome" element={<Welcome/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path='*' element={<ErrorPage/>}/>
</Routes> 
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
