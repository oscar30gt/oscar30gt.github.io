document.addEventListener("DOMContentLoaded", () => 
{
    const tags = document.querySelectorAll(".filterTag");

    tags.forEach(tag => 
    {
        tag.addEventListener('click', () => 
        {
            if (tag.classList.contains('selected'))
            {
                tag.classList.remove('selected');
                tag.classList.add('unselected');
            }
            else
            {
                tag.classList.remove('unselected');
                tag.classList.add('selected');
            }
        });
    });
});