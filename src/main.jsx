import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Layout from './Layout';
import {  Route,BrowserRouter as Router, Routes } from 'react-router-dom';

import MyTableFile from './components/MyTableFile';
import Profile from './components/Profile';
// import { Route, Router, Routes } from 'react-router-dom'
// import DashboardCards from './components/DashboardCards';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
   <Route path='/'element={ <Layout/>}/>
   <Route path='dashboard' element={<Layout/>}/>
   <Route path='tables' element={<MyTableFile/>}/>
   <Route path='profile' element={<Profile/>}/>
          </Routes>
     </Router>
        </React.StrictMode>,

 
)
