const from_name = document.getElementById('from_name');
const from_number = document.getElementById('from_number');
const from_check = document.getElementById('from_check');
const from_email = document.getElementById('from_email');
const from_message = document.getElementById('from_message');
const from_terms = document.getElementById('from_terms');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');

window.onload = function () {
    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            this.contact_number.value = null;
            this.user_name.value = null;
            this.user_email.value = null;
            this.message.value = null;
            this.check.value = null;
            this.terms.value = null;

            e.preventDefault();

            if (from_name.value.length < 3) {
                errorElement.innerHTML = 'Your name should be at least 3 characters long.';
                return false;
            }

            if (!(from_email.value.includes('.') && (email.value.includes('@')))) {
                errorElement.innerHTML = 'Please enter a valid email address.';
                return false;
            }

            if (!emailIsValid(from_email.value)) {
                errorElement.innerHTML = 'Please enter a valid email address.';
                return false;
            }

            if (from_message.value.length < 10) {
                errorElement.innerHTML = 'Please write a longer message.';
                return false;
            }
            if (from_number.value.lenght >= 10) {
                errorElement.innerHTML = 'Please write valid number.';
                return false;
            }

            errorElement.innerHTML = '';
            successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.';

            e.preventDefault();
            setTimeout(function () {
                successMsg.innerHTML = '';
                document.getElementById('contact-form').reset();
            }, 6000);

            return true;



            // these IDs from the previous steps
            emailjs.sendForm("contact_service", "contact-form", this).then(
                function () {
                    console.log("SUCCESS!");
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
        });
};


function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("from_name").value,
        from_number: document.getElementById("from_number").value,
        from_email: document.getElementById("from_email").value,
        from_message: document.getElementById("from_message").value,
        from_check: document.getElementById("from_check").value,
        from_terms: document.getElementById("from_terms").value

    };
    emailjs.send('service_o3c59bj', 'template_xcphb3k', tempParams)
        .then(function (res) {
            console.log("success", res.status);
        })

}



const emailIsValid = from_email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);