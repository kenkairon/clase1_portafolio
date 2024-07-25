// Add JS here
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (!name || !email || !message) {
        event.preventDefault();
        alert('Por favor, complete todos los campos.');
    }
});