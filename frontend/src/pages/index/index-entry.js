require("./../../global/js/global-entry")
// require("./../blind/blind-entry")
require("./../../plugins/nav")
require("./../../plugins/animation")
require("./../../plugins/animation-tabs")
require("./../../plugins/blind-tab")
require("./../../plugins/main")
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import ScrollSmoother from "./../../plugins/ScrollSmoother.min"

import "./index.scss"
import "./animation.css"
import "./app.css"
import "./home.css"
import "./nav.css"
import "./style.css"
// import { startBlindPage } from '../blind/blind-entry';

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
// console.log(CSSRulePlugin);
/**
 * outImageUrl - change image url in svg (if image save with link)
 * needContent - return content to js file
 * par - preserveAspectRatio attribute for svg
 * class - class for svg <svg class=""></svg>
 * ./img/test_svg/test.svg - path to svg in src
 */
let svgContent = require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class='svg_custom mx-auto'!./img/ddotsLogo1.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class='aboutus_image_size'!./img/ddotsLogo2.svg")
// function delay(n) {
//     n = n || 3000;
//     return new Promise((done) => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }

// function pageTransition() {
//     var tl = gsap.timeline();
//     tl.to(".loading-screen", {
//         duration: 1.2,
//         width: "100%",
//         left: "0%",
//         ease: "Expo.easeInOut",
//     });

//     tl.to(".loading-screen", {
//         duration: 1,
//         width: "100%",
//         left: "100%",
//         ease: "Expo.easeInOut",
//         delay: 0.3,
//     });
//     tl.set(".loading-screen", { left: "-100%" });

// }

// function contentAnimation() {
//     var tl = gsap.timeline();
//     tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
// }

// $(function () {
//     barba.init({
//         sync: true,

//         transitions: [
//             {
//                 async leave(data) {
//                     const done = this.async();

//                     pageTransition();
//                     await delay(1000);
//                     done();
//                     console.log('1');
//                     // startBlindPage()

//                 },

//                 async enter(data) {
//                     // contentAnimation();
//                     console.log('2');
//                     // startBlindPage()
//                     // var element = document.querySelector('[data-barba="container"]');

//                     // if (element) {
//                     // startBlindPage()
//                     console.log('CHANGED');
//                     // }
//                 },

//                 async once(data) {
//                     // contentAnimation();
//                     console.log('3');
//                     startBlindPage()

//                 },
//             },
//         ],
//     });
// });

