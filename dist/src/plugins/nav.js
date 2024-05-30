$(".hamburger-menu").on("click", function () {
    $(".hamburger-menu").toggleClass("animate"),
        $("#overlay").toggleClass("overlay-active"),
        $(".main-top-section").toggleClass("mobile-view"),
        $("body").toggleClass("fix-screen-mobile")
}),
    $(document).ready(function () {
        let e = document.querySelector("#mint"),
            o = document.querySelector("#Update"),
            s = document.querySelector("#OurWhy"),
            i = document.querySelector("#Solutions"),
            l = document.querySelector("#HowWorks"),
            a = document.querySelector("#Applications");
        document.querySelector("#Resources"),
            document.querySelector("#FAQ"),
            document.querySelector("#Contact"),
            $(".section-1").click(function () {
                $(".hamburger-menu").removeClass("animate"),
                    $("#overlay").removeClass("overlay-active"),
                    $(".main-top-section").removeClass("mobile-view"),
                    $("body").removeClass("fix-screen-mobile"),
                    $(".main-top-section").removeClass("h-100vh"),
                    e.scrollIntoView()
            }),
            $(".section-2").click(function () {
                $(".hamburger-menu").removeClass("animate"),
                    $("#overlay").removeClass("overlay-active"),
                    $(".main-top-section").removeClass("mobile-view"),
                    $("body").removeClass("fix-screen-mobile"),
                    $(".main-top-section").removeClass("h-100vh"),
                    o.scrollIntoView()
            }),
            $(".section-3").click(function () {
                $(".hamburger-menu").removeClass("animate"),
                    $("#overlay").removeClass("overlay-active"),
                    $(".main-top-section").removeClass("mobile-view"),
                    $("body").removeClass("fix-screen-mobile"),
                    $(".main-top-section").removeClass("h-100vh"),
                    s.scrollIntoView()
            }),
            $(".section-4").click(function () {
                $(".hamburger-menu").removeClass("animate"),
                    $("#overlay").removeClass("overlay-active"),
                    $(".main-top-section").removeClass("mobile-view"),
                    $("body").removeClass("fix-screen-mobile"),
                    $(".main-top-section").removeClass("h-100vh"),
                    i.scrollIntoView()
            }),
            $(".section-5").click(function () {
                $(".hamburger-menu").removeClass("animate"),
                    $("#overlay").removeClass("overlay-active"),
                    $(".main-top-section").removeClass("mobile-view"),
                    $("body").removeClass("fix-screen-mobile"),
                    $(".main-top-section").removeClass("h-100vh"),
                    l.scrollIntoView()
            }),
            $(".section-6").click(function () {
                $(".hamburger-menu").removeClass("animate"),
                    $("#overlay").removeClass("overlay-active"),
                    $(".main-top-section").removeClass("mobile-view"),
                    $("body").removeClass("fix-screen-mobile"),
                    $(".main-top-section").removeClass("h-100vh"),
                    a.scrollIntoView()
            }),
            $(".section-7").click(function () {
                $(".hamburger-menu").removeClass("animate"),
                    $("#overlay").removeClass("overlay-active"),
                    $(".main-top-section").removeClass("mobile-view"),
                    $("body").removeClass("fix-screen-mobile"),
                    $(".main-top-section").removeClass("h-100vh"),
                    a.scrollIntoView()
            }),
            $(".section-8").click(function () {
                $(".hamburger-menu").removeClass("animate"),
                    $("#overlay").removeClass("overlay-active"),
                    $(".main-top-section").removeClass("mobile-view"),
                    $("body").removeClass("fix-screen-mobile"),
                    $(".main-top-section").removeClass("h-100vh"),
                    a.scrollIntoView()
            }),
            $(".section-9").click(function () {
                $(".hamburger-menu").removeClass("animate"),
                    $("#overlay").removeClass("overlay-active"),
                    $(".main-top-section").removeClass("mobile-view"),
                    $("body").removeClass("fix-screen-mobile"),
                    $(".main-top-section").removeClass("h-100vh"),
                    a.scrollIntoView()
            }),
            $(".mobile_view_link").on("click", function () {
                $(".hamburger-menu").toggleClass("animate"),
                    $("#overlay").toggleClass("overlay-active"),
                    $(".main-top-section").toggleClass("mobile-view"),
                    $("body").toggleClass("fix-screen-mobile")
            })
    });