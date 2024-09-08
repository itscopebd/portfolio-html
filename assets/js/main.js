
$(".skills__tab").on("click", function () {
    $(".skills__tab-content").removeClass("active");
    $(".skills__tab").removeClass("active");
    var thisValue = $(this).attr("data-tab");
    $(this).addClass("active");
    $('#' + thisValue).addClass("active");
})