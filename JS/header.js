function toggleHeader()
{
    const header = document.querySelector("header");

    if (header.classList.contains("open"))
    {
        header.classList.remove("open")
    }
    else
    {
        header.classList.add("open")
    }
}