
const textArea = document.getElementById('myTextArea');
const counter = document.getElementById('charCounter');
const submitBtn = document.getElementById('submitBtn');


const MAX_CHARS = 200;


textArea.addEventListener('input', () => {
  const remaining = MAX_CHARS - textArea.value.length;

 
  counter.textContent = `${remaining} characters remaining`;

  
  counter.classList.remove('warn', 'error');

 
  if (remaining <= 20 && remaining >= 0) {
    counter.classList.add('warn');
  }

  
  if (remaining < 0) {
    counter.classList.add('error');
  }

  
  submitBtn.disabled = remaining < 0;
});
