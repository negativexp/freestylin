const gallery = document.getElementById("gallery");

galleryIsFocused = true;

window.onmousemove = e => {
    if(galleryIsFocused)
    {
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
}

function Content(value) {
    const content = document.getElementById("content");
    if(value == "show")
    {
        content.style.transition = "all 1s"
        content.style.opacity = 1;
        content.style.visibility = "visible";
    }
    if(value == "hide")
    {
        content.style.transition = "all 1s"
        content.style.opacity = 0;
        content.style.visibility = "collapse";
        delay(1000).then(() => document.getElementById("radioContent").checked = true);
    }
}

function handleRadio(radio) {
    console.log(radio.value)
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}