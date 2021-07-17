// Moment.js
let currentDate =moment().format("dddd, MMMM Do");
let startHour=15;
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
 let currenHour=moment().hour();
 console.log(currenHour);
 for (i=0;i<workDayLength;i++){
     let rowDiv=$('<div>');
     rowDiv.addClass('row');
     let hourDiv=$('<div>');
     hourDiv.addClass('hour col-1 text-center');
     hourDiv.text(moment(i+startHour, ["H"]).format("h A"));
     rowDiv.append(hourDiv);
     let eventDiv=$('<div>');
     if ((i+startHour)<currenHour){
         eventDiv.addClass('past col-10 ');
     }else if((i+startHour)===currenHour){
        eventDiv.addClass('present col-10 ');
     }else{
        eventDiv.addClass('future col-10 ');
     }
     eventDiv.text(list[i]+"rerer");
     rowDiv.append(eventDiv);
     let saveBtn=$('<button>');
     saveBtn.addClass("saveBtn col-1");
     let saveI=$('<i>');
     saveI.addClass("fas fa-save");
     saveBtn.append(saveI);
     rowDiv.append(saveBtn);
     
     $('#container').append(rowDiv);
 }
console.log(list);


