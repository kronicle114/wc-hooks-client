import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import About from './About';
import '../styles/WhatsCooking.css';

const WhatsCooking = () => {
  const [user, setUser] = useState({username: null})
 
  const storeUser = user => {
    localStorage.getItem("user");
    setUser(user);
  };

  const logout = () => {
    localStorage.clear();
    setUser({ username: null });
  };

  return (
    <section className="App">
        { localStorage.user ? (
          <Route 
          exact path="/dashboard" 
          render={(props) => <Dashboard {...props} storeUser={storeUser} user={user.username} logout={logout} isAuthed={true} />}
          /> 
        ) : (
          <Route exact path="/register" component={RegistrationPage} />
        )}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginForm} storeUser={storeUser} />
			<Route exact path="/about" component={About} storeUser={storeUser} />
    </section>
  );
}

export default withRouter(WhatsCooking);
