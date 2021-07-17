// Moment.js
let currentDate =moment().format("dddd, MMMM Do");
let startHour=9;
let workDayLength=9;
$("#currentDay").text(currentDate);
let list=[];
// get or cleate list of events
    list = JSON.parse(localStorage.getItem('timelist')) || [];
 if (list.length===0){
    for(i=0;i<workDayLength;i++){
        list.push('');
    }
 }
 // show grid
 for (i=0;i<workDayLength;i++){
     let rowDiv=$('<div>');
     rowDiv.addClass('row');
     let hourDiv=$('<div>');
     hourDiv.addClass('hour');
     hourDiv.text(moment(i+startHour, ["HH"]).format("hh A"));
     rowDiv.append(hourDiv);
     $('#container').append(rowDiv);
 }
console.log(list);


