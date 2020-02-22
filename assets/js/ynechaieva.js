var ynecFunc1 = function() {

    var elem = document.getElementById('ynec-btn');
    elem.innerHTML = "Something is changed";
    elem.removeAttribute("href");

    var pic1 = document.getElementById("ynec-1");
    var pic2 = document.getElementById('ynec-2');
    var pic3 = document.getElementById('ynec-3');

    pic1.src = "images/ynec-1.jpg";
    pic2.setAttribute("src", "images/ynec-2.jpg");
    pic3.setAttribute("src", "images/ynec-3.jpg");

    elem.focus();
}
