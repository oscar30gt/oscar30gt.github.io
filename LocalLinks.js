document.addEventListener("DOMContentLoaded", () => 
{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => 
        {
        anchor.addEventListener('click', (e) => 
        {
            e.preventDefault();

            const targetId = anchor.getAttribute('href').substring(1); // Remove the "#" symbol
            const targetElement = document.getElementById(targetId);

            if (targetElement) 
            {
                // Calculate the target element's position relative to the viewport
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;

                // Smoothly scroll to the target position
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});