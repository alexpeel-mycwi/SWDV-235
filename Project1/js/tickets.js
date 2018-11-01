var calculatePrice = function() {
    clearFormErrors();

    //get variables from user
    var numOfAdults = parseInt($('#numberOfAdults').val());
    var numOfChildren = parseInt($('#numberOfChildren').val());
	var numOfSeniors = parseInt($('#numberOfSeniors').val());
    var sony = $('#sonyToggle').attr('aria-pressed');
    var atmos = $('#atmosToggle').attr('aria-pressed');
    var dinner = $('#dinnerToggle').attr('aria-pressed');
    var total = 0;
    var valid = true;

    //validate input from user
    if (isNaN(numOfAdults) || isNaN(numOfChildren) || isNaN(numOfSeniors)|| numOfAdults === "" || numOfChildren === "" || numOfSeniors === "") {
        valid = false;
        if (isNaN(numOfAdults) || numOfAdults === "") $('#numOfAError').text('Invalid Entry.');
        if (isNaN(numOfChildren) || numOfChildren === "") $('#numOfBError').text('Invalid Entry.');
		if (isNaN(numOfSeniors) || numOfSeniors === "") $('#numOfCError').text('Invalid Entry.');
    }
    else if (numOfAdults + numOfChildren + numOfSeniors > 120 || numOfAdults + numOfChildren + numOfSeniors < 0) {
        valid = false;
        $('#numOfAError').text('Invalid Entry. Total attendants must be between 0 and 120.');
    }

    //calculate total
    if(valid) {
        //calculate attendants amounts
        total += numOfAdults * 12;
        total += numOfChildren * 5;
		total += numOfSeniors * 7;
		
        //calculate extras
        if (sony === 'true') {
            total += (numOfAdults + numOfChildren + numOfSeniors) * 10;
        }
        if (atmos === 'true') {
            total += (numOfAdults + numOfChildren + numofSeniors) * 20;
        }
        if (dinner === 'true') {
            total += (numOfAdults + numOfChildren + numOfSeniors) * 30;
        }
        $('#price').text('Price: $' + total);
    }
};

//clear form errors
var clearFormErrors = function() {
    $('#numOfAError, #numOfBError, #numOfCError').text('');
};

window.onload = function () {
    $("#calculatePriceButton").click (function () {
        calculatePrice();
    });
};
