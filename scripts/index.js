const gallery = document.getElementById("gallery");

var lastClickedRadio = document.getElementById("radioWelcome");

window.onmousemove = e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth;
    const maxY = gallery.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1;
    const panY = maxY * yDecimal * -1;

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 4500,
        fill: "forwards",
        easing: "ease"
    })
}

function Content(value) {
    lastClickedRadio.checked = true;
    const content = document.getElementById("content");
    if(value == "show")
    {
        content.style.transition = "all 800ms"
        content.style.opacity = 1;
        content.style.visibility = "visible";
        document.getElementById("welcomeSection").classList.add("show")
    }
    if(value == "hide")
    {
        content.style.opacity = 0;
        content.style.visibility = "collapse";
        delay(1000).then(() => document.getElementById("radioWelcome").checked = true);
        document.getElementById("welcomeSection").classList.remove("show")
    }
}

function handleRadio(radio) {
    lastClickedRadio = radio;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));