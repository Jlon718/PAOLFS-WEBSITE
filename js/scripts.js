// Get modal elements
var registrationModal = document.getElementById('registrationModal');
var thankYouModal = document.getElementById('thankYouModal');

// Get buttons to open and close modals
var openModalBtns = document.querySelectorAll('.openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var closeThankYouModalBtn = document.getElementById('closeThankYouModal');

// Open registration modal
openModalBtns.forEach(function(button) {
    button.onclick = function() {
        registrationModal.style.display = 'block';
    };
});

// Close registration modal
closeModalBtn.onclick = function() {
    registrationModal.style.display = 'none';
}

// Close thank you modal
closeThankYouModalBtn.onclick = function() {
    thankYouModal.style.display = 'none';
}

// Close modal if clicked outside of modal content
window.onclick = function(event) {
    if (event.target == registrationModal) {
        registrationModal.style.display = 'none';
    } else if (event.target == thankYouModal) {
        thankYouModal.style.display = 'none';
    }
}

// Handle form submission
document.getElementById('registrationForm').onsubmit = function(e) {
    e.preventDefault();

    // Hide the registration modal
    registrationModal.style.display = 'none';
    
    // Show the thank you modal
    thankYouModal.style.display = 'block';
};
