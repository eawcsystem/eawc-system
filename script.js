require('dotenv').config();
// Benutzer- und PIN-Daten
const users = [
    { username: process.env.GUEST_USERNAME, pin: process.env.GUEST_PIN, rank: 'Gast' },
    { username: 'EAWCMarcel', pin: 'Marcel__2007', rank: 'Inhaber' },
];

let currentUser = null;

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
        checkSupportButtonVisibility();
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
    document.getElementById('Support-page').classList.add('hidden');
    document.getElementById('moderator-page').classList.add('hidden');
    document.getElementById('support-button').classList.add('hidden');
    document.getElementById('moderator-button').classList.add('hidden');
}

// Funktion, um die Sichtbarkeit des Support-Buttons zu überprüfen
function checkSupportButtonVisibility() {
    if (currentUser.rank === 'Support' || currentUser.rank === 'Inhaber') {
        document.getElementById('support-button').classList.remove('hidden');
    } else {
        document.getElementById('support-button').classList.add('hidden');
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

function showSupportPage() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('Support-page').classList.remove('hidden');
}

function showStartPageFromSupport() {
    document.getElementById('Support-page').classList.add('hidden');
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
