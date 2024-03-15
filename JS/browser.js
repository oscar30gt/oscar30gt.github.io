document.addEventListener("DOMContentLoaded", () => {

    // Checks the safari's scroll padding issue
    var isSafari = navigator.vendor.includes("Apple");
        
    if (isSafari)
    {   
        var scrollBoxes = document.querySelectorAll(".horizontal_scroll > div > div")
        scrollBoxes.forEach(scrollBox, () => 
        {
            scrollBox.style.padding = "0 15% 0 0";
        })
    }
})