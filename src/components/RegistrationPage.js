import React from 'react';
import RegistrationForm from './RegistrationForm';
import '../styles/registration-form.css';

export function RegistrationPage() {
    return (
        <div className="registration-page">
            <h1>Sign Up</h1>
            <p>What's Cooking Tonight?</p>
            <RegistrationForm />
        </div>
    );
}

export default RegistrationPage;
