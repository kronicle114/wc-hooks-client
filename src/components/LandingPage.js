import React from 'react';
import { Redirect } from 'react-router-dom';
import LandingNav from './LandingNav';
// import ReviewList from './review-list';
import About from './About';
import '../styles/landing.css';

export const LandingPage = (props) => {
    // If we are logged in redirect straight to the user's dashboard
    if (localStorage.authToken) {
      return <Redirect to="/dashboard" />;
    } 

    return (
      <main className="home">
        <section className="landing-top">
          <LandingNav />
          <article className='landing-content'>
            <article className='landing-text'>
              <h1>Template</h1>
              <p id="description">This is a react front-end template</p>
              <article className="about">
                <About />
              </article>  
            </article>   
          </article>
        </section>
        {/* <ReviewList /> */}
      </main>
    );
}

export default LandingPage;
