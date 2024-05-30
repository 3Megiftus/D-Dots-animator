let vid = document.getElementById("myVideo"),
    playButton = document.getElementById("playVideo");
if (vid) {

    function playVid() {
        vid.play(),
            vid.controls = !0,
            playButton.classList.add("d-none")
    }
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    playButton.addEventListener("click", function () {
        playButton.classList.add("d-none")
        vid.play()
    })
    document.querySelector('.video_border').addEventListener("click", function () {
        playButton.classList.add("d-none")
        vid.play()
    })
    document.querySelector('#myVideo').addEventListener("ended", (event) => {
        playButton.classList.remove("d-none")
    });
    // vid.addEventListener("play", function () {
    //     console.log('dsa');
    //     vid.controls = !0,
    //         playButton.classList.add("d-none")
    // })

    // vid.addEventListener("pause", function () {
    //     vid.controls = !1,
    //         playButton.classList.remove("d-none")
    // })

    window.addEventListener("scroll", function () {
        var t = document.getElementById("back_to_top");
        window.pageYOffset > 300 ? t.style.display = "block" : t.style.display = "none"
    });

    var backToTopButton = document.getElementById("back_to_top");
    backToTopButton.addEventListener("click", scrollToTop);
}