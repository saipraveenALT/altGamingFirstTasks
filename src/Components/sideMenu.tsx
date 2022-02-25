import React, {useEffect, useState} from 'react'
import logo from "../assests/reacts.png"
import {NavLink} from "react-router-dom";
import { Link } from 'react-router-dom';
import Title from './title';

// const menuItems = [
//   {name: 'Dashboard', to: '/'},
//   {name: 'Content', to: '/content'},
//   {name: 'Design', to: '/design'}
// ];

const SideMenu = (props : any) => {
  const[inactive,setInactive] = useState(false);

  useEffect(() => {
    props.onCollapse(inactive);
  },[inactive])
  return (
    <div className={`side-menu ${inactive ? "inactive" : "" }`}>
         
        <div className='top-section'>
           <div className='logos'>
              <img src={logo} alt="reactlogo" />
            </div> 
            <div onClick={() => {setInactive(!inactive)}}
            className='back-arrow-btn' >
            <i className="bi bi-arrow-left-square-fill"></i>
            </div>
            <br/>
            <div className='search-bar'>
               <button className='search-btn'>
               <i className="bi bi-search"></i>
               </button>
              <input type="text" placeholder='search' />
            </div>
            <div className='divider'></div>



            <div className="main-menu">
                <ul>
                   {/* {
                     menuItems.map((menuItem, index) => (
                      <menuItem 
                        key={index}
                        name={menuItem.name}
                        to={menuItem.to}
                        subMenus={menuItem.subMenus || [] }
                      />  
                     ))
                   } */}
                  <li> 
                    <a className='menu-item'>
                     <Link to = '/'> <span>Dashboard</span></Link>
                    </a>
                 </li>
                 <li>
                   <a className='menu-item'>
                    <Link to = '/Content'> <span>
                      Content
                     </span> </Link>
                   </a>
                   

                   {/* <ul className='sub-menu'>
                     <li>
                       <a>
                         <span>Courses</span>
                       </a>
                     </li>
                     <li>
                       <a>
                         <span>Videos</span>
                       </a>
                     </li>
                   </ul> */}
                    </li> 
                    <li>
                      <a className='menu-item'>
                      <Link to = '/Design'> <span>Design</span> </Link>
                      </a>
                    </li>  
                 
                 
               </ul>
              </div>  
              
        </div>
        {/* <div className='side-menu-footer'></div> */}
        </div>
  )
}

export default SideMenu