function startHomePage(params) {
    if (document.body.classList.contains('home-page')) {
        gsap.set('body', { duration: 1, ease: 'none', opacity: 1 })

        gsap.to('.wrapper', { opacity: 1 })
        gsap.set('.banner', { scale: 1, filter: 'blur(80px)' })
        gsap.set('.svg_custom', { y: '65%' })
        gsap.set('.banner-text', { y: '85%', autoAlpha: 0 })
        gsap.set('.banner-btn', { y: '85%', opacity: 0 })

        let startPage = gsap.timeline({})
            .to('.banner', { duration: 1, scale: 1, filter: 'blur(0px)' })
            .to('.svg_custom', { duration: 1, y: 0, ease: 'back.inOut(10)' }, ">")
            .to('.banner-text', { duration: 1, y: 0, autoAlpha: 0.7, ease: 'back.inOut(10)' }, "<")
            .to('.banner-btn', { duration: 1, y: 0, opacity: 1, ease: 'back.inOut(10)' }, "<")

        gsap.to('#scanFingerGrey3 >*', { duration: .1, opacity: 0, repeat: -1, yoyo: true, stagger: { each: .1, from: 'random' }, ease: 'none', transformOrigin: '50% 50%' })
        gsap.to('#scanFingerGrey4 >*', { duration: .1, opacity: 0, repeat: -1, yoyo: true, stagger: { each: .1, from: 'random' }, ease: 'none', transformOrigin: '50% 50%' })
        gsap.to('#scanFingerGrey5 >*', { duration: .1, delay: .7, opacity: 0, repeat: -1, yoyo: true, stagger: { each: .1, from: 'random' }, ease: 'none', transformOrigin: '50% 50%' })


        let paralaxLeft = gsap.utils.toArray('.paralax-effect_left')
        paralaxLeft.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 150, x: -100, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, x: 0, opacity: 1, filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '50% 80%',
                    end: '50% 80%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let paralaxRight = gsap.utils.toArray('.paralax-effect_right')
        paralaxRight.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 150, x: 100, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, x: 0, opacity: 1, filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '65% 80%',
                    end: '65% 80%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })

        let paralaxCenter2 = gsap.utils.toArray('.paralax-effect_center2')
        paralaxCenter2.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 150, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, opacity: 1, filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: '.aplication-block',
                    start: '0% 90%',
                    end: '0% 90%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let paralaxLeft2 = gsap.utils.toArray('.paralax-effect_left2')
        paralaxLeft2.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 150, x: -100, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, x: 0, opacity: 1, filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: '.aplication-block',
                    start: '20% 90%',
                    end: '20% 90%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let paralaxRight2 = gsap.utils.toArray('.paralax-effect_right2')
        paralaxRight2.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 150, x: 100, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, x: 0, opacity: 1, filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: '.aplication-block',
                    start: '20% 90%',
                    end: '20% 90%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let paralaxCenter3 = gsap.utils.toArray('.paralax-effect_center3')
        paralaxCenter3.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 150, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, opacity: 1, filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '0% 90%',
                    end: '0% 90%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let paralaxCenter4 = gsap.utils.toArray('.paralax-effect_center4')
        paralaxCenter4.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 150, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, opacity: 1, filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '-80% 90%',
                    end: '-80% 90%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let paralaxLeft3 = gsap.utils.toArray('.paralax-effect_left3')
        paralaxLeft3.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 150, x: -100, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, x: 0, opacity: 1, filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '-180% 90%',
                    end: '-180% 90%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let paralaxRight3 = gsap.utils.toArray('.paralax-effect_right3')
        paralaxRight3.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 150, x: 100, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, x: 0, opacity: 1, filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '20% 90%',
                    end: '20% 90%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })

        // let scale = gsap.utils.toArray('.scale')
        // scale.forEach(item => {
        //     gsap.fromTo(item, { duration: 2.2, autoAlpha: 0, scale: 2.4, y: 420, filter: 'blur(80px)', ease: 'sine.inOut' }, {
        //         duration: 2.2, autoAlpha: 1, scale: 1, filter: 'blur(0px)',
        //         y: 0, ease: 'sine.inOut',
        //         scrollTrigger: {
        //             trigger: item,
        //             start: '50% 70%',
        //             end: '50% 70%',
        //             scrub: 2,
        //             markers: true,
        //             invalidateOnRefresh: true,
        //         }
        //     })
        // })
        // let scale2 = gsap.utils.toArray('.scale2')
        // scale2.forEach(item => {
        //     gsap.fromTo(item, { duration: 2.2, autoAlpha: 0, scale: 1.4, y: 420, filter: 'blur(80px)', ease: 'sine.inOut' }, {
        //         duration: 2.2, autoAlpha: 1, scale: 1, filter: 'blur(0px)',
        //         y: 0, ease: 'sine.inOut',
        //         scrollTrigger: {
        //             trigger: item,
        //             start: '50% 70%',
        //             end: '50% 70%',
        //             scrub: 2,
        //             markers: false,
        //             invalidateOnRefresh: true,
        //         }
        //     })
        // })
        let scale3 = gsap.utils.toArray('.scale3')
        scale3.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 150, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, opacity: 1, filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '0% 90%',
                    end: '0% 90%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let roadLine = gsap.utils.toArray('.roadmap_line')
        roadLine.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 100, opacity: 0, ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, opacity: 1,
                y: 0, ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '60% 70%',
                    end: '60% 70%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let cLeft = gsap.utils.toArray('.circle-left')
        cLeft.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, left: '50%', ease: 'sine.inOut' }, {
                duration: 2.2, left: '0%',
                y: 0, ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '50% 70%',
                    end: '50% 70%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        // gsap.set(CSSRulePlugin.getRule('.roadmap_line::after'), {
        //     duration: 2.2,
        //     cssRule: {
        //         scaleX: 0,
        //     },
        //     ease: 'sine.inOut',
        // });
        let cRight = gsap.utils.toArray('.circle-right')
        cRight.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, left: '50%', ease: 'sine.inOut' }, {
                duration: 2.2, left: '100%',
                y: 0, ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '50% 70%',
                    end: '50% 70%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
            //     gsap.to(CSSRulePlugin.getRule('.roadmap_line::after'), {
            //         duration: 2.2,
            //         cssRule: {
            //             scaleX: 1,
            //         },
            //         ease: 'sine.inOut',
            //         scrollTrigger: {
            //             trigger: item,
            //             start: '50% 70%',
            //             end: '50% 70%',
            //             scrub: 2,
            //             markers: false,
            //             invalidateOnRefresh: true,
            //         }
            //     }, "<")
        })


        let cartWorks = gsap.utils.toArray('.cart-works')
        cartWorks.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, y: 100, opacity: 0, ease: 'sine.inOut' }, {
                duration: 2.2, y: 0, opacity: 1,
                y: 0, ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '60% 70%',
                    end: '60% 70%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let cartWorksL = gsap.utils.toArray('.cart-works-l')
        cartWorksL.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, x: "100%", filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, x: "0%", filter: 'blur(0px)',
                y: 0, ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '60% 70%',
                    end: '60% 70%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let cartWorksR = gsap.utils.toArray('.cart-works-r')
        cartWorksR.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, x: "-100%", filter: 'blur(80px)', ease: 'sine.inOut' }, {
                duration: 2.2, x: "0%", filter: 'blur(0px)',
                y: 0, ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '60% 70%',
                    end: '60% 70%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let videoContainer = gsap.utils.toArray('.video-container')
        videoContainer.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, maxWidth: "100%", y: 0, filter: 'blur(0px)', ease: 'sine.inOut' }, {
                duration: 2.2, maxWidth: "1140px", y: 0, filter: 'blur(0px)',
                y: 0, ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '50% 100%',
                    end: '50% 100%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let blindSection = gsap.utils.toArray('.blind-section')
        blindSection.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, maxWidth: "100%", y: 0, filter: 'blur(0px)', ease: 'sine.inOut' }, {
                duration: 2.2, maxWidth: "1140px", y: 0, filter: 'blur(0px)',
                y: 0, ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '0% 100%',
                    end: '0% 100%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let swiperSection = gsap.utils.toArray('.scale-swiper')
        swiperSection.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, scale: 1.8, transformOrigin: 'top', y: 0, filter: 'blur(0px)', ease: 'sine.inOut' }, {
                duration: 2.2, scale: 1, y: 0, filter: 'blur(0px)',
                y: 0, ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: item,
                    start: '0% 100%',
                    end: '0% 100%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        let btnForm = gsap.utils.toArray('.btn-width')
        btnForm.forEach(item => {
            gsap.fromTo(item, { duration: 2.2, width: "0%", ease: 'sine.inOut' }, {
                duration: 2.2, width: "50%",
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: '#Solutions',
                    start: '40% 100%',
                    end: '40% 100%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            })
        })
        gsap.fromTo('.scale-faq1', { duration: 2.2, y: 150, opacity: 0, filter: 'blur(80px)', ease: 'sine.inOut' }, {
            duration: 2.2, y: 0, opacity: 1, filter: 'blur(0px)',
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: '.scale-faq1',
                start: '0% 90%',
                end: '0% 90%',
                scrub: 2,
                markers: false,
            }
        })

        gsap.fromTo('.aboutus-bg', { duration: 2.2, y: window.innerHeight, ease: 'sine.inOut' }, {
            duration: 2.2, y: -window.innerHeight,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: '#aboutus',
                start: '10% 70%',
                end: '100% 70%',
                scrub: 2,
                markers: false,
                invalidateOnRefresh: true,
            }
        })
        gsap.fromTo('.homework-bg', { duration: 2.2, y: window.innerHeight, ease: 'sine.inOut' }, {
            duration: 2.2, y: -window.innerHeight,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: '.how-work-bg',
                start: '10% 70%',
                end: '100% 70%',
                scrub: 2,
                markers: false,
                invalidateOnRefresh: true,
            }
        })
        gsap.fromTo('.video-bg', { duration: 2.2, y: 0, ease: 'sine.inOut' }, {
            duration: 2.2, y: window.innerHeight * 1.5,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: '.video-bg',
                start: '10% 70%',
                end: '200% 70%',
                scrub: 2,
                markers: false,
                invalidateOnRefresh: true,
            }
        })
        gsap.fromTo('.stay-bg', { duration: 2.2, y: 0, ease: 'sine.inOut' }, {
            duration: 2.2, y: window.innerHeight,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: '.solutions-bg',
                start: '10% 50%',
                end: '80% 50%',
                endTrigger: '#FAQs',
                scrub: 2,
                markers: false,
                invalidateOnRefresh: true,
            }
        })
        // gsap.fromTo('.aboutus-bg', { duration: 2.2, y: 0, ease: 'sine.inOut' }, {
        //     duration: 2.2, y: -window.innerHeight,
        //     ease: 'sine.inOut',
        //     scrollTrigger: {
        //         trigger: '.aplication-block',
        //         start: '10% 20%',
        //         end: '100% 20%',
        //         scrub: 2,
        //         markers: false,
        //         invalidateOnRefresh: true,
        //     }
        // })
        // gsap.fromTo('.aboutus-bg', { duration: 2.2, y: -window.innerHeight, ease: 'sine.inOut' }, {
        //     duration: 2.2, y: 0,
        //     ease: 'sine.inOut',
        //     scrollTrigger: {
        //         trigger: '.swiper-block',
        //         start: '0% 60%',
        //         end: '50% 60%',
        //         scrub: 2,
        //         markers: false,
        //         invalidateOnRefresh: true,
        //     }
        // })


        // document.addEventListener('mousemove', e => {
        //     gsap.to('.question_mark_size_position', { duration: 3.5, y: e.clientY * 0.03, x: e.clientX * 0.03 - 20, });
        //     gsap.to('.finger-contact1', { duration: 3.5, x: e.clientX * 0.01, });
        //     gsap.to('.finger-contact2', { duration: 3.5, x: e.clientX * 0.04, });
        //     gsap.to('.finger-contact3', { duration: 3.5, x: -e.clientX * 0.04, });
        // })
    }
}
// startBlindPage()

startHomePage()