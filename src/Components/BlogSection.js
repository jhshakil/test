import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
    useEffect(() => {
        let device_width = window.innerWidth;
        let tHero = gsap.context(() => {
            gsap.set(".blog__animation .blog__item-2", { x: 50, opacity: 0 });

            if (device_width < 1023) {
                const blogList = gsap.utils.toArray(".blog__animation .blog__item-2")
                blogList.forEach((item, i) => {
                    let blogTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start: "top center+=200",
                        }
                    })
                    blogTl.to(item, {
                        x: 0,
                        opacity: 1,
                        ease: "power2.out",
                        duration: 1.5,
                    })
                })
            }
            else {
                gsap.to(".blog__animation .blog__item-2", {
                    scrollTrigger: {
                        trigger: ".blog__animation .blog__item-2",
                        start: "top center+=300",
                        markers: false
                    },
                    x: 0,
                    opacity: 1,
                    ease: "power2.out",
                    duration: 2,
                    stagger: {
                        each: 0.3
                    }
                })
            }
        })
        return () => tHero.revert();
    }, [])
    return (
        <div>
            <section className="blog__area-2 blog__animation">
                <div className="container g-0 pt-150 pb-110">
                    <div className="row ">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                            <div className="sec-title-wrapper">
                                <h2 className="sec-title title-anim">Updated Journal</h2>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-4">
                            <div className="sec-text text-anim">
                                <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-4">
                            <div className="sec-btn btn_wrapper">
                                <a href="blog.html" className="wc-btn-pink btn-hover btn-item"><span></span> Read <br />all journal <i
                                    className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                            <article className="blog__item-2">
                                <div className="blog__img-wrapper">
                                    <a href="blog-details.html">
                                        <div className="img-box">
                                            <img className="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="Blog Thumbnail" />
                                            <img className="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="BLog Thumbnail" />
                                        </div>
                                    </a>
                                </div>
                                <h4 className="blog__meta-2"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                                <h5><a href="blog-details.html" className="blog__title-2">Ways of lying to yourself about your
                                    new relationship.</a></h5>
                            </article>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                            <article className="blog__item-2">
                                <div className="blog__img-wrapper">
                                    <a href="blog-details.html">
                                        <div className="img-box">
                                            <img className="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="Blog Thumbnail" />
                                            <img className="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="BLog Thumbnail" />
                                        </div>
                                    </a>
                                </div>
                                <h4 className="blog__meta-2"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                                <h5><a href="blog-details.html" className="blog__title-2">How to manage a talented and
                                    successful de sign team</a></h5>
                            </article>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                            <article className="blog__item-2">
                                <div className="blog__img-wrapper">
                                    <a href="blog-details.html">
                                        <div className="img-box">
                                            <img className="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="Blog Thumbnail" />
                                            <img className="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="BLog Thumbnail" />
                                        </div>
                                    </a>
                                </div>
                                <h4 className="blog__meta-2"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                                <h5><a href="blog-details.html" className="blog__title-2">How to bring fold to your startup
                                    company with Axtra</a></h5>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogSection;