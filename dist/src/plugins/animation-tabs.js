// $(function () {
//     0 == (flag = 1) ? ($(".swipe_tab_1").css({
//         transform: "translateX(-180px) scale(1)",
//         "z-index": "9",
//         backgroundColor: "transparent"
//     }), $(".swipe_tab_2").css({
//         transform: "translateX(180px) scale(1)",
//         "z-index": "9",
//         backgroundColor: "transparent"
//     }), $(".swipe_tab_3").css({
//         transform: "translateX(0) scale(1.2)",
//         "z-index": "99",
//         backgroundColor: "white"
//     }), $(".swipe_tab_3").addClass("active"), $("#mt_selecter").removeClass("mt_sm_custom_services_tab"), $("#parent-animation").addClass("active-why-us-animation"), $("#parent-animation").removeClass("active-animation-blind"), $("#why-us-tab").addClass("d-block"), $("#blind-tab").removeClass("d-block"), $("#services-tab").removeClass("d-block"), $(".swipe_tab_3").removeClass("next-active"), $(".swipe_tab_1").removeClass("next-active"), $(".swipe_tab_1").removeClass("active"), $(".swipe_tab_2").removeClass("active"), $(".swipe_tab_2").addClass("next-active"), flag = 1) : 1 == flag ? ($(".swipe_tab_3").css({
//         transform: "translateX(-180px) scale(1)",
//         "z-index": "9",
//         backgroundColor: "transparent"
//     }), $(".swipe_tab_1").css({
//         transform: "translateX(180px) scale(1)",
//         "z-index": "9",
//         backgroundColor: "transparent"
//     }), $(".swipe_tab_2").css({
//         transform: "translateX(0) scale(1.2)",
//         "z-index": "99",
//         backgroundColor: "white"
//     }), $(".swipe_tab_2").addClass("active"), $("#mt_selecter").removeClass("mt_sm_custom_services_tab"), $("#parent-animation").addClass("active-animation-blind"), $("#parent-animation").removeClass("active-why-us-animation"), $("#why-us-tab").removeClass("d-block"), $("#services-tab").removeClass("d-block"), $("#blind-tab").addClass("d-block"), $(".swipe_tab_2").removeClass("next-active"), $(".swipe_tab_3").removeClass("active"), $(".swipe_tab_3").removeClass("next-active"), $(".swipe_tab_1").removeClass("active"), $(".swipe_tab_1").addClass("next-active"), flag = 2) : 2 == flag && ($(".swipe_tab_2").css({
//         transform: "translateX(-180px) scale(1)",
//         "z-index": "9",
//         backgroundColor: "transparent"
//     }), $(".swipe_tab_3").css({
//         transform: "translateX(180px) scale(1)",
//         "z-index": "9",
//         backgroundColor: "transparent"
//     }), $(".swipe_tab_1").css({
//         transform: "translateX(0) scale(1.2)",
//         "z-index": "99",
//         backgroundColor: "white"
//     }), $(".swipe_tab_1").addClass("active"), $("#mt_selecter").addClass("mt_sm_custom_services_tab"), $("#services-tab").addClass("d-block"), $("#blind-tab").removeClass("d-block"), $("#why-us-tab").removeClass("d-block"), $(".swipe_tab_1").removeClass("next-active"), $(".swipe_tab_2").removeClass("next-active"), $(".swipe_tab_3").removeClass("active"), $(".swipe_tab_2").removeClass("active"), $(".swipe_tab_3").addClass("next-active"), flag = 0),
//         $(".next").click(function () {
//             0 == flag ? ($(".swipe_tab_1").css({
//                 transform: "translateX(-180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_2").css({
//                 transform: "translateX(180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_3").css({
//                 transform: "translateX(0) scale(1.2)",
//                 "z-index": "99",
//                 backgroundColor: "white"
//             }), $(".swipe_tab_3").addClass("active"), $("#mt_selecter").removeClass("mt_sm_custom_services_tab"), $("#parent-animation").addClass("active-why-us-animation"), $("#parent-animation").removeClass("active-animation-blind"), $("#services-tab").removeClass("d-block"), $("#why-us-tab").addClass("d-block"), $("#blind-tab").removeClass("d-block"), $(".swipe_tab_3").removeClass("next-active"), $(".swipe_tab_1").removeClass("active"), $(".swipe_tab_2").removeClass("active"), $(".swipe_tab_2").addClass("next-active"), flag = 1) : 1 == flag ? ($(".swipe_tab_3").css({
//                 transform: "translateX(-180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_1").css({
//                 transform: "translateX(180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_2").css({
//                 transform: "translateX(0) scale(1.2)",
//                 "z-index": "99",
//                 backgroundColor: "white"
//             }), $(".swipe_tab_2").addClass("active"), $("#mt_selecter").removeClass("mt_sm_custom_services_tab"), $("#parent-animation").addClass("active-animation-blind"), $("#parent-animation").removeClass("active-why-us-animation"), $("#services-tab").removeClass("d-block"), $("#blind-tab").addClass("d-block"), $("#why-us-tab").removeClass("d-block"), $(".swipe_tab_2").removeClass("next-active"), $(".swipe_tab_3").removeClass("active"), $(".swipe_tab_1").removeClass("active"), $(".swipe_tab_1").addClass("next-active"), flag = 2) : 2 == flag && ($(".swipe_tab_2").css({
//                 transform: "translateX(-180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_3").css({
//                 transform: "translateX(180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_1").css({
//                 transform: "translateX(0) scale(1.2)",
//                 "z-index": "99",
//                 backgroundColor: "white"
//             }), $(".swipe_tab_1").addClass("active"), $("#mt_selecter").addClass("mt_sm_custom_services_tab"), $("#services-tab").addClass("d-block"), $("#blind-tab").removeClass("d-block"), $("#why-us-tab").removeClass("d-block"), $(".swipe_tab_1").removeClass("next-active"), $(".swipe_tab_3").removeClass("active"), $(".swipe_tab_2").removeClass("active"), $(".swipe_tab_3").addClass("next-active"), flag = 0)
//         }),
//         $(".prev").click(function () {
//             0 == flag ? ($(".swipe_tab_3").css({
//                 transform: "translateX(-180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_1").css({
//                 transform: "translateX(180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_2").css({
//                 transform: "translateX(0) scale(1.2)",
//                 "z-index": "99",
//                 backgroundColor: "white"
//             }), $(".swipe_tab_2").addClass("active"), $("#mt_selecter").removeClass("mt_sm_custom_services_tab"), $("#parent-animation").addClass("active-animation-blind"), $("#parent-animation").removeClass("active-why-us-animation"), $("#services-tab").removeClass("d-block"), $("#blind-tab").addClass("d-block"), $("#why-us-tab").removeClass("d-block"), $(".swipe_tab_2").removeClass("next-active"), $(".swipe_tab_3").removeClass("next-active"), $(".swipe_tab_3").removeClass("active"), $(".swipe_tab_1").removeClass("active"), $(".swipe_tab_1").addClass("next-active"), flag = 1) : 1 == flag ? ($(".swipe_tab_1").css({
//                 transform: "translateX(-180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_2").css({
//                 transform: "translateX(180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_3").css({
//                 transform: "translateX(0) scale(1.2)",
//                 "z-index": "99",
//                 backgroundColor: "white"
//             }), $(".swipe_tab_3").addClass("active"), $("#mt_selecter").removeClass("mt_sm_custom_services_tab"), $("#parent-animation").addClass("active-why-us-animation"), $("#parent-animation").removeClass("active-animation-blind"), $("#why-us-tab").addClass("d-block"), $("#blind-tab").removeClass("d-block"), $("#services-tab").removeClass("d-block"), $(".swipe_tab_3").removeClass("next-active"), $(".swipe_tab_1").removeClass("next-active"), $(".swipe_tab_1").removeClass("active"), $(".swipe_tab_2").removeClass("active"), $(".swipe_tab_2").addClass("next-active"), flag = 2) : 2 == flag && ($(".swipe_tab_2").css({
//                 transform: "translateX(-180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_3").css({
//                 transform: "translateX(180px) scale(1)",
//                 "z-index": "9",
//                 backgroundColor: "transparent"
//             }), $(".swipe_tab_1").css({
//                 transform: "translateX(0) scale(1.2)",
//                 "z-index": "99",
//                 backgroundColor: "white"
//             }), $(".swipe_tab_1").addClass("active"), $("#mt_selecter").addClass("mt_sm_custom_services_tab"), $("#services-tab").addClass("d-block"), $("#why-us-tab").removeClass("d-block"), $("#blind-tab").removeClass("d-block"), $(".swipe_tab_1").removeClass("next-active"), $(".swipe_tab_2").removeClass("next-active"), $(".swipe_tab_3").removeClass("active"), $(".swipe_tab_2").removeClass("active"), $(".swipe_tab_3").addClass("next-active"), flag = 0)
//         })
// });