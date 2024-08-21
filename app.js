function generatePassword() {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const specialChars = '!@#$%&*()_+[]{}|;:,.<>?'
    const allChars = lowerCase + upperCase + numbers + specialChars;

    let password = '';
    const passwordLength = 11;

    for(let x = 0; x < passwordLength; x++) {
        const randomIndex = Math.floor(Math.random() * allChars.length)
        password = password + allChars[randomIndex];
    }

    console.log("Generate Password: ", password)

    document.getElementById('password').value = password;

}

document.querySelector('button').addEventListener("click", generatePassword);
