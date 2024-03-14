document.addEventListener("DOMContentLoaded", () => {

    // Checks the safari's scroll padding issue
    var isSafari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
        
    if (isSafari)
    {   
        var scrollBox = document.querySelector(".horizontal_scroll > div > div")
        scrollBox.style.padding = "0 15% 0 0";
    }
})