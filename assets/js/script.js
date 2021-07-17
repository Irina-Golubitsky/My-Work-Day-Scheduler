// moment js
let currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);
// variables to set worday hours
let startHour = 9; 
let workDayLength = 9;
// get or cleate list of events
let day = localStorage.getItem('current-day') || '';
if (day === currentDate) {
    list = JSON.parse(localStorage.getItem('timelist'));
}
else {
    list = [];
    for (i = 0; i < workDayLength; i++) {
        list.push('');
    }
    localStorage.setItem('timelist', JSON.stringify(list));
}
// show timeblocks
let currenHour = moment().hour();
for (i = 0; i < workDayLength; i++) {
    let rowDiv = $('<div>');
    rowDiv.addClass('row');
    // show hour
    let hourDiv = $('<div>');
    hourDiv.addClass('hour col-1 text-center');
    hourDiv.text(moment(i + startHour, ["H"]).format("h A"));
    rowDiv.append(hourDiv);
    // show event
    let eventArea = $('<textarea>');
        // add id for each textarea
    eventArea.attr('id', 'text' + i);
    if ((i + startHour) < currenHour) {
        eventArea.addClass('past col-10 ');
    } else if ((i + startHour) === currenHour) {
        eventArea.addClass('present col-10 ');
    } else {
        eventArea.addClass('future col-10 ');
    }
    eventArea.text(list[i]);
    rowDiv.append(eventArea);
    // show save button
    let saveBtn = $('<button>');
    saveBtn.attr('data-list-item', i);
    saveBtn.addClass("saveBtn col-1");
    let saveI = $('<i>');
    saveI.addClass("fas fa-save");
    saveBtn.append(saveI);
        // add on.click function
    saveBtn.on('click', function (event) {
        event.preventDefault();
        let curentRow = $(this).attr('data-list-item');
        list[curentRow] = $('#text' + curentRow).val();
            // update localStorage items
        localStorage.setItem('timelist', JSON.stringify(list));
        localStorage.setItem('current-day', currentDate);
    });

    rowDiv.append(saveBtn);

    $('#container').append(rowDiv);
}



