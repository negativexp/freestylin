const gallery = document.getElementById("gallery");

const contentElement = document.getElementById("content");

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

//observer
//checks if a element is being seen or intrerected with
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})
//finds all elemetns that contains .hidden query
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


//display content
function ContentVisibility(value) {
    const content = document.getElementById("content");
    //get content from top to 50% => middle due to transfrom translate
    content.style.top = "50%"
    if(value == "show")
    {
        content.style.transition = "all 800ms"
        content.style.opacity = 1;
        content.style.visibility = "visible";
    }
    if(value == "hide")
    {
        content.style.top = "-100%"
    }
}

var lastButtonClicked = document.getElementById("gallery_button");

function handleNavbarButtons(button) {

    if(button.id != lastButtonClicked.id)
    {
        if(button.id == "welcome_button") {
            console.log("welcome")
            document.getElementById("welcomeSection").style.left = "0";
            document.getElementById("aboutmeSection").style.left = "-150%";
            document.getElementById("projectsSection").style.left = "-150%";
            document.getElementById("contactSection").style.left = "-150%";
        }
        if(button.id == "aboutme_button") {
            console.log("about me")
            document.getElementById("welcomeSection").style.left = "-150%";
            document.getElementById("aboutmeSection").style.left = "0";
            document.getElementById("projectsSection").style.left = "-150%";
            document.getElementById("contactSection").style.left = "-150%";
        }
        if(button.id == "projects_button") {
            console.log("projects")
            document.getElementById("welcomeSection").style.left = "-150%";
            document.getElementById("aboutmeSection").style.left = "-150%";
            document.getElementById("projectsSection").style.left = "0";
            document.getElementById("contactSection").style.left = "-150%";
        }
        if(button.id == "contact_button") {
            console.log("contact")
            document.getElementById("welcomeSection").style.left = "-150%";
            document.getElementById("aboutmeSection").style.left = "-150%";
            document.getElementById("projectsSection").style.left = "-150%";
            document.getElementById("contactSection").style.left = "0";
        }
    }

    lastButtonClicked.classList.remove("active")
    button.classList.add("active")
    lastButtonClicked = button;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}