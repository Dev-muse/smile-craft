
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';


const Team = () => {
    return (
        <section className="team" id="team">
            <h1 className="heading">Our team</h1>

            <Swiper
                loop={true}
                spaceBetween={20}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                slidesPerView={3}
                grabCursor={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide className="slide">
                    <div className="image">
                        <img src="images/team-1.jpg" alt="" />
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f" />
                            <a href="#" className="fab fa-twitter" />
                            <a href="#" className="fab fa-instagram" />
                            <a href="#" className="fab fa-linkedin" />
                        </div>
                    </div>
                    <div className="content">
                        <h3>john lacy</h3>
                        <span>Senior Dental surgeon</span>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="image">
                        <img src="images/team-3.jpg" alt="" />
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f" />
                            <a href="#" className="fab fa-twitter" />
                            <a href="#" className="fab fa-instagram" />
                            <a href="#" className="fab fa-linkedin" />
                        </div>
                    </div>
                    <div className="content">
                        <h3>Stacy lacy</h3>
                        <span>Dental surgeon</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="image">
                        <img src="images/team-2.jpg" alt="" />
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f" />
                            <a href="#" className="fab fa-twitter" />
                            <a href="#" className="fab fa-instagram" />
                            <a href="#" className="fab fa-linkedin" />
                        </div>
                    </div>
                    <div className="content">
                        <h3>Suzie summers</h3>
                        <span>Dental Assistant</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="image">
                        <img src="images/team-4.jpg" alt="" />
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f" />
                            <a href="#" className="fab fa-twitter" />
                            <a href="#" className="fab fa-instagram" />
                            <a href="#" className="fab fa-linkedin" />
                        </div>
                    </div>
                    <div className="content">
                        <h3>Peter Langdon</h3>
                        <span>Dental assistant</span>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>

    )
}

export default Team