// TypeScript code goes here
// You can use JavaScript code directly in this script file if you don't want to use TypeScript

// Example TypeScript code to demonstrate the usage
function showMessage() {
    console.log("Button clicked!");
  }
  
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", showMessage);
  }