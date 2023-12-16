window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const arrowsContainer = document.getElementById('ScrollArrowContainer');

    // Check the scroll position
    if (scrollPosition > 0) 
    {
        arrowsContainer.style.opacity = 0;
    } else 
    {
        arrowsContainer.style.opacity = 1;
    }

    const coverContent = document.getElementById('Cover').querySelector(".content");
    const viewportHeightInPixels = (window.innerHeight || document.documentElement.clientHeight);
    const titleOpacity = 1 - (2 * scrollPosition / viewportHeightInPixels)

    coverContent.style.opacity = titleOpacity;
});