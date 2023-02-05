const addButton = document.getElementById("add-button");
const resetButton = document.getElementById("reset-button");
const fineButton = document.getElementById("fine-button");
const clearButton = document.getElementById("clear-button");
const totalSavings = document.getElementById("total-savings");
const totalFines = document.getElementById("total-fines");
const tripsTaken = document.getElementById("trips-taken");
const tripsToCoverFine = document.getElementById("trips-to-cover-fine");

const jsConfetti = new JSConfetti()
function confettiFY(){
  jsConfetti.addConfetti({
    emojis: ['🦔💨', '💵', '🌸', '✨'],
    emojiSize: 100,
    confettiNumber: 20,
    }
)}

const jsConfettiSad = new JSConfetti()
function confettiFY_SAD(){
  jsConfettiSad.addConfetti({
    emojis: ['😭', '🖕',  '💩'],
    emojiSize: 150,
    confettiNumber: 10,
    }
)}

let total = localStorage.getItem('total') || 0;
  if (total < 0) {
    totalSavings.style.color = '#ff6666';
  } else {
    totalSavings.style.color = '#00CC00'
}
let total_fines = localStorage.getItem('total_fines') || 0;
let trips = localStorage.getItem('trips') || 0;

total = parseFloat(total);
total_fines = parseFloat(total_fines);
trips = parseInt(trips);

totalSavings.innerHTML = total.toFixed(2) + "€";
tripsTaken.innerHTML = trips;
totalFines.innerHTML = total_fines.toFixed(2) + "€";
	

addButton.addEventListener("click", confettiFY)
addButton.addEventListener("click", function () {
  total += 3.10;
  trips += 1;
  totalSavings.innerHTML = total.toFixed(2) + "€";
  tripsTaken.innerHTML = trips;
  localStorage.setItem("total", total.toFixed(2));
  localStorage.setItem("trips", trips);
  localStorage.setItem("total_fines", total_fines.toFixed(2));
  if (total < 80) {
    tripsToCoverFine.innerHTML = Math.ceil((80 - total) / 3.10);
  } else {
    tripsToCoverFine.innerHTML = `${Math.floor((total - 80) / 3.10)} extra trips`;
  }
  if (total < 0) {
    totalSavings.style.color = '#ff6666';
  } else {
    totalSavings.style.color = '#00CC00';
  }
});


fineButton.addEventListener("click", confettiFY_SAD)
fineButton.addEventListener("click", function () {
  total -= 80;
  totalSavings.innerHTML = total.toFixed(2) + "€";
  total_fines -= 80;
  totalFines.innerHTML = total_fines.toFixed(2) + "€";
  localStorage.setItem("total", total.toFixed(2));
  localStorage.setItem("trips", trips);
  localStorage.setItem("total_fines", total_fines.toFixed(2));
  if (total < 80) {
    tripsToCoverFine.innerHTML = Math.ceil((80 - total) / 3.10);
  } else {
    tripsToCoverFine.innerHTML = `${Math.floor((total - 80) / 3.10)} extra trips`;
  }
  if (total < 0) {
    totalSavings.style.color = '#ff6666';
  } else {
    totalSavings.style.color = '#00CC00';
  }

});

clearButton.addEventListener("click", function () {
 localStorage.clear();
  total = 0;
  trips = 0;
  tripsToCoverFine.innerHTML = Math.ceil((80 - total) / 3.10);
  totalSavings.innerHTML = total.toFixed(2) + "€";
  tripsTaken.innerHTML = trips;
  total_fines = 0;
  totalFines.innerHTML = total_fines.toFixed(2) + "€";

});




