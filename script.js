// Benutzer- und PIN-Daten
const users = [
    { username: 'Gast' , 
      pin: 'Gast2025', 
      rank: 'Gast' },
    
    { username: 'EAWCMarcel', 
      pin: 'Marcel__2007', 
     rank: 'Inhaber' },
];

let currentUser = null;
let currentLanguage = 'de';

// Event Listener für das Login-Formular
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const pin = document.getElementById('pin').value;

    // Überprüfen, ob Benutzername und PIN übereinstimmen
    const user = users.find(u => u.username === username && u.pin === pin);

    if (user) {
        currentUser = user;
        updateHeader();
        showStartPage();
        checkPartnershipButtonVisibility();
        checkModeratorButtonVisibility();
    } else {
        alert('Benutzername oder PIN sind falsch!');
    }
});

// Funktion, um die Benutzerinformationen im Header anzuzeigen
function updateHeader() {
    const header = document.getElementById('user-info');
    if (currentUser) {
        header.textContent = `User: ${currentUser.username} | Rank: ${currentUser.rank}`;
    } else {
        header.textContent = `User: Nicht eingeloggt | Rank: -`;
    }
}

// Funktion, die den Login-Bereich ausblendet und die Startseite anzeigt
function showStartPage() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}

// Funktion, um den Benutzer abzumelden
function logout() {
    currentUser = null;
    updateHeader();
    document.getElementById('login-container').classList.remove('hidden');
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('Partnership-page').classList.add('hidden');
    document.getElementById('moderator-page').classList.add('hidden');
    document.getElementById('partnership-button').classList.add('hidden');
    document.getElementById('moderator-button').classList.add('hidden');
}

// Funktion, um die Sichtbarkeit des Partnerschaft-Buttons zu überprüfen
function checkPartnershipButtonVisibility() {
    if (currentUser.rank === 'Support' || currentUser.rank === 'Inhaber') {
        document.getElementById('partnership-button').classList.remove('hidden');
    } else {
        document.getElementById('partnership-button').classList.add('hidden');
    }
}

// Funktion, um die Sichtbarkeit des Admin-Buttons zu überprüfen
function checkModeratorButtonVisibility() {
    if (currentUser.rank === 'Admin' || currentUser.rank === 'Inhaber') {
        document.getElementById('moderator-button').classList.remove('hidden');
    } else {
        document.getElementById('moderator-button').classList.add('hidden');
    }
}

function showPartnershipPage() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('Partnership-page').classList.remove('hidden');
}

function showStartPageFromPartnership() {
    document.getElementById('Partnership-page').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}

function showModeratorPage() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('Moderator-page').classList.remove('hidden');
}

function showStartPageFromAdmin() {
    document.getElementById('Moderator-page').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    translateContent();
}

// Funktion, um den Inhalt basierend auf der ausgewählten Sprache zu übersetzen
function translateContent() {
    document.querySelectorAll('[data-de]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });
}
