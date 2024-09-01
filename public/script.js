document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    fetch('http://localhost:3000/api/saveUserData', {
        // Replace with your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = 'User data saved successfully!';
    })
    .catch(error => {
        document.getElementById('message').textContent = 'Error saving user data.';
        console.error('Error:', error);
    });
});
