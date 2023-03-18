import React, { useEffect, useState } from 'react';

const ScrollTop = () => {
    const [scrollTop, setScrollTop] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollTop(position);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])
    let scroll_top = document.getElementById("scroll_top");
    if (scroll_top) {
        if (scrollTop > 50) {
            scroll_top.style.display = "block";
        } else {
            scroll_top.style.display = "none";
        }
    }
    const goTop = () => {
        setScrollTop(0)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            {/* <div className="has-smooth" id="has_smooth"></div> */}
            <button id="scroll_top" onClick={goTop} className="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>
        </div>
    );
};

export default ScrollTop;