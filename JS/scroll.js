window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector("header");

    if (scrollPosition == 0)
    {
        header.classList.add("scroll_top")
    }
    else
    {
        header.classList.remove("scroll_top")
    }
});