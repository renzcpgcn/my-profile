import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
     });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({  ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(
            '/submission-success',
            {state: formData,
        });
    };
    
    return (
        <div className="container mt-5">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                        className="form-control" 
                        id="message" 
                        name="message" 
                        rows="3" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );


    // return (
    //     <>
    //     <div className="container mt-5">
    //         <form id="contactForm" action="" method="post">
    //             <label for="name">Name:</label>
    //             <input type="text" id="name" class="name"></input>
    //             <label for="email">Email:</label>
    //             <input type="text" id="email" class="email"></input>
    //             <label for="message">Message:</label>
    //             <textarea name="message" id="message" class="message"></textarea><br></br>
    //             <input type="submit" class="submit" value="Submit"></input>
    //         </form>
    //     </div>
    //     </>
    // );
};

export default Contact;

