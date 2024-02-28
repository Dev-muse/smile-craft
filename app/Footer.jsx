import React from 'react'

const Footer = () => {
    return (
        <section class="footer">

            <div class="box-container">

                <div class="box">
                    <h3>address</h3>
                    <p>123 Smile Street, Cityville, State, 54321</p>
                    <div class="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                        <a href="#" class="fab fa-instagram"></a>
                    </div>
                </div>

                <div class="box">
                    <h3>e-mail</h3>
                    <a href="mailto:info@smilecraftdentistry.com" class="link">info@smilecraftdentistry.com</a>
                </div>

                <div class="box">
                    <h3>call us</h3>
                    <p>+61 (0) 3 9876 5432
                    </p>
                </div>

                <div class="box">
                    <h3>opening hours</h3>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 3:00 PM
                    </p>
                </div>

            </div>

            <div class="credit">created by <a href='rapidmuse.com' target='_blank'>Rapidmuse</a> | all rights reserved!</div>

        </section >

    )
}

export default Footer