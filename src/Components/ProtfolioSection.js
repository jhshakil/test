import React, { useEffect } from 'react';

const ProtfolioSection = () => {
    useEffect(() => {
        const Swiper = window.Swiper;

        new Swiper(".portfolio__slider-2", {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (i, className) {
                    return `
        <button class="${className}">
          <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
        </button>
      `;
                }
            }
        });
    }, [])
    return (
        <div>
            <section className="portfolio__area-2">
                <div className="container g-0 line pt-100 pb-140">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="sec-title-wrapper text-anim">
                                <h2 className="sec-title-3">Selected <span>Projects</span></h2>
                                <p className="sec-text">Worked with global brands & agency at the
                                    intersection of flat design and digital
                                    technology.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper portfolio__slider-2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="portfolio__slide-2">
                                <div className="slide-img">
                                    <a href="portfolio-details.html"><img src="assets/imgs/portfolio/2/1.jpg" alt="Portfolio Image" /></a>
                                </div>
                                <div className="slide-content">
                                    <h2 className="sec-title"> <a href="portfolio-details.html">Lionpro <span>Agency</span></a>
                                    </h2>
                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                        both
                                        ourselves</p>
                                    <div className="btn-common-wrap">
                                        <a href="portfolio-details.html" className="btn-common">View details <i
                                            className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="portfolio__slide-2">
                                <div className="slide-img">
                                    <a href="portfolio-details.html"><img src="assets/imgs/portfolio/2/2.jpg" alt="Portfolio Image" /></a>
                                </div>
                                <div className="slide-content">
                                    <h2 className="sec-title"><a href="portfolio-details.html">crodyflw <span>Website</span></a>
                                    </h2>
                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                        both
                                        ourselves</p>
                                    <div className="btn-common-wrap">
                                        <a href="portfolio-details.html" className="btn-common">View details <i
                                            className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="portfolio__slide-2">
                                <div className="slide-img">
                                    <a href="portfolio-details.html"><img src="assets/imgs/portfolio/2/3.jpg" alt="Portfolio Image" /></a>
                                </div>
                                <div className="slide-content">
                                    <h2 className="sec-title"> <a href="portfolio-details.html">developers
                                        <span>digital</span></a></h2>
                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                        both
                                        ourselves</p>
                                    <div className="btn-common-wrap">
                                        <a href="portfolio-details.html" className="btn-common">View details <i
                                            className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="portfolio__slide-2">
                                <div className="slide-img">
                                    <a href="portfolio-details.html"><img src="assets/imgs/portfolio/2/4.jpg" alt="Portfolio Image" /></a>
                                </div>
                                <div className="slide-content">
                                    <h2 className="sec-title"> <a href="portfolio-details.html">Lionpro
                                        <span>marketeers</span></a></h2>
                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                        both
                                        ourselves</p>
                                    <div className="btn-common-wrap">
                                        <a href="portfolio-details.html" className="btn-common">View details <i
                                            className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="portfolio__slide-2">
                                <div className="slide-img">
                                    <a href="portfolio-details.html"><img src="assets/imgs/portfolio/2/5.jpg" alt="Portfolio Image" /></a>
                                </div>
                                <div className="slide-content">
                                    <h2 className="sec-title"> <a href="portfolio-details.html">Lionpro <span>Agency</span></a>
                                    </h2>
                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                        both
                                        ourselves</p>
                                    <div className="btn-common-wrap">
                                        <a href="portfolio-details.html" className="btn-common">View details <i
                                            className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio__slider-2-pagination--">
                        <div className="swiper-pagination circle-pagination right"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProtfolioSection;