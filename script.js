require('dotenv').config();

const users = [
    { username: process.env.GAST_USER, pin: process.env.GAST_PIN, rank: 'Gast' },
    { username: process.env.INHABER_USER, pin: process.env.INHABER_PIN, rank: 'Inhaber' },
];

let currentUser = null;

document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const pin = document.getElementById('pin').value;

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

function updateHeader() {
    const header = document.getElementById('user-info');
    if (currentUser) {
        header.textContent = `User: ${currentUser.username} | Rank: ${currentUser.rank}`;
    } else {
        header.textContent = `User: Nicht eingeloggt | Rank: -`;
    }
}

function showStartPage() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}

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

function checkPartnershipButtonVisibility() {
    if (currentUser.rank === 'Support' || currentUser.rank === 'Inhaber') {
        document.getElementById('partnership-button').classList.remove('hidden');
    } else {
        document.getElementById('partnership-button').classList.add('hidden');
    }
}

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