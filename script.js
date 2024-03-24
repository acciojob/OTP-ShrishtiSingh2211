//your JS code here. If required.
let inputs = Array.from(document.querySelectorAll('.code'));

inputs.forEach((input, i) => {
  input.addEventListener('input', () => {
    if(input.value.length === 1) {
      if(inputs[i+1]) {
        inputs[i+1].focus();
      }
    }
  });

  input.addEventListener('keydown', (event) => {
    if(event.key === "Backspace" && i > 0 && input.value.length === 0) {
      inputs[i-1].focus();
    }
  });
});