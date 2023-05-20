var frontPage = {
    topbar: document.getElementById("front-page-topbar"),
    section1: document.getElementsByClassName("frontPage section1")[0],
    section2: document.getElementsByClassName("frontPage section2")[0],
    section3: document.getElementsByClassName("frontPage section3")[0],
    bottom: document.getElementById("front-page-bottom")
};

function setFrontPageHeight() {
    frontPage.topbar.style.height = (window.innerHeight * 0.1) + "px";
    frontPage.section1.style.height = window.innerHeight + "px";
    frontPage.section2.style.height = window.innerHeight + "px";
    frontPage.section3.style.height = window.innerHeight + "px";
    frontPage.bottom.style.height = (window.innerHeight * 0.25) + "px";
}

window.onload = function(event) {
    setFrontPageHeight();
};
window.onresize = function(event) {
    setFrontPageHeight();
};