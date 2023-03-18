import FooterSection from './Components/Common/FooterSection';
import HeaderSection from './Components/Common/HeaderSection';
import Loader from './Components/Common/Loader';
import ScrollTop from './Components/Common/ScrollTop';
import Switcher from './Components/Common/Switcher';
import Home from './Page/Home';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const SplitText = window.SplitText;
    const heading_title = new SplitText(".sec-title-3", { type: "chars" })
    const heading_char = heading_title.chars
    $('.btn-hover').on('mouseenter', function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find('span').css({
        top: y,
        left: x
      });
    });

    $('.btn-hover').on('mouseout', function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find('span').css({
        top: y,
        left: x
      });
    });
    $(document).ready(function () {
      $('.preloader').hide();
    });
    $("[data-background").each(function () {
      $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });
    let tHero = gsap.context(() => {
      gsap.from(heading_char, {
        rotate: 20,
        ease: "back.out",
        opacity: 0,
        duration: 2,
        stagger: 0.1
      });
      gsap.from(".hero2-shape img", {
        xPercent: -100,
        duration: 1,
      }, '-=6.5')
      gsap.from(".hero__text-2 p", {
        opacity: 0,
        x: -30,
        duration: 1.5
      }, '-=5')

      var hero_bts = document.querySelector(".hero__text-2 .btn_wrapper")
      if (hero_bts) {
        var hero_btn = document.querySelector(".hero__text-2 .btn_wrapper")
      }
      else {
        var hero_btn = document.querySelector(".hero__text-2 #btn_wrapper")
      }
      gsap.from(hero_btn, {
        opacity: 0,
        y: -70,
        ease: "bounce",
        duration: 1.5
      }, '-=5')

      gsap.from(".hero__button", {
        scrollTrigger: {
          trigger: ".hero__button",
          start: "top center+=150",
          markers: false,
        },
        opacity: 0,
        y: -70,
        ease: "bounce",
        duration: 1.5,
      })

      let splitTitleLines = gsap.utils.toArray(".title-anim");

      splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
      });
      let splitTextLines = gsap.utils.toArray(".text-anim p");

      splitTextLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            duration: 2,
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
          }
        });

        const itemSplittedText = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplittedText.split({ type: "lines" })
        tl.from(itemSplittedText.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
      });

      let arr1 = gsap.utils.toArray("#btn_wrapper")
      let arr2 = gsap.utils.toArray(".btn_wrapper")
      const all_buttons = arr1.concat(arr2);

      all_buttons.forEach((btn) => {
        if (!(btn.classList.contains("hero__button"))) {
          gsap.from(btn, {
            scrollTrigger: {
              trigger: btn,
              start: "top center+=150",
              markers: false,
            },
            opacity: 0,
            y: -70,
            ease: "bounce",
            duration: 1.5,
          })
        }
      })

    })
    return () => tHero.revert();
  }, [])
  return (
    <div className='dark'>
      <div className="cursor1"></div>
      <div className="cursor2"></div>


      <Loader />
      <Switcher />
      <ScrollTop />
      <HeaderSection />
      <Home />
      {/* <FooterSection /> */}
    </div>
  );
}

export default App;
