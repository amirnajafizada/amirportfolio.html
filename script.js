// Typing Effect for "Programmer" and "Web Designer"
const textElement = document.getElementById('typing-text');
const roles = ["Programmer", "Web Designer"];
let index = 0;

function typeRoles(role) {
    let roleIndex = 0;
    textElement.textContent = ""; // Clear previous text

    function typing() {
        if (roleIndex < role.length) {
            textElement.textContent += role.charAt(roleIndex);
            roleIndex++;
            setTimeout(typing, 100); // Adjust typing speed here
        } else {
            setTimeout(eraseText, 1000); // Delay before erasing
        }
    }

    typing(); // Start typing the role
}

function eraseText() {
    let text = textElement.textContent;
    let length = text.length;

    function erasing() {
        if (length > 0) {
            textElement.textContent = text.substring(0, length - 1);
            length--;
            setTimeout(erasing, 50); // Adjust erasing speed
        } else {
            index = (index + 1) % roles.length; // Move to the next role
            setTimeout(() => typeRoles(roles[index]), 500); // Restart typing
        }
    }

    erasing();
}

window.onload = () => typeRoles(roles[index]); // Start the typing effect on load
