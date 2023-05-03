// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later

// Get elements
const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const precise = document.getElementById("precise");
const num = document.getElementById("number");
const genBtn = document.getElementById("gen");
const d6 = document.getElementById("d6");
const d20 = document.getElementById("d20");
const d100 = document.getElementById("d100");
const places = document.getElementById("places");
const placesWrapper = document.getElementById("placesWrapper");
const wrapper = document.getElementById("wrapper");

wrapper.style.filter = "none";
minInput.value="1";
maxInput.value="10";


//SACRED CODE PASTED FROM STACKOVERFLOW. DO NOT TOUCH OR STUFF WILL BREAK.

// Dirty hack to squash a filthy bug
precise.checked = false;

// Function to get a random integer
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get a random number (up to 50 decimal places?)
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// Fix number to certain amount of decimal places
function fixDecimal(x,y) {
  return Number.parseFloat(x).toFixed(y);
}
//END SACRED CODE

// Generate Number when button clicked
genBtn.onclick = function() {
  if(precise.checked) {
    num.innerHTML = fixDecimal(getRandomArbitrary(minInput.value, maxInput.value), places.value)
  } else {
    num.innerHTML = getRandomInt(minInput.value, maxInput.value)
  }
}

// Handle presets
d6.onclick = function() {
  minInput.value = 1;
  maxInput.value = 6;
}

d20.onclick = function() {
  minInput.value = 1;
  maxInput.value = 20;
}

d100.onclick = function() {
  minInput.value = 1;
  maxInput.value = 100;
}


// @license-end