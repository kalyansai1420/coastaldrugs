// function sendMail(params) {
//     var tempParams = {
//         from_name: document.getElementById("from_name").value,
//         from_number: document.getElementById("from_number").value,
//         from_email: document.getElementById("from_email").value,
//         from_message: document.getElementById("from_message").value,
//         from_check: document.getElementById("from_check").value,
//         from_terms: document.getElementById("from_terms").value

//     };
//     emailjs.send('template1', 'template_id', tempParams)
//         .then(function (res) {
//             console.log("success", res.status);
//         })

// }
function sendMail() {
    var fromName = document.getElementById("from_name").value;
    var fromNumber = document.getElementById("from_number").value;
    var fromEmail = document.getElementById("from_email").value;
    var fromMessage = document.getElementById("from_message").value;
    var fromCheck = document.getElementById("from_check").checked;

    // Regular expression for phone number (accepts only digits and optional dashes)
    var phoneRegex = /^\d+(-\d+)*$/;

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset error messages
    document.getElementById("from_name_error").textContent = "";
    document.getElementById("from_number_error").textContent = "";
    document.getElementById("from_email_error").textContent = "";
    document.getElementById("from_message_error").textContent = "";

    // Check conditions
    var isValid = true;

    if (fromName.length < 4) {
        document.getElementById("from_name_error").textContent = "Name should have at least 4 characters";
        isValid = false;
    }

    if (!phoneRegex.test(fromNumber)) {
        document.getElementById("from_number_error").textContent = "Phone number should be valid";
        isValid = false;
    }

    if (!emailRegex.test(fromEmail)) {
        document.getElementById("from_email_error").textContent = "Email should be valid";
        isValid = false;
    }

    if (fromMessage.length < 10) {
        document.getElementById("from_message_error").textContent = "Message should have at least 10 characters";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // If all conditions pass, send the email
    var tempParams = {
        from_name: fromName,
        from_number: fromNumber,
        from_email: fromEmail,
        from_message: fromMessage,
        from_check: fromCheck
    };

    emailjs.send('template1', 'template_id', tempParams)
        .then(function (res) {
            console.log("success", res.status);
        });
}


