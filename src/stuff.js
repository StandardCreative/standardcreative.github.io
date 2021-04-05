setTimeout(function() {
  const input = document.getElementById('pass')
  const submit = document.getElementById('enter')
  console.log('things;');

  submit.addEventListener('click', () => {
    const value = input.value;
    input.value = '';
  });
}, 0);