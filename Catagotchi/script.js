// status variabelen
let hunger = 5;
let energy = 5;
let cleanliness = 5;

// elements ophalen
const hungerSpan = document.getElementById("hunger");
const energySpan = document.getElementById("energy");
const cleanlinessSpan = document.getElementById("cleanliness");
const messageDiv = document.getElementById("message")
const catImage = document.getElementById("cat-img");
const alertSound = document.getElementById("alertSound")

// buttons ophalen
const feedBtn = document.getElementById("feed-btn");
const sleepBtn = document.getElementById("sleep-btn");
const washBtn = document.getElementById("wash-btn");
const wearHatBtn = document.getElementById("wear-hat");
const wearGlassesBtn = document.getElementById("wear-glasses");
const wearScarfBtn = document.getElementById("wear-scarf");
const removeAccessoryBtn = document.getElementById("remove-accessory");

// status bijwerken 
function updateStatus() {
    hungerSpan.textContent = hunger;
    energySpan.textContent = energy;
    cleanlinessSpan.textContent = cleanliness;

// audio afspelen
function playAlertSound() {
    alertSound.currentTime = 0; // Start geluid opnieuw als het al speelt
    alertSound.play();
}

    // Verander de kat met de status
    if (hunger >= 8) {
        catImage.src = "images/hungry-cat.jpg" //plaatje veranderen
        messageDiv.textContent = "Ik heb honger, geef me wat eten"; //bericht weergeven
        messageDiv.style.color = "red"; 
        messageDiv.style.display = "block"; 
        playAlertSound()  // geluid activeren
    } else if (energy <= 3) {
        catImage.src = "images/sleepy-cat.jpg";  //plaatje veranderen
        messageDiv.textContent = "Ik ben zo moe, ik moet even slapen";//bericht weergeven
        messageDiv.style.color = "red"; 
        messageDiv.style.display = "block"; 
        playAlertSound()  // geluid activeren
    } else if (cleanliness <= 3.5) {
        catImage.src = "images/dirty-cat.jpg"; //plaatje veranderen
        messageDiv.textContent = "Ik ben vies, je moet me wassen";//bericht weergeven
        messageDiv.style.color = "red"; 
        messageDiv.style.display = "block"; 
        playAlertSound()  // geluid activeren
    } else {
        catImage.src = "images/cat.tama.png"; // plaatje weer terug veranderen in de normale kat
        messageDiv.style.display = "none";
    }

    // Deactivate knoppen als de kat verzorgd moet worden
    if (hunger >= 8 || energy <= 3 || cleanliness <= 3.5) {
        wearHatBtn.disabled = true;
        wearGlassesBtn.disabled = true;
        wearScarfBtn.disabled = true;
    } else {
        wearHatBtn.disabled = false;
        wearGlassesBtn.disabled = false;
        wearScarfBtn.disabled = false;
    }
}



// Acties voor de knoppen
feedBtn.addEventListener("click", () => {
    hunger = Math.max(0, hunger - 1);
    updateStatus();  // status updaten
});

sleepBtn.addEventListener("click", () => {
    energy = Math.min(10, energy + 1);
    updateStatus();  // status updaten
});

washBtn.addEventListener("click", () => {
    cleanliness = Math.min(10, cleanliness + 1);
    updateStatus();  // status updaten
});
wearHatBtn.addEventListener("click", () => {
    catImage.src = "images/cat-hat.jpg";  // kat met een hoed
});
wearGlassesBtn.addEventListener("click", () => {
    catImage.src = "images/cat-glasses.jpeg"; // Kat met zonnebril
});
wearScarfBtn.addEventListener("click", () => {
    catImage.src = "images/cat-scarf.jpg"; // Kat met sjaal
});
removeAccessoryBtn.addEventListener("click", () => {
    catImage.src = "images/cat.tama.png"; // normale kat
});



// Status verslechtert over tijd
setInterval(() => {
    hunger = Math.min(10, hunger + 1);
    energy = Math.max(0, energy - 1);
    cleanliness = Math.max(0, cleanliness - 0.5);
    updateStatus();
}, 5000);

// Initialiseer de status bij het laden van de pagina
updateStatus();


