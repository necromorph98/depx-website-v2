export default function GlobalTestimonial({ block, dataBinding }) {
    return (
        <section className="testimonial">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 mx-auto text-center mb-5">
                        <div className="testimonial-content">
                            <h2>{block.title} <span> {block.title_suffix}</span></h2>
                            <p>{block.description}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {block.slider.map((slide, i) => (
                        <div className="col-lg-4 col-md-6 mb-5" key={i}>
                            <div className="testimonial-item">
                                <div className="testimonial-item-person">
                                    <div className="thumb">
                                        <img
                                            src={slide.image_path}
                                            alt="logo"
                                            className="img-fluid"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>{slide.author}</h3>
                                        <p>{slide.designation}</p>
                                    </div>
                                </div>
                                <p>{slide.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}