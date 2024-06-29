document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('myForm').onsubmit = function(event) {
        event.preventDefault(); 
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (name === "") {
            alert("Name must be filled out");
            return false;
        }
        if (!emailPattern.test(email)) {
            alert("Invalid email address");
            return false;
        }
        updateContent(`Hello, ${sanitizeInput(name)}! Your email is ${sanitizeInput(email)}.`);
        return false;
    };
});
function updateContent(content) {
    var display = document.getElementById("display");
    display.textContent = content;
}
function sanitizeInput(input) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(input));
    return div.innerHTML;
}
