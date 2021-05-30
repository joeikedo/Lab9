//Console log demo button
document.getElementById("log-button").addEventListener("click", function() {
    console.log(document.getElementById('log-button').innerText);
  });

//Console error demo
document.getElementById("error-button").addEventListener("click", function() {
    console.error(document.querySelector('legend').innerText);
});

//Console table 
document.getElementById("table-button").addEventListener("click", function() {
    console.table(document.querySelectorAll('button'));
});


