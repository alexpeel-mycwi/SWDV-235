var getStatus = function (date) {
    //return "closed" if Monday
    if (date.getDay() === 1) {
        return 'Closed';
    //return "closed" if outside business hours
    } else if (date.getHours() < 10 || date.getHours() > 22) {
        return 'Closed';
    } else return 'Open';
};

window.onload = function () {
    var date = new Date();

    //set date and status on home page
    $('#date').text((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
    $('#status').text(getStatus(date));
};
