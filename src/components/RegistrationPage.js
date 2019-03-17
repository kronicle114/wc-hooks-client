import React from 'react';
import RegistrationForm from './RegistrationForm';
import '../styles/registration-form.css';

export function RegistrationPage() {
    return (
        <div className="registration-page">
            <h1>Sign Up</h1>
            <p>Start using this template</p>
            <RegistrationForm />
        </div>
    );
}

export default RegistrationPage;
