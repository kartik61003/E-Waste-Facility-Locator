import React from 'react'
import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <>
//       <div className='navbar'>
//         <div className='app-logo'>
//           <img id='navbar-image' src="https://pics.clipartpng.com/Renewable_Energy_PNG_Clipart-2976.png" alt=""></img>
//         </div>
//         <div className='btn-grp'>            
//         <a>Estimate Calculator</a>
//         <a> CONTACT US</a>
//         </div>
//       </div>
//     </>
//   )
// }

import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {
        <>
          <div className='navbar'>
            <div className='app-logo'>
              <img id='navbar-image' src="https://pics.clipartpng.com/Renewable_Energy_PNG_Clipart-2976.png" alt=""></img>
            </div>
            <div className='btn-grp'>    
            <Link to="/Calculator">Estimate Calculator</Link>        
            <a> CONTACT US</a>
            </div>
          </div>
        </>
      }
    </div>
  );
}


export default Header
