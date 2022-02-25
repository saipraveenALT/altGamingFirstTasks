import React, { useState } from 'react'
import SideMenu from './Components/sideMenu';
import {
  BrowserRouter as Router,
  
  Route,
  Link,
  BrowserRouter,
  Routes,
}from "react-router-dom";
import Title from './Components/title';
import Content from './Components/Content';
import Design from './Components/Design';
import './App.css';

const App = () => {
  const Dashboard = () => {
    return <h1>Dashboard</h1>
  };
  // const Content = () => {
  //   return <h1>Courses</h1>
  // };
  // const Design  = () => {
  //   return <h1>Design</h1>
  // };
const [inactive, setInactive] = useState(false)


  return (
    <div className='App'>
        <Title/>
       <Router>
       <SideMenu  onCollapse={(inactive:any) =>{
         console.log(inactive);
         setInactive(inactive);
       }}/>
       <div className={`container ${inactive ? 'inactive' : ""}`} >
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/Content' element={<Content />} />
            <Route path='/Design' element={<Design />} />
          </Routes>
          </div>
       </Router>
       
      </div>
    
  )
}

export default App



