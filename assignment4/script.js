const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()-_=+[{]}|;:,<.>/?';

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;
    const excludeAmbiguous = document.getElementById('ambiguous').checked;

    let chars = '';
    if (includeLowercase) chars += lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecial) chars += specialChars;
    if (excludeAmbiguous) chars = chars.replace(/[1lIo0O]/g, '');

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copyToClipboard() {
    const passwordInput = document.getElementById('password');
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyToClipboard);
