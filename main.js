//TOGGLING NESTED ul
var anchor = document.getElementsByTagName('a');
console.log(anchor[0]);

anchor[0].onclick = function() {
    //console.log("Yes");
    var optionsUlStyle = document.getElementsByTagName("ul");
    // console.log(optionsUlStyle[0].style);
    if(optionsUlStyle[0].style.display == 'none' || optionsUlStyle[0].style.display == '') {
        optionsUlStyle[0].style.display = "block";
    } else {
        optionsUlStyle[0].style.display = "none";
    }
};
// ВЫБРАТЬ ВАРИАНТЫ И СКРЫТЬ ВАРИАНТ ПОСЛЕ ВЫБОРА
//var selectElement = document.getElementsByClassName('options')[0].childNodes[1];
var selectItem = document.querySelectorAll('.options ul li a');
console.log(selectItem);

for (let i = 0; i < selectItem.length; i++) {
    selectItem[i].onclick = function () {
        console.log("Popav");
    }
}





$(".drop-down .selected a").click(function() {
    //$(".drop-down .options ul").toggle();
});

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".drop-down .options ul li a").click(function() {
    var text = $(this).html();
    $(".drop-down .selected a span").html(text);
    $(".drop-down .options ul").hide();
});


//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("drop-down"))
        $(".drop-down .options ul").hide();
});