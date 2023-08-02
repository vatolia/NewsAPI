function showMessage() {
    console.log("Button clicked!");
}
var button = document.querySelector("button");
if (button) {
    button.addEventListener("click", showMessage);
}
