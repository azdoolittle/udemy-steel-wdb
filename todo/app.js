//$(document).ready() {
    $("ul").on("click", "li", function () {      //use on click for future/potential events
        $(this).toggleClass("completed");       //must be bound to an existing node when DOM is first fired
    });

    $("ul").on("click", "span", function(event){
        $(this).parent().fadeOut(500, function(){ //this refers to span
            $(this).remove();                     //this refers to li (its parent)
        })
        event.stopPropagation();
    });

    $("input[type='text'").keypress(function(event){
        if(event.which === 13) {
            var todoText = $(this).val();
            $(this).val("")
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
        }
    })











//};