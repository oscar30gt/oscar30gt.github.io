document.addEventListener("DOMContentLoaded", () => 
{
    const scrollBox = document.getElementById("ScrollBox");
    
    const leftShadow = document.getElementById("LeftShadow");
    const rightShadow = document.getElementById("RightShadow");

    scrollBox.addEventListener('scroll', () => 
    {
        const scrollLeft = scrollBox.scrollLeft;
        const scrollWidth = scrollBox.scrollWidth - scrollBox.clientWidth;
        const scrollPercentage = (scrollLeft / scrollWidth) * 100;
        
        leftShadow.style.opacity = scrollPercentage > 0 ? 1 : 0;
        rightShadow.style.opacity = scrollPercentage < 100 ? 1 : 0;
    });
});