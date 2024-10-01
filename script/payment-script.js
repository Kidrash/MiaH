document.addEventListener('DOMContentLoaded', function() {
    const methodButtons = document.querySelectorAll('.method-btn');
    const methodForms = document.querySelectorAll('.method-form');
    const paymentForm = document.getElementById('paymentForm');
    const confirmationSection = document.querySelector('.confirmation');

    // Payment method selection
    methodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const method = this.dataset.method;
            
            // Update active button
            methodButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show relevant form
            methodForms.forEach(form => {
                form.style.display = form.id === `${method}-form` ? 'block' : 'none';
            });
        });
    });

    // Form submission
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic form validation
        const activeMethod = document.querySelector('.method-btn.active');
        if (!activeMethod) {
            alert('Please select a payment method.');
            return;
        }

        const activeForm = document.querySelector('.method-form[style="display: block;"]');
        const inputs = activeForm.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ffd700';
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simulate payment processing
        simulatePayment();
    });

    function simulatePayment() {
        // Hide the payment form
        paymentForm.style.display = 'none';

        // Show a loading message
        const loadingMsg = document.createElement('p');
        loadingMsg.textContent = 'Processing payment...';
        paymentForm.parentNode.insertBefore(loadingMsg, paymentForm);

        // Simulate a delay for payment processing
        setTimeout(() => {
            // Remove loading message
            loadingMsg.remove();

            // Show confirmation section
            confirmationSection.style.display = 'block';

            // Set up download button
            const downloadBtn = document.getElementById('download-btn');
            downloadBtn.addEventListener('click', function() {
                alert('Your download is starting. Thank you for your purchase!');
                // In a real scenario, this would trigger the actual file download
            });
        }, 2000); // 2 second delay
    }
});