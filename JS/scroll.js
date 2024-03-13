document.addEventListener('DOMContentLoaded', () => {
    applyHeroEffect();
});

document.addEventListener('scroll', () => {
    applyHeroEffect();
});

function applyHeroEffect()
{
    const effects = document.querySelectorAll("#Background_effects div div");
    const currentScroll = window.scrollY;

    effects.forEach(effect => 
    {
        var multiplier = effect.offsetHeight / 80;
        effect.style.bottom = `${(currentScroll + 200) * multiplier - 100}px`;
    });
}

function scrollNewsBy(walk)
{
    const effects = document.querySelector("#News .horizontal_scroll > div");
    const cardWidth = document.querySelector("#News article").offsetWidth;
    console.log(cardWidth)
    const gap = 20

    effects.scrollBy({
        left: walk * cardWidth + gap,
        behavior: "smooth",
    });
}