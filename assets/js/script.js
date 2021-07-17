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
     
     // show hour
     let hourDiv=$('<div>');
     hourDiv.addClass('hour col-1 text-center');
     hourDiv.text(moment(i+startHour, ["H"]).format("h A"));
     rowDiv.append(hourDiv);
     // show event
     let eventArea=$('<textarea>');
     eventArea.attr('id', 'text'+i);
     if ((i+startHour)<currenHour){
         eventArea.addClass('past col-10 ');
     }else if((i+startHour)===currenHour){
        eventArea.addClass('present col-10 ');
     }else{
        eventArea.addClass('future col-10 ');
     }
     eventArea.text(list[i]+"rerer");
     rowDiv.append(eventArea);
     // show save button
     let saveBtn=$('<button>');
     saveBtn.attr('data-list-item', i);
     saveBtn.addClass("saveBtn col-1");
     
     let saveI=$('<i>');
     saveI.addClass("fas fa-save");
     saveBtn.append(saveI);
     saveBtn.on('click', function(event){
        event.preventDefault();
       let cuurentRow=$(this).attr('data-list-item');
        list[cuurentRow]=$('#text'+cuurentRow).val();
      localStorage.setItem('timelist',JSON.stringify(list));
     });
     
     rowDiv.append(saveBtn);
     
     $('#container').append(rowDiv);
    }
console.log(list);


