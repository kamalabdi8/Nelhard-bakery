import React, { useState } from 'react';
import './Contact.css';
import { ContactInfo } from '../components/ContactInfo';
import { Form } from 'react-bootstrap';
import { Reviews } from '../components/Reviews';

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState('');
    const [comments, setComments] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setWelcomeMessage(Welcome ${firstName}!);
    };

    return (
        <div className='contact-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Contact</h1>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <ContactInfo />
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='first-name'>First Name</Form.Label>
                                    <Form.Control
                                        type='text'
                                        id='first-name'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='last-name'>Last Name</Form.Label>
                                    <Form.Control
                                        type='text'
                                        id='last-name'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='email-address'>Email Address</Form.Label>
                                    <Form.Control
                                        type='email'
                                        id='email-address'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
                                    <Form.Control
                                        type='tel'
                                        id='phone-number'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='date'>Date</Form.Label>
                                    <Form.Control
                                        type='date'
                                        id='date'
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='guests-number'>Number Of Guests</Form.Label>
                                    <Form.Control
                                        type='number'
                                        id='guests-number'
                                        value={guests}
                                        onChange={(e) => setGuests(e.target.value)}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='comments'>Comments</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    id='comments'
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                />
                            </Form.Group>

                            <button type='submit' className='btn btn-success btn-lg'>
                                Submit
                            </button>
                        </Form>
                    </div>
                </div>
            </div>

            {/* Display the welcome message if it exists */}
            {welcomeMessage && (
                <div className="welcome-message mt-5 text-center">
                    <h2>{welcomeMessage}</h2>
                </div>
            )}

            <div className='bg-dark text-light py-5'>
                <Reviews />
            </div>
        </div>
    );
}

export default Contact;