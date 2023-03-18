import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
    let device_width = window.innerWidth;
    useEffect(() => {
        const SplitText = window.SplitText;
        let tHero = gsap.context(() => {
            if (device_width < 1023) {
                gsap.set(".animation__feature2 .feature__item", { opacity: 0, y: 60 })
                let featured2Timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".animation__feature2 .feature__item",
                        start: "top center+=200"
                    }
                })
                featured2Timeline.to(".animation__feature2 .feature__item", {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power4.out"
                })
            }
            else {
                gsap.set(".animation__feature2 .feature__item", { opacity: 0, y: 40 })
                gsap.to(".animation__feature2 .feature__item", {
                    scrollTrigger: {
                        trigger: ".animation__feature2",
                        start: "top center+=200"
                    },
                    opacity: 1,
                    y: 0,
                    duration: 2,
                    ease: "power4.out",
                    stagger: 0.3
                })
            }
        })
        return () => tHero.revert();
    }, [])
    return (
        <div>
            <section className="feature__area-2 pt-130">
                <div className="feature__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                                <div className="sec-title-wrapper">
                                    <h2 className="sec-title title-anim">Features are more helpful to create creative shapes as well.</h2>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                                <div className="feature__text text-anim">
                                    <p>We are constantly rethinking the future by creating the next generation of products, brands and
                                        services from a hybrid perspective. The unthinkable today becomes inevitable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feature__btm">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="feature__list animation__feature2">
                                    <div className="feature__item">
                                        <img src="assets/imgs/feature/icon/1.png" alt="Feature Icon" />
                                        <h3 className="feature__title">Branding</h3>
                                        <p>Having these marketplace to your branded skilled team of designers and developers who
                                            embracement
                                            perfection.</p>
                                    </div>
                                    <div className="feature__item">
                                        <img src="assets/imgs/feature/icon/2.png" alt="Feature Icon" />
                                        <h3 className="feature__title">Optimum</h3>
                                        <p>Brand identity design a the key to success whether you breath rebranding an existing business
                                            or
                                            creating a business</p>
                                    </div>
                                    <div className="feature__item">
                                        <img className="" src="assets/imgs/feature/icon/3.png" alt="Feature Icon" />
                                        <h3 className="feature__title">Thinking</h3>
                                        <p>Creative typography plays the big role to pull off this trending more effectively with the
                                            thinking use a thicker point</p>
                                    </div>
                                    <div className="feature__item">
                                        <img src="assets/imgs/feature/icon/4.png" alt="Feature Icon" />
                                        <h3 className="feature__title">Execution</h3>
                                        <p>Stricky with multiple shades of the colours. However, this type of alone can look awesome
                                            forever
                                            an online business</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;