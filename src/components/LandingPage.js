import React from 'react';
import { Redirect } from 'react-router-dom';
import LandingNav from './LandingNav';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';
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
              <h1>What's Cooking</h1>
              <p id="description">Search recipes or get inspired to cook</p>
              <article className="about">
                <About />
              </article>  
            </article>   
          </article>
        </section>
        <SearchBar />
        <RecipeList />
      </main>
    );
}

export default LandingPage;
