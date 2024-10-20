import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmissionSuccess = () => {
    const location = useLocation();
    const { name, email, message } = location.state || {};

    return (
        <div className="container mt-5">
            <h1>Thank You, {name}!</h1>
            <p>Your message has been sent successfully.</p>
            <h2>Submitted Information:</h2>
            <ul>
                <li><strong>Name:</strong> {name}</li>
                <li><strong>Email:</strong> {email}</li>
                <li><strong>Message:</strong> {message}</li>
            </ul>
        </div>
    );
};

export default SubmissionSuccess;