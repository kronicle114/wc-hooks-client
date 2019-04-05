import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardNav = () => {

  return(
    <main className="dashboard-nav">
      <section className="logo-wrapper">
        <ul className="header-logo">
          <li className="header">
            <Link to="/">
              <h1>What's Cooking</h1>
            </Link>
          </li>
        </ul>
      </section>
      
      <section className="header-middle-area">
        <nav className="main-nav" id="main-nav">
          <ul className="main-sections">
            <li className="main-nav-items">
              <Link to="/link1"
                className="link1"
              >
                <span>
                  Add Recipe
                </span>
              </Link>
            </li>
            <li className="link2">
              <Link to="/link2" 
                className="link2"
              >
                <span >
                  Link2
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </section> 
    </main>
  );
}

export default DashboardNav;