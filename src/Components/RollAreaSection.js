import React, { useEffect } from 'react';

const RollAreaSection = () => {
    useEffect(() => {
        const Swiper = window.Swiper;

        new Swiper(".roll__slider", {
            loop: true,
            freemode: true,
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            allowTouchMove: false,
            speed: 2000,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 3,
                },
                800: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1300: {
                    slidesPerView: 5,
                },
                1900: {
                    slidesPerView: 8,
                },
            },
        });
    }, [])

    return (
        <div>
            <section className="roll__area-2">
                <div className="swiper roll__slider">
                    <div className="swiper-wrapper roll__wrapper">
                        <div className="swiper-slide roll__slide">
                            <h2>Development</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Studio</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Strategy</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Branding</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Agency</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>typhography</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Design</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Interaction</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Element</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>DIgital SOlution</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Strategy</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Branding</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Agency</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Interaction</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>DIgital SOlution</h2>
                        </div>
                    </div>
                </div>
            </section>


            <section className="roll__area-3">
                <div dir="rtl" className="swiper roll__slider">
                    <div className="swiper-wrapper roll__wrapper">
                        <div className="swiper-slide roll__slide ">
                            <h2>Development</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Studio</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Strategy</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Branding</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Agency</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>typhography</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Design</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Interaction</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Element</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>DIgital SOlution</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Strategy</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Branding</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Agency</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>Interaction</h2>
                        </div>
                        <div className="swiper-slide roll__slide">
                            <h2>DIgital SOlution</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RollAreaSection;