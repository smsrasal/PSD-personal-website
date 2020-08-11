function closeMenu() {
    document.getElementById("navbar").style.height = "0%";
}
function openMenu() {
    document.getElementById("navbar").style.height = "100%";
}
$(function () {
    $.scrollify({ section: ".scrollify", setHeights: !1, updateHash: !1 });
}),
    $(function () {
        $(".menu-item a").on("click", function () {
            return $("html, body").animate({ scrollTop: $($.attr(this, "href")).offset().top }, 500), !1;
        });
    }),
    $(window).on("scroll", function () {
        $(window).scrollTop() ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
    }),
    $(".num").counterUp({ time: 1e3 });
var mixer = mixitup(".grid-work-container", { animation: { duration: 200 } });
$.LoadingOverlay("show"),
    setTimeout(function () {
        $.LoadingOverlay("hide");
    }, 1e3);
