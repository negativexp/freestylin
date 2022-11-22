console.log("random block size")
const child1 = document.querySelector('#block:nth-child(1)')
const child2 = document.querySelector('#block:nth-child(2)')
const child3 = document.querySelector('#block:nth-child(3)')
const child4 = document.querySelector('#block:nth-child(4)')
const child5 = document.querySelector('#block:nth-child(5)')
const child6 = document.querySelector('#block:nth-child(6)')
const child7 = document.querySelector('#block:nth-child(7)')
const child8 = document.querySelector('#block:nth-child(8)')

const Childern = [child1, child2, child3, child4, child5,
                  child6, child7, child8];


Childern.map(el => {
    width = el.offsetWidth;
    height = el.offsetHeight;
    random = Math.floor(Math.random() * 50);
    if(random > 25)
    {
        width += random;
        height += random;
    } else
    {
        width -= random;
        height -= random;
    }

    el.style.width = width+"px";
    el.style.height = height+"px";
}) 