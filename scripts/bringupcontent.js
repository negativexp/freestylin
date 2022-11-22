function showContent() {
    const content = document.getElementById("test");
    console.log(content);
    content.style.transition = "all 1s"
    content.style.opacity = 1;
    content.style.visibility = "visible";
}