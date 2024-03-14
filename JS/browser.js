document.addEventListener("DOMContentLoaded", () => {

    // Checks the safari's scroll padding issue
    var isSafari = /constructor/i.test(window.HTMLElement) 
        || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] 
        || (typeof safari !== 'undefined' && window['safari'].pushNotification));
        
    if (isSafari)
    {   
        var scrollBox = document.querySelector(".horizontal_scroll > div > div")
        scrollBox.style.padding = "0 15% 0 0";
    }
})