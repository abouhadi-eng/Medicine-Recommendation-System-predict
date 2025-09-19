function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value.trim();
    const patientId = document.getElementById('patientId').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validate name (only alphabet)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("Patient name should only contain alphabets.");
        return false;
    }

    // Validate patient ID (only numbers)
    const patientIdRegex = /^[0-9]+$/;
    if (!patientIdRegex.test(patientId)) {
        alert("Patient ID should only contain numbers.");
        return false;
    }

    // Validate phone number (exactly 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number should be exactly 10 digits.");
        return false;
    }

    // Show confirmation and redirect if everything is valid
    let confirmation = confirm("Do you want to submit the form?");
    if (confirmation) {
        window.location.href = 'http://127.0.0.1:5000'; // Replace with your next page
    }
}
