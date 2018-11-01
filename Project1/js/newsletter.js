var $ = function (selector) {
    switch(selector.charAt(0)) {
        case '.':
            return document.getElementsByClassName(selector.substring(1));
        case '#':
            return document.getElementById(selector.substring(1));
        default:
            return document.getElementsByTagName(selector);
    }
};

var submitNewsletterForm = function () {
    var firstName = $('#firstName').value;
    var lastName = $('#lastName').value;
    var email = $('#inputEmail').value;
    var emailAt = false;
    var emailDot = false;
    var valid = true;

    //Form Validation
    if (firstName == '') {
        $('#firstError').textContent = 'Please provide a valid first name.';
        valid = false;
    } else $('#firstError').textContent = '';
    if (lastName == '') {
        $('#lastError').textContent = 'Please provide a valid last name.';
        valid = false;
    } else $('#firstError').textContent = '';
    for (var i = 0; i < email.length; ++i) {
        if(email.charAt(i) === '@') emailAt = true;
        if(email.charAt(i) === '.') emailDot = true;
    }
    if (!emailAt || !emailDot) {
        $('#emailError').textContent = 'Please provide a valid email address.';
        valid = false;
    } else $('#emailError').textContent = '';
    //Submit form if valid
    if (!valid) {
		return;
	} else {
        //store form data in sessionStorage for acknowledgement page
        sessionStorage.firstName = firstName;
        sessionStorage.lastName = lastName;
        sessionStorage.email = email1;

        $('#newsletter').submit();
		
        //window.location.href = "newsletter-success.php";
		
		
    }
};