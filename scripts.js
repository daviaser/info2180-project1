/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.newsletter form');
    var message = document.querySelector('.newsletter .message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var emailInput = document.getElementById('email');
        var email = emailInput.value;

        if (email === '') {
            message.textContent = 'Please enter a valid email address.';
        } else {
            form.remove();
            message.textContent = 'Thank you! Your email address, ' + email + ' has been added to our mailing list!';
        }

        // You can also reset the form if needed
        //form.reset();
    });
});
