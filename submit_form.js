document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Construct the data to send
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Example of sending form data using fetch (replace with your actual endpoint)
    fetch('https://example.com/submit_form_endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log('Form submission successful:', data);
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset(); // Reset form after submission
    })
    .catch(error => {
        console.error('There was an error with form submission:', error);
        alert('There was an error submitting the form. Please try again later.');
    });
});
