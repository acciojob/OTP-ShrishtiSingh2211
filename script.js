//your JS code here. If required.
let inputs = Array.from(document.getElementsByClassName('code')); // Get all input fields
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {  // Add input event listener
    if (input.value) {  // If a digit is entered
      if (index < inputs.length - 1) {  // If it's not the last input field
        inputs[index + 1].focus();  // Focus on the next input field
      }
    }
  });
  input.addEventListener('keydown', (event) => {  // Add keydown event listener
    if (event.key === "Backspace") {  // If backspace is pressed
      if (index > 0) {  // If it's not the first input field
        inputs[index - 1].focus();  // Focus on the previous input field
      }
    }
  });
});