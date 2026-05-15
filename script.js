// SCRIPT.JS

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";

        setTimeout(() => {

            card.style.transition = "all 1s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 300);

    });

});
const text = "Mechanical Robotics Student";
let index = 0;

function typeText() {

    if(index < text.length){

        document.getElementById("typing-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 100);
    }

}

typeText();
window.addEventListener("scroll", () => {

    let scrollTop =
    document.documentElement.scrollTop;

    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress =
    (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
    .style.width = progress + "%";

});