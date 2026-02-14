const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;


    if (button.classList.contains('clear')) {
      currentInput = "";
      display.value = "0";
      return;
    }
    if (button.classList.contains('equal')) {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch {
        display.value = "Wrong";
      }
      return;
    }


    currentInput += value;
    display.value = currentInput;
  });
});

//DEVELOPER112

