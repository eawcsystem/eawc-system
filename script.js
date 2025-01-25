// Benutzer- und PIN-Daten
const users = [
    { username: 'Gast', pin: 'Gast2025', rank: 'Gast' },
    { username: 'eawc-marcel', pin: 'Marcel2009', rank: 'Inhaber' },   
    { username: 'eawc-marc', pin: 'Marc2009', rank: 'stv.Inhaber' },
    { username: 'support-user', pin: 'Support2025', rank: 'Support' }, // Example Support user
    { username: 'admin-user', pin: 'Admin2025', rank: 'Admin' } // Example Admin user
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
        checkAdminButtonVisibility();
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
    document.getElementById('admin-page').classList.add('hidden');
    document.getElementById('support-button').classList.add('hidden');
    document.getElementById('admin-button').classList.add('hidden');
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
function checkAdminButtonVisibility() {
    if (currentUser.rank === 'Admin' || currentUser.rank === 'Inhaber') {
        document.getElementById('admin-button').classList.remove('hidden');
    } else {
        document.getElementById('admin-button').classList.add('hidden');
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

function showAdminPage() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('Admin-page').classList.remove('hidden');
}

function showStartPageFromAdmin() {
    document.getElementById('Admin-page').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}
