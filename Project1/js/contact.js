var $ = function (selector) {
    switch (selector.charAt(0)) {
        case '.':
            return document.getElementsByClassName(selector.substring(1));
        case '#':
            return document.getElementById(selector.substring(1));
        default:
            return document.getElementsByTagName(selector);
    }
};

var submitForm = function () {
    var firstName = $('#firstName').value;
    var lastName = $('#lastName').value;
    var email = $('#inputEmail').value;
    var emailAt = false;
    var emailDot = false;
    var valid = true;

    //Form Validation
    if (firstName == '') {
        $('#firstError').textContent = 'Please provide a first name.';
        valid = false;
    } else $('#firstError').textContent = '';
    if (lastName == '') {
        $('#lastError').textContent = 'Please provide a last name.';
        valid = false;
    } else $('#lastError').textContent = '';
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
        sessionStorage.email = email;
        if (!$('#genFeedback').checked && !$('#privViewing').checked) sessionStorage.reason = 'none';
        else {
            if ($('#genFeedback').checked) {
                sessionStorage.reason ? sessionStorage.reason += ', ' + 'general feedback' : sessionStorage.reason = 'general feedback';
            }
            if ($('#privViewing').checked) {
                sessionStorage.reason ? sessionStorage.reason += ', ' + 'private viewing' : sessionStorage.reason = 'private viewing';
            }
			
        }
        sessionStorage.comments = $('#commentsArea').value;
		
		$('#contact').submit();

        //window.location.href = "contact-success.html";
    }

};