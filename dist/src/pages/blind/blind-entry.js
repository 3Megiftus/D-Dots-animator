require("./../../global/js/global-entry")

import "./blind.scss"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
/**
 * outImageUrl - change image url in svg (if image save with link)
 * needContent - return content to js file
 * par - preserveAspectRatio attribute for svg
 * class - class for svg <svg class=""></svg>
 * ./img/test_svg/test.svg - path to svg in src
 */
let svgContent = require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/test.svg")
// console.log(svgContent);

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {

        const popup_cover = document.querySelector(".nav__popup"),
            popup_btn = document.querySelector("#icon__dots"),
            popup_btn_close = document.querySelector("#close_popup");
        popup_btn.addEventListener("click", function () {
            console.log('dsadas');
            popup_cover.classList.contains("max_h_popup")
                ? (popup_cover.classList.add("max-h-0"),
                    popup_cover.classList.remove("max_h_popup"),
                    popup_btn_close.classList.remove("d-block"))
                : (popup_cover.classList.remove("max-h-0"),
                    popup_cover.classList.add("max_h_popup"),
                    popup_btn_close.classList.add("d-block"));
        }),
            popup_btn_close.addEventListener("click", function () {
                popup_cover.classList.add("max-h-0"),
                    popup_cover.classList.remove("max_h_popup"),
                    popup_btn_close.classList.remove("d-block");
            });
        gsap.set('#circleGroup', { duration: 1, ease: 'none', x: 70, y: 100 })
        gsap.set('#circleGroup >:nth-child(1)', { duration: 1, ease: 'none', scale: 0, x: 980, y: 780, })
        gsap.set('#circleGroup >:nth-child(2)', { duration: 1, ease: 'none', scale: 0, x: 620, y: 780, })
        gsap.set('#circleGroup >:nth-child(3)', { duration: 1, ease: 'none', scale: 0, x: 150, y: 785, })
        gsap.set('#circleGroup >:nth-child(4)', { duration: 1, ease: 'none', scale: 0, x: -200, y: 785, })
        gsap.set('#circleGroup >:nth-child(5)', { duration: 1, ease: 'none', scale: 0, x: -440, y: 785, })
        gsap.set('#circleGroup >:nth-child(6)', { duration: 1, ease: 'none', scale: 0, x: -800, y: 785, })
        gsap.set('#circleGroup >:nth-child(7)', { duration: 1, ease: 'none', scale: 0, x: -1030, y: 785, })
        gsap.set('#circleGroup >:nth-child(8)', { duration: 1, ease: 'none', scale: 0, x: 975, y: 550, })
        gsap.set('#circleGroup >:nth-child(9)', { duration: 1, ease: 'none', scale: 0, x: 625, y: 550, })
        gsap.set('#circleGroup >:nth-child(10)', { duration: 1, ease: 'none', scale: 0, x: 270, y: 550, })
        gsap.set('#circleGroup >:nth-child(11)', { duration: 1, ease: 'none', scale: 0, x: -440, y: 550, })
        gsap.set('#circleGroup >:nth-child(12)', { duration: 1, ease: 'none', scale: 0, x: -1030, y: 550, })
        gsap.set('#circleGroup >:nth-child(13)', { duration: 1, ease: 'none', scale: 0, x: 620, y: 310, })
        gsap.set('#circleGroup >:nth-child(14)', { duration: 1, ease: 'none', scale: 0, x: -200, y: 310, })
        gsap.set('#circleStartMove', { duration: 1, ease: 'none', scale: 0, y: window.innerHeight * 1.5, })
        gsap.set('#iCircleMove', { duration: 1, ease: 'none', y: -200, })
        gsap.set('#lAnim', { duration: 1, ease: 'none', x: 600 })
        gsap.set('#bAnim', { duration: 1, ease: 'none', x: 1200 })
        gsap.set('#nAnim', { duration: 1, ease: 'none', x: -600 })
        gsap.set('#dAnim', { duration: 1, ease: 'none', x: -1200 })
        // gsap.set('.blind-circle', { duration: 1, y: window.innerHeight })
        // gsap.set('#blind-tab-contentbox', { autoAlpha: 0, scale: 2.4, y: 420, filter: 'blur(80px)', })

        function animPlay(params) {
            gsap.to('#icon__dots', { duration: 1, ease: 'sine.inOut', y: 10, repeat: -1, yoyo: true }, "<+0.1")

            gsap.timeline({})
                .to('#circleStartMove', { duration: 1, ease: "back.inOut(15)", scale: 1, y: 0 }, "<+0.1")
                .to('#circleStartMove', { duration: .3, ease: "none", scale: 0, y: 50, x: 50 }, "<+0.7")
                .to('#iCircleMove', { duration: 1, ease: "back.inOut(15)", scale: 2, y: -85 }, "<-0.3")
                .to('#lAnim', { duration: 1, ease: "back.inOut(15)", x: 0 }, "<+0.1")
                .to('#nAnim', { duration: 1, ease: "back.inOut(15)", x: 0 }, "<")
                .to('#bAnim', { duration: 1, ease: "back.inOut(15)", x: 0 }, "<+0.1")
                .to('#dAnim', { duration: 1, ease: "back.inOut(15)", x: 0 }, "<")
            gsap.to('#dot1', { duration: .7, y: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' })
            gsap.to('#dot2', { duration: .7, y: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' }, "<+0.3")
            gsap.to('#dot3', { duration: .7, y: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' }, "<+0.3")
            gsap.to('#dot4', { duration: .7, y: -5, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' })
            gsap.to('#dot5', { duration: .7, y: -5, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' }, "<+0.3")
            gsap.to('#dot6', { duration: .7, y: -5, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' }, "<+0.3")
            gsap.to('#icon1', { duration: 1, scale: 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' })
            gsap.to('#icon2', { duration: 1, scale: 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' })
            gsap.to('#icon3', { duration: 1, scale: 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' })
            gsap.to('#icon4', { duration: 1, scale: 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' })
            gsap.to('#icon5', { duration: 1, scale: 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' })
            gsap.to('#rotateNewCircle1', { duration: 3, rotation: 360, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#rotateNewCircle2', { duration: 3, rotation: 360, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#rotateLine1', { duration: 3, rotation: 360, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#rotateLine2', { duration: 3, rotation: 360, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#rotateLine3', { duration: 3, rotation: 360, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#rotateLine4', { duration: 3, rotation: 360, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#step1', { duration: 2, x: -450, y: -200, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#step2', { duration: 2, y: 400, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#step3', { duration: 2, x: 450, y: -170, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#lineMove1', { duration: 2.2, strokeDashoffset: 300, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#lineMove2', { duration: 2.2, strokeDashoffset: -300, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#lineMove3', { duration: 2.2, strokeDashoffset: -300, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#scanFingerGrey1 >*', { duration: .1, opacity: 0, repeat: -1, yoyo: true, stagger: { each: .1, from: 'random' }, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#scanFingerGrey2 >*', { duration: .1, opacity: 0, repeat: -1, yoyo: true, stagger: { each: .1, from: 'random' }, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#lineMove4', { duration: 2.2, strokeDashoffset: -300, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
            gsap.to('#lineMove5', { duration: 2.2, strokeDashoffset: 300, repeat: -1, ease: 'none', transformOrigin: '50% 50%' })
        }
        animPlay()
        let counterArr = [
            "#fingerMove path",
        ]

        // console.log(counterArr);
        document.querySelectorAll(counterArr).forEach(function (elem) {
            let tempLength = (elem.getTotalLength() + 1).toFixed(0)
            gsap.set(elem, { strokeDasharray: tempLength, strokeDashoffset: tempLength })
        })

        gsap.to(counterArr[0], { duration: .8, strokeDashoffset: 0, repeat: -1, stagger: { each: .1, from: 'random' }, repeatDelay: 1, yoyo: true, ease: 'sine.inOut', }, "<")
        function animDotsPlay() {
            gsap.timeline({})
                .to('#circleStartMove', { duration: 1, ease: "back.inOut(15)", scale: 1, y: 0 }, "<+0.1")
                .to('#circleStartMove', { duration: .3, ease: "none", scale: 0, y: 50, x: 50 }, "<+0.7")
                .to('#iCircleMove', { duration: 1, ease: "back.inOut(15)", scale: 2, y: -85 }, "<-0.3")
                .to('#lAnim', { duration: 1, ease: "back.inOut(15)", x: 0 }, "<+0.1")
                .to('#nAnim', { duration: 1, ease: "back.inOut(15)", x: 0 }, "<")
                .to('#bAnim', { duration: 1, ease: "back.inOut(15)", x: 0 }, "<+0.1")
                .to('#dAnim', { duration: 1, ease: "back.inOut(15)", x: 0 }, "<")
            gsap.timeline({})
                .to('#circleGroup', { duration: 1, ease: 'none', x: 0, y: 0 })
                .to('#circleGroup >:nth-child(1)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(2)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(3)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(4)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(5)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(6)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(7)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(8)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(9)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(10)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(11)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(12)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(13)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
                .to('#circleGroup >:nth-child(14)', { duration: .7, ease: "back.inOut(15)", scale: 1, x: 0, y: 0 }, "<+0.05")
            gsap.fromTo("#get-started", { yPercent: 150, opacity: 0, duration: .5, delay: 1, ease: "back.out" }, { yPercent: 0, opacity: 1, duration: .5, delay: 1, ease: "back.out" }, "<")
        }
        setTimeout(() => {
            animDotsPlay()
        }, 500);
        function animDotsReverse() {
            gsap.timeline({})
                .to('#circleGroup', {
                    duration: 1, ease: 'none', x: 0, y: 0,
                    onUpdate() {
                        setTimeout(() => {
                            document.querySelector('.swiper-1').classList.remove('active')
                            document.querySelector('.swiper-2').classList.remove('active')
                            document.querySelector('.swiper-3').classList.remove('active')
                        }, 100);
                        setTimeout(() => {
                            document.querySelector('.swiper-1').classList.add('active-move')
                            document.querySelector('.swiper-2').classList.add('active-move')
                            document.querySelector('.swiper-3').classList.add('active-move')
                            gsap.set('.swiper', { transition: '0.3s' })
                        }, 1200);
                    }
                })

                .to('#circleGroup >:nth-child(1)', { duration: 1, ease: "back.out(15)", scale: 4, x: 980, y: 780, }, "<+0.05")
                .to('#circleGroup >:nth-child(2)', { duration: 1, ease: "back.out(15)", scale: 4, x: 620, y: 780, }, "<+0.05")
                .to('#circleGroup >:nth-child(3)', { duration: 1, ease: "back.out(15)", scale: 4, x: 150, y: 785, }, "<+0.05")
                .to('#circleGroup >:nth-child(4)', { duration: 1, ease: "back.out(15)", scale: 4, x: -200, y: 785, }, "<+0.05")
                .to('#circleGroup >:nth-child(5)', { duration: 1, ease: "back.out(15)", scale: 4, x: -440, y: 785, }, "<+0.05")
                .to('#circleGroup >:nth-child(6)', { duration: 1, ease: "back.out(15)", scale: 4, x: -800, y: 785, }, "<+0.05")
                .to('#circleGroup >:nth-child(7)', { duration: 1, ease: "back.out(15)", scale: 4, x: -1030, y: 785, }, "<+0.05")
                .to('#circleGroup >:nth-child(8)', { duration: 1, ease: "back.out(15)", scale: 4, x: 975, y: 550, }, "<+0.05")
                .to('#circleGroup >:nth-child(9)', { duration: 1, ease: "back.out(15)", scale: 4, x: 625, y: 550, }, "<+0.05")
                .to('#circleGroup >:nth-child(10)', { duration: 1, ease: "back.out(15)", scale: 4, x: 270, y: 550, }, "<+0.05")
                .to('#circleGroup >:nth-child(11)', { duration: 1, ease: "back.out(15)", scale: 4, x: -440, y: 550, }, "<+0.05")
                .to('#circleGroup >:nth-child(12)', { duration: 1, ease: "back.out(15)", scale: 4, x: -1030, y: 550, }, "<+0.05")
                .to('#circleGroup >:nth-child(13)', { duration: 1, ease: "back.out(15)", scale: 4, x: 620, y: 310, }, "<+0.05")
                .to('#circleGroup >:nth-child(14)', { duration: 1, ease: "back.out(15)", scale: 4, x: -200, y: 310, }, "<+0.05")
            // .to('.swiper-2', { duration: 2.5, scale: 1, ease: "none", y: 0, }, "<-1")

            // .to('.blind-circle', { duration: 1, scale: 0.3, ease: "back.inOut(2)", y: 0 }, "<-0.15")
        }

        document.getElementById("get-started").addEventListener("click", function () {
            const animLoader = document.getElementById('blind-animation-popup')
            startTrigger()

            ScrollTrigger.refresh();
            gsap.to("#get-started", {
                duration: 0.2,
                y: window.innerHeight
            }, "<")
            animDotsReverse()
            window.scrollTo(0, 0);
            gsap.to(animLoader, {
                opacity: 0,
                delay: .6,
                pointerEvents: "none"
            })
            gsap.to('#blind-tab-contentbox', { duration: 1, autoAlpha: 1, scale: 1, y: 0, filter: 'blur(0px)', ease: "sine.inOut" }, "<")
            gsap.to(animLoader, {
                delay: 3,
                display: "none", onComplete() { animLoader.remove() }
            })

            // gsap.to('.tabs_parent', { duration: 1, y: 0, ease: "back.inOut(2)", }, ">")
            // gsap.to('.swipe_tab_1', { duration: 1, x: '180px', ease: "back.inOut(2)", }, "<")
            // gsap.to('.line__first_tab', { duration: 1, height: '88px', ease: "back.inOut(2)", }, "<")
            // gsap.to('.swipe_tab_3', {
            //     duration: 1,
            //     x: '-180px', ease: "back.inOut(2)",
            //     onComplete() {
            //         setTimeout(() => {
            //             // blindSlide()
            //         }, 1000);
            //     }
            // }, "<")

        })


        const s1 = document.querySelector('.s1')
        const s2 = document.querySelector('.s2')
        const s3 = document.querySelector('.s3')
        const s4 = document.querySelector('.s4')
        const s5 = document.querySelector('.s5')

        const swiperOrderList = [s1, s2, s3]
        const swiperClassList = [
            'swiper-1',
            'swiper-2',
            'swiper-3',

        ]

        // this function is from
        // https://juejin.cn/post/6973541673196322847
        function handleTouchDir({ container, leftCb, rightCb }) {
            let box = document.querySelector(container) // 监听对象
            let startTime = '' // 触摸开始时间
            let startDistanceX = '' // 触摸开始X轴位置
            let startDistanceY = '' // 触摸开始Y轴位置
            let endTime = '' // 触摸结束时间
            let endDistanceX = '' // 触摸结束X轴位置
            let endDistanceY = '' // 触摸结束Y轴位置
            let moveTime = '' // 触摸时间
            let moveDistanceX = '' // 触摸移动X轴距离
            let moveDistanceY = '' // 触摸移动Y轴距离
            box.addEventListener('touchstart', (e) => {
                startTime = new Date().getTime()
                startDistanceX = e.touches[0].screenX
                startDistanceY = e.touches[0].screenY
            })
            box.addEventListener('touchend', (e) => {
                endTime = new Date().getTime()
                endDistanceX = e.changedTouches[0].screenX
                endDistanceY = e.changedTouches[0].screenY
                moveTime = endTime - startTime
                moveDistanceX = startDistanceX - endDistanceX
                moveDistanceY = startDistanceY - endDistanceY
                // 判断滑动距离超过40 且 时间小于500毫秒
                if (
                    (Math.abs(moveDistanceX) > 40 || Math.abs(moveDistanceY) > 40) &&
                    moveTime < 500
                ) {
                    // 判断X轴移动的距离是否大于Y轴移动的距离
                    if (Math.abs(moveDistanceX) > Math.abs(moveDistanceY)) {
                        // return moveDistanceX > 0 ? 'left' : 'right'
                        if (moveDistanceX > 0) {
                            leftCb()
                        } else {
                            rightCb()
                        }
                    } else {
                        // return moveDistanceY > 0 ? 'up' : 'down'
                    }
                }
            })
        }

        swiperOrderList.forEach((swiper, i) => {
            swiper.classList.add(swiperClassList[i])
        })
        let leftBtn = document.querySelector('.bt-left')
        let rightBtn = document.querySelector('.bt-right')
        leftBtn.addEventListener('click', function () {
            leftCb()
            swiper1()
            ScrollTrigger.refresh();

        })
        rightBtn.addEventListener('click', function () {
            rightCb()
            swiper1()
            ScrollTrigger.refresh();

        })
        function leftCb() {
            const s = swiperOrderList.shift()
            swiperOrderList.push(s)
            swiperOrderList.forEach((swiper, i) => {
                swiperClassList.forEach((c) => {
                    swiper.classList.remove(c)
                })
                swiper.classList.add(swiperClassList[i])
            })
        }

        function rightCb() {
            const s = swiperOrderList.pop()
            swiperOrderList.unshift(s)
            swiperOrderList.forEach((swiper, i) => {
                swiperClassList.forEach((c) => {
                    swiper.classList.remove(c)
                })
                swiper.classList.add(swiperClassList[i])
            })
        }

        handleTouchDir({
            container: '.con',
            leftCb,
            rightCb,
        })
        function swiper1(params) {
            if (document.querySelector('.s2').classList.contains('swiper-1')) {
                document.querySelector('#services-tab').style.display = 'block';
                // document.querySelector('#blind-tab').style.display = 'none';
                document.querySelector('#why-us-tab').style.display = 'none';

            }
            else if (document.querySelector('.s2').classList.contains('swiper-2')) {
                // document.querySelector('#blind-tab').style.display = 'block';
                document.querySelector('#why-us-tab').style.display = 'none';
                document.querySelector('#services-tab').style.display = 'none';

            }
            else if (document.querySelector('.s2').classList.contains('swiper-3')) {
                document.querySelector('#why-us-tab').style.display = 'block';
                document.querySelector('#services-tab').style.display = 'none';
                // document.querySelector('#blind-tab').style.display = 'none';
            }

        }



        const range = document.getElementById("range"),
            tooltip = document.getElementById("tooltip"),
            setValue = () => {
                let e = Number(
                    ((range.value - range.min) * 100) / (range.max - range.min)
                ),
                    t = 16 - 0.32 * e;
                (tooltip.innerHTML = `<span>${range.value}</span>`),
                    (tooltip.style.left = `calc(${e}% + (${t}px))`),
                    document.documentElement.style.setProperty(
                        "--range-progress",
                        `calc(${e}% + (${t}px))`
                    );
            };
        document.addEventListener("DOMContentLoaded", setValue),
            range.addEventListener("input", setValue);

        let btnThank = document.querySelector('.submit-thank')
        let thankSection = document.querySelector('.thankyou_bg')
        btnThank.addEventListener('click', function () {
            thankSection.style.display = 'flex'
            thankSection.style.pointerEvents = 'all'
        })


        function startTrigger() {
            // let moveBg = gsap.utils.toArray('.move-bg')
            // moveBg.forEach(item => {
            //     gsap.fromTo(item, { duration: 2.2, y: -window.innerHeight, ease: 'sine.inOut' }, {
            //         duration: 2.2, y: window.innerHeight,
            //         ease: 'sine.inOut',
            //         scrollTrigger: {
            //             trigger: item,
            //             start: '0% 0%',
            //             end: '80% 0%',
            //             scrub: 1,
            //             markers: false,
            //             invalidateOnRefresh: true,
            //         }
            //     })
            // })
            // let moveBgSimulation = gsap.utils.toArray('.qna-bg')
            // moveBgSimulation.forEach(item => {
            //     gsap.fromTo(item, { duration: 2.2, left: '-100%', ease: 'sine.inOut' }, {
            //         duration: 2.2, left: '-9%',
            //         ease: 'sine.inOut',
            //         scrollTrigger: {
            //             trigger: 'body',
            //             start: '65% 70%',
            //             end: '70% 70%',
            //             scrub: 1,
            //             markers: false,
            //             invalidateOnRefresh: true,
            //         }
            //     })
            // })
            let line = gsap.utils.toArray('.line__first_tab')
            line.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, height: '88px', ease: 'sine.inOut' }, {
                    duration: 2.2, height: '150px',
                    ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: '0% 40%',
                        end: '0% 40%',
                        scrub: 2,
                        markers: false,
                        invalidateOnRefresh: true,
                    }
                })
            })
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".blind-page",
                    start: '0% 0%',
                    end: '20% 0%',
                    scrub: 2,
                    markers: false,
                    invalidateOnRefresh: true,
                }
            });
            tl.to('.finger_print_tag ', { y: -150, scale: 1.5 })
            tl.to('.finger_print_tag svg ', { rotateZ: 180 }, "<")


            let scale = gsap.utils.toArray('.scale')
            scale.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, autoAlpha: 0, scale: 2.4, y: 420, filter: 'blur(80px)', ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1, scale: 1, filter: 'blur(0px)',
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
            let scaleNoZoom = gsap.utils.toArray('.scaleNozoom')
            scaleNoZoom.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, autoAlpha: 0, y: 120, ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1,
                    y: 0, ease: 'sine.inOut',
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
            let scaleNoZoom3 = gsap.utils.toArray('.scaleNozoom3')
            scaleNoZoom3.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, autoAlpha: 0, y: 120, ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1,
                    y: 0, ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: '70% 80%',
                        end: '70% 80%',
                        scrub: 2,
                        markers: false,
                        invalidateOnRefresh: true,
                    }
                })
            })
            let scaleNoZoom2 = gsap.utils.toArray('.scaleNozoom2')
            scaleNoZoom2.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, autoAlpha: 0, y: 120, ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1,
                    y: 0, ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: '50% 90%',
                        end: '50% 90%',
                        scrub: 2,
                        markers: false,
                        invalidateOnRefresh: true,
                    }
                })
            })
            let posMove1 = gsap.utils.toArray('.position-move1')
            posMove1.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, autoAlpha: 0, y: 120, ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1,
                    y: 0, ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: '50% 90%',
                        end: '50% 90%',
                        scrub: 2,
                        markers: false,
                        invalidateOnRefresh: true,
                    }
                })
            })
            let posMove2 = gsap.utils.toArray('.bar_1')
            posMove2.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, autoAlpha: 0, y: 120, ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1,
                    y: 0, ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: '60% 100%',
                        end: '60% 100%',
                        scrub: 2,
                        markers: false,
                        invalidateOnRefresh: true,
                    }
                })
            })
            let posMove3 = gsap.utils.toArray('.bar_2')
            posMove3.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, autoAlpha: 0, y: 120, ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1,
                    y: 0, ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: '60% 100%',
                        end: '60% 100%',
                        scrub: 2,
                        markers: false,
                        invalidateOnRefresh: true,
                    }
                })
            })
            let posMove4 = gsap.utils.toArray('.bar_3')
            posMove4.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, autoAlpha: 0, y: 120, ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1,
                    y: 0, ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: '60% 100%',
                        end: '60% 100%',
                        scrub: 2,
                        markers: false,
                        invalidateOnRefresh: true,
                    }
                })
            })
            let spanHeight = gsap.utils.toArray('#progress_bar .bar_1 span')
            spanHeight.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, height: '0%', ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1,
                    height: '90%', ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: '60% 100%',
                        end: '60% 100%',
                        scrub: 2,
                        markers: false,
                        invalidateOnRefresh: true,
                    }
                })
            })
            let spanHeight2 = gsap.utils.toArray('#progress_bar .bar_2 span')
            spanHeight2.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, height: '0%', ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1,
                    height: '60%', ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: '60% 100%',
                        end: '60% 100%',
                        scrub: 2,
                        markers: false,
                        invalidateOnRefresh: true,
                    }
                })
            })
            let spanHeight3 = gsap.utils.toArray('#progress_bar .bar_3 span')
            spanHeight3.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, height: '0%', ease: 'sine.inOut' }, {
                    duration: 2.2, autoAlpha: 1,
                    height: '70%', ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: '60% 100%',
                        end: '60% 100%',
                        scrub: 2,
                        markers: false,
                        invalidateOnRefresh: true,
                    }
                })
            })


            let counter1 = gsap.utils.toArray('[data-amoutnt]')
            counter1.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, ease: 'none' }, {
                    ease: 'none',
                    onUpdate: function () {
                        var element = this.targets()[0];
                        if (element) {
                            var amount = Math.round(element.innerText);
                            var formattedAmount = addCommas(amount);
                            element.setAttribute("data-amoutnt", formattedAmount);
                        }
                    },
                    scrollTrigger: {
                        trigger: item,
                        start: '60% 100%',
                        end: '60% 100%',
                        scrub: 1,
                        markers: false,
                        invalidateOnRefresh: true,
                    },
                    innerText: 94890,
                    snap: {
                        innerText: .5
                    }
                })
            })
            let counter2 = gsap.utils.toArray('[data-amoutnt2]')
            counter2.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, ease: 'none' }, {
                    ease: 'none',
                    onUpdate: function () {
                        var element = this.targets()[0];
                        if (element) {
                            var amount = Math.round(element.innerText);
                            var formattedAmount = addCommas(amount);
                            element.setAttribute("data-amoutnt2", formattedAmount);
                        }
                    },
                    scrollTrigger: {
                        trigger: item,
                        start: '60% 100%',
                        end: '60% 100%',
                        scrub: 1,
                        markers: false,
                        invalidateOnRefresh: true,
                    },
                    innerText: 4456,
                    snap: {
                        innerText: .5
                    }
                })
            })
            let counter3 = gsap.utils.toArray('[data-amoutnt3]')
            counter3.forEach(item => {
                gsap.fromTo(item, { duration: 2.2, ease: 'none' }, {
                    ease: 'none',
                    onUpdate: function () {
                        var element = this.targets()[0];
                        if (element) {
                            var amount = Math.round(element.innerText);
                            var formattedAmount = addCommas(amount);
                            element.setAttribute("data-amoutnt3", formattedAmount);
                        }
                    },
                    scrollTrigger: {
                        trigger: item,
                        start: '60% 100%',
                        end: '60% 100%',
                        scrub: 1,
                        markers: false,
                        invalidateOnRefresh: true,
                    },
                    innerText: 1294890,
                    snap: {
                        innerText: .5
                    }
                })
            })

            function addCommas(number) {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            let btnVersionNew = document.getElementById('new-v')
            let btnVersionOld = document.getElementById('old-v')
            btnVersionNew.addEventListener('click', function () {
                // ScrollTrigger.refresh();

                document.querySelector('.button_toggle_verson span').style.left = '4px'
                btnVersionNew.classList.add('active')
                btnVersionOld.classList.remove('active')
                document.querySelector('.new-svg').style.display = 'flex'
                document.querySelector('.old-svg').style.display = 'none'
            })
            btnVersionOld.addEventListener('click', function () {
                // ScrollTrigger.refresh();

                document.querySelector('.button_toggle_verson span').style.left = '130px'
                btnVersionNew.classList.remove('active')
                btnVersionOld.classList.add('active')
                document.querySelector('.new-svg').style.display = 'none'
                document.querySelector('.old-svg').style.display = 'flex'
            })
        }

    })
})
