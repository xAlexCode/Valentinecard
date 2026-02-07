// Hämtar knapparna och text-elementet från DOM
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const message = document.querySelector('#message');

yesBtn.addEventListener('click', () => { // När man klickar på Yes-knappen
  message.textContent = "YAY! ❤️ You're my Valentine!"; // Ändrar texten till ett positivt svar
  startHearts(); // Startar funktionen som skapar flytande hjärtan
});

// Funktion som flyttar "No"-knappen till en slumpmässig position
function moveNoButton() {
  const x = Math.random() * 300 - 150; // Slumpmässigt x-värde mellan -150 och +150 pixlar
  const y = Math.random() * 300 - 150; // Slumpmässigt y-värde mellan -150 och +150 pixlar
  noBtn.style.transform = `translate(${x}px, ${y}px)`;  // Flyttar knappen med CSS transform baserat på de slumpade värdena
}

noBtn.addEventListener('mouseover', moveNoButton); // Flyttar knappen när muspekaren nuddar den (dator)
noBtn.addEventListener('touchstart', moveNoButton); // Flyttar knappen när man nuddar den på mobilskärm (touch)

// Extra skydd: om någon lyckas klicka ändå, flytta knappen istället
noBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Hindrar klicket från att registreras
  moveNoButton(); // Flyttar knappen igen
});

// Funktion som skapar flytande hjärtan på skärmen
function startHearts() {
  setInterval(() => { // Skapar ett nytt hjärta var 300 ms
    const heart = document.createElement('span'); // Skapar ett nytt span-element som representerar ett hjärta

    heart.classList.add('heart'); // Lägger till CSS-klassen för animation
    heart.textContent = "❤️"; // Själva hjärt-symbolen en kopierad emoji
    heart.style.left = Math.random() * 100 + "vw"; // Slumpmässig horisontell position över hela skärmen

    document.body.appendChild(heart); // Lägger till hjärtat i dokumentet så det syns

    setTimeout(() => heart.remove(), 3000);}, 300); // Tar bort hjärtat efter 3 sekunder så sidan inte fylls upp
}
