document.addEventListener("DOMContentLoaded", () => 
{
    const buttons = document.querySelectorAll(".button-positionaware");
    
    buttons.forEach(button => 
    {
        ["mouseenter", "mouseout"].forEach(evt => 
        {
            button.addEventListener(evt, (e) => 
            {
                let parentOffset = button.getBoundingClientRect(),
                relX = e.clientX - parentOffset.left,
                relY = e.clientY - parentOffset.top;
    
                const span = button.getElementsByTagName("span");
                span[0].style.top = relY + "px";
                span[0].style.left = relX + "px";
            });
        });
    });
});