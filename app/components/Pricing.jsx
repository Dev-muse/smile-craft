import React from 'react'

const Pricing = () => {
    return (
        <section className="pricing" id="pricing">
            <h1 className="heading">pricing plan</h1>
            <div className="box-container">
                <div className="box">
                    <h3 className="title">basic</h3>
                    <div className="price">
                        <span className="currency">$</span>
                        <span className="amount">199.99 </span>
                        <span className="duration"> /month</span>
                    </div>
                    <ul>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Annual Check-ups
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Basic Cleaning
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Cavity Inspection
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> General Consultation
                        </li>
                    </ul>
                    <a href="#" className="btn">
                        Learn More{" "}
                    </a>
                </div>
                <div className="box active">
                    <h3 className="title">standard</h3>
                    <div className="price">
                        <span className="currency">$</span>
                        <span className="amount">299.99 </span>
                        <span className="duration"> /month</span>
                    </div>
                    <ul>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Bi-Annual Check-ups
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Professional Cleaning
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Cavity Inspection
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Cosmetic Dentistry Consultation
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Emergency Care Coverage
                        </li>
                    </ul>
                    <a href="#" className="btn">
                        Learn More{" "}
                    </a>
                </div>
                <div className="box">
                    <h3 className="title">premium</h3>
                    <div className="price">
                        <span className="currency">$</span>
                        <span className="amount">499.99</span>
                        <span className="duration"> /month</span>
                    </div>
                    <ul>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Unlimited Routine Check-ups
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Professional Cleaning & Whitening
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Comprehensive Cosmetic Dentistry
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" /> Periodic Oral Hygiene Sessions
                        </li>
                        <li>
                            {" "}
                            <i className="fas fa-check" />Emergency Care Coverage
                        </li>
                    </ul>
                    <a href="#" className="btn">
                        Learn More{" "}
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Pricing