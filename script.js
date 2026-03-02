document.getElementById('btn').onclick = function() {
  const num = Number(document.getElementById('ip').value);
  const output = document.getElementById('output');

  new Promise(resolve => {
    setTimeout(() => {
      output.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
  .then(n => new Promise(resolve => {
    setTimeout(() => {
      const result = n * 2;
      output.textContent = `Result: ${result}`;
      resolve(result);
    }, 2000);
  }))
  .then(n => new Promise(resolve => {
    setTimeout(() => {
      const result = n - 3;
      output.textContent = `Result: ${result}`;
      resolve(result);
    }, 1000);
  }))
  .then(n => new Promise(resolve => {
    setTimeout(() => {
      const result = n / 2;
      output.textContent = `Result: ${result}`;
      resolve(result);
    }, 1000);
  }))
  .then(n => new Promise(resolve => {
    setTimeout(() => {
      const result = n + 10;
      output.textContent = `Final Result: ${result}`;
      resolve(result);
    }, 1000);
  }));
};
