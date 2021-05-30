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

//Console dir
document.getElementById("dir-button").addEventListener("click", function() {
    console.dir(document.head);
});

//Console dir
document.getElementById("dirxml-button").addEventListener("click", function() {
    console.dirxml(document);
});

//Console group
const label = 'An example group:';
document.getElementById("group-start").addEventListener("click", function() {
    console.group(label);
    console.info('These');
    console.info('are in');
    console.info('the example');
    console.info('group!');
});

//Console group end
document.getElementById("group-end").addEventListener("click", function() {
    console.groupEnd(label);
});

//Console time start
document.getElementById("time-start").addEventListener("click", function() {
    console.time();
});

//Console time end
document.getElementById("time-end").addEventListener("click", function() {
    console.timeEnd();
});

//Console trace
document.getElementById("trace-button").addEventListener("click", function() {
    const first = () => { second(); };
    const second = () => { third(); };
    const third = () => { fourth(); };
    const fourth = () => { console.trace(); };
    first();
});


//TODO if time, go back and make this more complicated like involving the actual calculator thing!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//TODO use finally also I guess???        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Try catch block

try {
    let test = document.getElementById('try-catch-button'); //Commented out in index.html so will be undefined
    console.log(test.innerText); 
  
  } catch (err) { 
    console.error('This is my try-catch error');
  }
  

  
class myCustomError extends Error {
    constructor(message) {
    super(message);
    this.name = "My Custom Error";
    }
}

/* //Don't need this really I don't think
try{
    let firstNum = document.getElementById('first-num').innerText;
    if(typeof(firstNum) != Number){
        throw new myCustomError('Not a number');
    }
} catch(err){
    if(err instanceof myCustomError){
        console.error('My custom error thrown, first item not a number')
    }
}
*/


let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
let calculateBtn = document.querySelector('#calculate');
    calculateBtn.addEventListener('click', () => {
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      //Put some error checks here probably
      if(typeof(firstNum) != Number){
          throw new myCustomError('Not a number');//If the first field is a letter or something, you get this error
      }


      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});


//Oh ok good, this works for myCustomError... for some reason... ok whatever
window.onerror = function (msg, url, lineNo, columnNo, error) {
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1){
      alert('Script Error: See Browser Console for Detail');
    } else {
      var message = [
        'Message: ' + msg,
        'URL: ' + url,
        'Line: ' + lineNo,
        'Column: ' + columnNo,
        'Error object: ' + JSON.stringify(error)
      ].join(' - ');
  
      //alert(message);
      console.log('window.onerror was triggered')
      console.error('This is my window.onerror error')
    }
  
    return false;
  };

  TrackJS.track('Testing TrackJS!');