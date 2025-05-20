let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput || '0';
}

function calculate() {
  try {
    let result = eval(currentInput);
    if (!isFinite(result)) throw new Error("Math Error");
    currentInput = result.toString();
  } catch (error) {
    currentInput = '';
    display.innerText = 'Error';
    return;
  }
  updateDisplay();
}

// 🌙 Theme Toggle
const toggleThemeBtn = document.getElementById('toggleTheme');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
  document.body.classList.add('light');
  toggleThemeBtn.textContent = '☀️';
}

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  toggleThemeBtn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
