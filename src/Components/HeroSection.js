import React from 'react';


const HeroSection = () => {
    return (
        <div>
            <section className="hero__area-2">
                <div className="hero__inner-2">
                    <div className="sec-title-wrapper">
                        <h2 className="sec-title-3 bg-shape">We Design <br />Unique</h2>
                        <h2 className="sec-title-3">Digital <br />Experience</h2>
                    </div>
                    <div className="hero__text-2">
                        <p>Thinking, writing and planning with brand are just a of what we do. For
                            more than 10 years, It’s more
                            competitive space for agency.</p>
                        <div className="hero__button btn_wrapper">
                            <a href="service.html" className="wc-btn-pink btn-hover btn-item"><span></span>
                                Explore <br />our services <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="hero2-shape">
                    <img src="assets/imgs/bg/arrow-long.png" alt="BG Shape" />
                </div>
            </section>
        </div>
    );
};

export default HeroSection;