//$(document).ready() {
    $("li").click(function () {
        $(this).toggleClass("completed");
    });

    $("span").click(function(event){
        alert("clicked on span")
        event.stopPropagation();
    });













//};