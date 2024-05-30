// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger);
// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: [".active-animation-blind.position_relative", ".position_relative",], pin: !0, start: "top top", end: "bottom 80%", pinSpacer: !0, scrub: 1
//     }
// });
// window.innerWidth > 992 ? tl.fromTo(".line__first_tab", {
// },
//     {
//         height: 88
//     })
//     .fromTo(".finger_print_tag", {
//         scale: .7
//     },
//         {
//             scale: 2
//         },
//         "-=.5").fromTo(".finger_print_tag svg", {
//             opacity: .9, rotateZ: 180
//         },
//             {
//                 opacity: 1, rotateZ: 0
//             },
//             "-=.5").fromTo("#blind-tab-contentbox", {
//                 opacity: 0
//             },
//                 {
//                     opacity: 1
//                 },
//                 "-=.5") : window.innerWidth < 991.98 && window.innerWidth > 768 ? tl.fromTo(".line__first_tab", {
//                 },
//                     {
//                         height: 88
//                     })
//                     .fromTo(".finger_print_tag", {
//                         scale: .7
//                     },
//                         {
//                             scale: 1.3
//                         },
//                         "-=.5").fromTo(".finger_print_tag svg", {
//                             opacity: .9, rotateZ: 180
//                         },
//                             {
//                                 opacity: 1, rotateZ: 0
//                             },
//                             "-=.5").fromTo("#blind-tab-contentbox", {
//                                 opacity: 0
//                             },
//                                 {
//                                     opacity: 1
//                                 },
//                                 "-=.5") : window.innerWidth > 576 && window.innerWidth < 767.98 ? tl.fromTo(".line__first_tab", {
//                                 },
//                                     {
//                                         height: 88
//                                     })
//                                     .fromTo(".finger_print_tag", {
//                                         scale: .7
//                                     },
//                                         {
//                                             scale: 1.3
//                                         },
//                                         "-=.5").fromTo(".finger_print_tag svg", {
//                                             opacity: .9, rotateZ: 180
//                                         },
//                                             {
//                                                 opacity: 1, rotateZ: 0
//                                             },
//                                             "-=.5").fromTo("#blind-tab-contentbox", {
//                                                 opacity: 0
//                                             },
//                                                 {
//                                                     opacity: 1
//                                                 },
//                                                 "-=.5") : tl.fromTo(".line__first_tab", {
//                                                     height: 220, y: -20
//                                                 },
//                                                     {
//                                                         height: 88, y: -20
//                                                     })
//                                                     .fromTo(".finger_print_tag", {
//                                                         scale: .7
//                                                     },
//                                                         {
//                                                             scale: .9
//                                                         },
//                                                         "-=.5").fromTo(".finger_print_tag svg", {
//                                                             opacity: .9, rotateZ: 180
//                                                         },
//                                                             {
//                                                                 opacity: 1, rotateZ: 0
//                                                             },



