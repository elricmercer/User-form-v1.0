import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateUser from './pages/CreateUser';
import DeleteUser from './pages/DeleteUser';
import HomePage from './pages/HomePage'
import SearchUser from './pages/SearchUser';
import UpdateUser from './pages/UpdateUser';
import ViewAllUsers from './pages/ViewAllUsers';

// get rid of test page ones complete and everything related

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/create' element={<CreateUser />}/>
        <Route path='/delete' element={<DeleteUser />}/>
        <Route path='/search' element={<SearchUser />}/>
        <Route path='/update' element={<UpdateUser />}/>
        <Route path='/view' element={<ViewAllUsers />}/>
      </Routes>
    </Router>
  );
}

export default App;
