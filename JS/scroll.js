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

    for (let i = 0; i < effects.length; i++) 
    {
        const effect = effects[i];
        var multiplier = effect.offsetHeight / 80;
        effect.style.bottom = `${(currentScroll + 200) * multiplier - 100}px`;
    }
}


function scrollNewsBy(dir)
{
    const effects = document.querySelector("#News .horizontal_scroll > div");
    const cardWidth = document.querySelector("#News article").offsetWidth;
    const flexGap = 20;
    const total = cardWidth + flexGap;

    const offset = dir == 1 ? 1 : -1;
    const newStep = lastStep(effects.scrollLeft + total * dir + offset, total);
    const targetScroll = clamp(newStep, 0, effects.offsetWidth);

    effects.scrollTo({
        left: targetScroll,
        behavior: "smooth",
    });
}

function scrollBlogsBy(dir)
{
    const effects = document.querySelector("#Blogs .horizontal_scroll > div");
    const cardWidth = document.querySelector("#Blogs article").offsetWidth;
    const flexGap = 20;
    const total = cardWidth + flexGap;

    const offset = dir == 1 ? 1 : -1;
    const newStep = lastStep(effects.scrollLeft + total * dir + offset, total);
    const targetScroll = clamp(newStep, 0, effects.offsetWidth);

    effects.scrollTo({
        left: targetScroll,
        behavior: "smooth",
    });
}

function lastStep(currentPos, stepWidth)
{
    const currentStep = Math.floor((currentPos) / stepWidth);

    return stepWidth * currentStep;
}

function clamp(value, min, max)
{
    if (value > max)
    {
        return max;
    }

    if (value < min)
    {
        return min;
    }

    return value;
}