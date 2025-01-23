// Benutzer- und PIN-Daten
const users = [
    { username: 'Gast', pin: 'Gast2025', rank: 'Gast' },
    { username: 'eawc-marcel', pin: 'Marcel2009', rank: 'Inhaber' },   
    { username: 'eawc-marc', pin: 'Marc', rank: 'Inhaber' },
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
}
