document.addEventListener("DOMContentLoaded", () => {

    // Checks the safari's scroll padding issue
    var isSafari = navigator.vendor.includes("Apple");
        
    if (isSafari)
    {   
        var scrollBoxes = document.querySelectorAll(".horizontal_scroll > div > div")

            scrollBoxes[0].style.padding = "0 15% 0 0";
            scrollBoxes[1].style.padding = "0 15% 0 0";
    }
})