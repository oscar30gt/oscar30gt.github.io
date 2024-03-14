document.addEventListener("DOMContentLoaded", () => {
    var isSafari = user.browser.family === 'Safari'
    if (isSafari)
    {   
        var scrollBox = document.querySelector(".horizontal_scroll > div > div")
        scrollBox.style.padding = "0 15% 0 0";
    }
})