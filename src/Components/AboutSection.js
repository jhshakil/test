import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
    useEffect(() => {
        let device_width = window.innerWidth;
        const ScrollSmoother = window.ScrollSmoother;
        let tHero = gsap.context(() => {
            let skewSetter = gsap.quickTo(".portfolio__item-5 img", "skewY"),
                clamp = gsap.utils.clamp(-15, 15);
            ScrollSmoother.create({
                smooth: 1.35,
                effects: device_width < 1025 ? false : true,
                smoothTouch: false,
                normalizeScroll: false,
                ignoreMobileResize: true,
                onUpdate: self => skewSetter(clamp(self.getVelocity() / -80)),
                onStop: () => skewSetter(0)
            });
            gsap.to(".about__img-2 img", {
                scrollTrigger: {
                    trigger: ".about__img-2 img",
                    start: "top bottom",
                    markers: false,
                    scrub: 1,
                    end: "bottom center"
                },
                scale: 1.15,
                duration: 1,
            })
        })
        return () => tHero.revert();
    }, [])
    return (
        <div>
            <section className="about__area-2">
                <div className="container pt-130 pb-110 section-area">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="sec-title-wrapper">
                                <h2 className="sec-title title-anim">We design and develop
                                    outstanding Digital <br /> Products
                                    and digital-first Brands.</h2>
                            </div>
                            <div className="sec-text-wrapper">
                                <div className="sec-text text-anim">
                                    <p>We help brands stand out through powerful, elegant visual design. Our design philosophy is shaped
                                        by our experience growing up at our father’s bookbindery. Surrounded by the highest-quality
                                        materials and turn-of-the-century machines, we observed the art of true craftsmanship firsthand.
                                    </p>
                                </div>
                                <div className="sec-btn btn_wrapper">
                                    <a className="wc-btn-pink btn-hover btn-item" href="about.html"><span></span> Explore Us <i
                                        className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about__img-2 pb-130 section-area">
                    <img src="assets/imgs/about/2/1.jpg" alt="About Image" data-speed="0.2" />
                </div>

                <div className="container pb-140 section-area">
                    <div className="row">
                        <div className="col-xxl-12">
                            <h2 className="brand__title-2 title-anim">We worked with global largest brands
                            </h2>
                            <div className="brand__list-2">
                                <div className="brand__item-2 fade_bottom">
                                    <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                </div>
                                <div className="brand__item-2 fade_bottom">
                                    <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                </div>
                                <div className="brand__item-2 fade_bottom">
                                    <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                </div>
                                <div className="brand__item-2 fade_bottom">
                                    <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                </div>
                                <div className="brand__item-2 fade_bottom">
                                    <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                                </div>
                                <div className="brand__item-2 fade_bottom">
                                    <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;