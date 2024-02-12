import React, { useState } from 'react';
import './navbar.css';
// Import search icon from assets
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
 // Import search icon from assets
import SearchComponent from '../Movies/search/SearchComponent'; // Import SearchComponent
function Navbar() {


    return (
        <nav>
            <div className="nav-container">

            {/* Search input */}
            <div className="search-container">
            <SearchComponent />
            </div>

          <Link to="/"><img src="src/assets/home.svg"/></Link>
            </div>
                  
        </nav>
    );
}

export default Navbar;
