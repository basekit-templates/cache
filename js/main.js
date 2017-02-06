

// Toggles class open to display/hide the whole navigation
$(document).on("click", ".navigation-toggle", function() {
    $( ".bk-extendednavigation" ).toggleClass( "open" );
});


// Set a data attribute that matches the content of the nav item
var link = document.querySelectorAll('.item-name');
for (i = 0; i < link.length; i++) {
    link[i].setAttribute("data-hover", link[i].innerHTML);
};
