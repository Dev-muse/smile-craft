import React from 'react'

const About = () => {
    return (
        <section className="about" id="about">
            <h1 className="heading"> about us </h1>
            <div className="row">
                <div className="image">
                    <img src="images/about.webp" alt="" />
                </div>
                <div className="content">
                    <h3>Crafting Bright Smiles, One Visit at a Time</h3>
                    <p>
                        At SmileCraft Dentistry, we are more than just a dental practice – we are your partners in achieving and maintaining optimal oral health.
                    </p>
                    <p>
                        With a decade of expertise in the field, our dedicated team combines skill and compassion to deliver personalized dental care. Our mission is to craft not just healthy smiles but lasting relationships with our patients.
                    </p>

                    <p> From routine check-ups to cosmetic dentistry, we prioritize your comfort and well-being. Discover the difference of SmileCraft Dentistry, where precision meets care for a brighter, healthier smile.</p>
                </div>
            </div>
        </section>

    )
}

export default About