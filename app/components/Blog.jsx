import React from 'react'

const Blog = () => {
    return (
        <section className="blog" id="blog">
            <h1 className="heading">our blogs</h1>
            <div className="box-container">
                <div className="box">
                    <div className="image">
                        <img src="images/blog-1.jpg" alt="" />
                    </div>
                    <div className="content">
                        <a href="#" className="link">
                            Tips
                        </a>
                        <div className="icons">
                            <a href="#">
                                {" "}
                                <i className="fas fa-calendar" /> 04th september, 2022{" "}
                            </a>
                            <a href="#">
                                {" "}
                                <i className="fas fa-user" /> by admin
                            </a>
                        </div>
                        <h3>Revitalize your smile</h3>
                        <p>
                            Unlock the secrets to a brilliant smile. Discover the science behind maintaining a bright and healthy smile that lasts a lifetime.
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src="images/blog-2.jpg" alt="" />
                    </div>
                    <div className="content">
                        <a href="#" className="link">
                            Transformation
                        </a>
                        <div className="icons">
                            <a href="#">
                                {" "}
                                <i className="fas fa-calendar" /> 12th december, 2022{" "}
                            </a>
                            <a href="#">
                                {" "}
                                <i className="fas fa-user" /> by admin
                            </a>
                        </div>
                        <h3>Metamorphosis</h3>
                        <p>
                            Embark on a journey of smile makeovers. Explore real-life stories, before-and-after images, and the artistry involved in cosmetic dentistry.
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src="images/blog-3.jpg" alt="" />
                    </div>
                    <div className="content">
                        <a href="#" className="link">
                            Wellness
                        </a>
                        <div className="icons">
                            <a href="#">
                                {" "}
                                <i className="fas fa-calendar" /> 04th August, 2022{" "}
                            </a>
                            <a href="#">
                                {" "}
                                <i className="fas fa-user" /> by admin
                            </a>
                        </div>
                        <h3>Harmony</h3>
                        <p>
                            Explore the connection between mindfulness and oral health. Learn how a holistic approach positively impacts your well-being and oral hygiene routine.
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Blog