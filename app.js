const btn = document.getElementById("btn");
const color = document.querySelector(".color");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
btn.addEventListener('click', function () {
    // Get a random number for Clicker between 0 and 3
    document.body.style.backgroundColor = "rgba(" + getRandomInt(256) + "," + getRandomInt(256) + "," + getRandomInt(256) + ")";
    var bgColor = document.body.style.backgroundColor;
    color.textContent = bgColor;
    color.style.color = bgColor;
})