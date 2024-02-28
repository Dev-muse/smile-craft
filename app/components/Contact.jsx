'use client';

import React, { useState } from 'react'

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(!formSubmitted)
    }
    return (
        <section className="contact" id="contact">
            <h1 className="heading">Book an appointment</h1>
            {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <span>your name :</span>
                    <div className="inputBox">
                        <input required type="text" placeholder="first name" />
                        <input required type="text" placeholder="last name" />
                    </div>
                    <span>your email :</span>
                    <input required type="email" placeholder="enter your email" className="box" />
                    <span>your number :</span>
                    <input required type="number" placeholder="enter your number" className="box" />
                    <span>appointment date :</span>
                    <input required type="datetime-local" className="box" />
                    <input type="submit" defaultValue="order now" className="btn" />
                </form>) : (<h3 className='success'>Booking confirmed!, we'll get back to you.</h3>)}
        </section>

    )
}

export default Contact