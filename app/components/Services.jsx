const serviceData = [
    {
        title: ' Online Schedule',
        id: 1,
        text: "Seamless appointments at your fingertips! With our Online Schedule service, booking your dental visits is quick and convenient. Take control of your time and prioritize your oral health effortlessly. Say goodbye to waiting – embrace the ease of scheduling appointments online with SmileCraft Dentistry."
        ,
        img: 'images/services-1.webp'
    },
    {
        id: 2,
        title: 'Cosmetic Feeling',
        text: "Transform your smile and boost your confidence with our Cosmetic Feeling services. Whether it's teeth whitening, veneers, or smile makeovers, our skilled team at SmileCraft Dentistry specializes in enhancing your natural beauty. Discover the joy of a radiant and captivating smile that reflects the best version of you.",
        img: 'images/services-2.webp'
    },
    {
        id: 3,
        title: 'Oral Hygiene Experts',
        text: "Your oral health is our expertise! At SmileCraft Dentistry, our Oral Hygiene Experts are dedicated to ensuring your gums and teeth are in top condition. From preventive care to periodontal treatments, trust us to provide comprehensive oral hygiene solutions tailored to your unique needs. Your journey to a healthier smile starts here.",
        img: 'images/services-3.webp'
    },


]
const ServiceContent = ({ service }) => {
    const { img, title, text } = service
    return (
        <div className="box">
            <img src={img} alt={img} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
const Services = () => {
    return (
        <section className="services" id="services">
            <h1 className="heading"> our services</h1>
            <div className="box-container">

                {
                    serviceData.map((service) => {
                        return (
                            <ServiceContent
                                key={service.id} service={service} />
                        )
                    })
                }

            </div>
        </section>

    )
}

export default Services