import React from 'react';
import {DropdownContent1, DropdownContent2, DropdownContent3, DropdownContent4, DropdownContent5, DropdownContent6} from "./dropdown-content";


import "./Web.css";

function Web() {
   
  return (
    <div className='web'>
       <div className='web-option'>
           <a className="dropbtn" href='/new-arrivals'>
           NEW ARRIVALS
          </a>
     {/* <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
     </div> */}
       </div>
       <div className='web-option'>
           <a className="dropbtn"href='/designers'>
           DESIGNERS
           </a>
           <div className="dropdown-content">
   <DropdownContent5/>
     </div>
       </div>
       <div className='web-option'>
           <a className="dropbtn"href='/clothing'>
           CLOTHING
           </a>
           <div className="dropdown-content">
               <DropdownContent1/>
    {/* <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a> */}
     </div>
       </div>
       <div className='web-option'>
           <a className="dropbtn"href='//shoes'>
           SHOES
           </a>
           <div className="dropdown-content">
   <DropdownContent2/>
     </div>
       </div>
       <div className='web-option'>
           <a className="dropbtn"href='/bags'>
           BAGS
           </a>
           <div className="dropdown-content">
      <DropdownContent3/>
     </div>
       </div>
       <div className='web-option'>
           <a className="dropbtn"href='/accessories'>
           ACCESSORIES
           </a>
           <div className="dropdown-content">
   <DropdownContent4/>
     </div>
       </div>
       <div className='web-option'>
           <a className="dropbtn"href='/jewelary'>
           JEWELRY
           </a>
           <div className="dropdown-content">
   <DropdownContent6/>
     </div>
       </div>
       <div className='web-option'>
           <a className="dropbtn"href='/vacation'>
           VACATION
           </a>
           {/* <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
     </div> */}
       </div>
       <div className='web-option'>
           <a className="dropbtn"href='/sale'>
           Sale
           </a>
           {/* <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
     </div> */}
       </div>
      
      
    </div>
  )
}

export default Web
