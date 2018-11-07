function fromArea(evt, cityName) {
    // Declare all variables
    var i, tabcontent, nmLinnk;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    nmLinnk = document.getElementsByClassName("nmLinnk");
    for (i = 0; i < nmLinnk.length; i++) {
        nmLinnk[i].className = nmLinnk[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}