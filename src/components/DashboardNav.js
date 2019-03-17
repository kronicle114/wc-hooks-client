import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardNav = () => {

  return(
    <main className="dashboard-nav">
      <section className="logo-wrapper">
        <ul className="header-logo">
          <li className="header">
          <Link to="/"><h1>Template</h1></Link>
          </li>
        </ul>
      </section>
      <section className="header-middle-area">
        <nav className="main-nav" id="main-nav">
          <ul className="main-sections">
            <li className="claim-plate">
              <Link to="/claim-plate"
                className="claim-link"
              >
                <span>
                  Claim Plate
                </span>
              </Link>
            </li>
            <li className="my-plates">
              <Link to="/my-plates" 
                className="my-plates-link"
              >
                <span >
                  My Plates
                </span>
              </Link>
            </li>          
            <li className="my-reviews">
              <Link to='/my-reviews' 
                className="my-reviews-link"
              >
                <span >
                  My Reviews
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