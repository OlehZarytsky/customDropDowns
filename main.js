//TOGGLING NESTED ul
var anchor = document.querySelectorAll('.selected');
//console.log(anchor[0]);
var optionsUlStyle = document.getElementsByTagName("ul");
anchor[0].onclick = styleSearch;

    function styleSearch () {
        if(optionsUlStyle[0].style.display == 'none' || optionsUlStyle[0].style.display == '') {
            optionsUlStyle[0].style.display = "block";
        } else {
            optionsUlStyle[0].style.display = "none";
        }
    };
// ВЫБРАТЬ ВАРИАНТЫ И СКРЫТЬ ВАРИАНТ ПОСЛЕ ВЫБОРА
//var selectElement = document.getElementsByClassName('options')[0].childNodes[1];
var selectItem = document.querySelectorAll('.options ul li a');

for (let i = 0; i < selectItem.length; i++) {
    selectItem[i].onclick = function () {
        var text = this.innerHTML;
        document.querySelectorAll('.drop-down .selected')[0].innerHTML = text;
        document.querySelectorAll('.drop-down .options ul')[0].style.display = "none";
    }
}

document.onclick = function (event) {
    var target = event.target;
    console.log(target);
    if (target.classList.contains('selected')) {
        console.log("Yes");
        return;
    } else {
        optionsUlStyle[0].style.display = 'none'
    }


}