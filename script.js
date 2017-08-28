/*This is a days until countdown timer. Written by Randal Egan just for fun. Displays the days, hours, minutes, and seconds until a given date from the current time. 
*/

const USER_DATE = new Date("11/14/2017 13:00:00");
//new Date(prompt("Please enter a date in the format: \"mm/dd/yyyy (optional 24hr: hh:mm:ss)\""));
//11/14/2017 13:00:00 this is the date originally wanting to see time until

var timeUntil =(function(){
    var dateNow = new Date();
    var timeDiff = USER_DATE-dateNow;
    if(timeDiff<=0) return "Date entered must be a future date. Reload page and try again.";
    var output = "";
    var daysUntil = Math.floor(timeDiff/8.64e7);
    timeDiff -= Math.floor(daysUntil*8.64e7);//remove days from countdown since we calculated them already. Without this it will calc 81 days in hours. Must multiply to turn days back into millisecond count.
    var hoursUntil = Math.floor(timeDiff/3.6e6);
    timeDiff -= Math.floor(hoursUntil*3.6e6);//get rid of hours

    var minutesUntil = Math.floor(timeDiff/60000);
    timeDiff -= Math.floor(minutesUntil*60000);//get rid of minutes

    var secondsUntil = Math.floor(timeDiff/1000);
    if(daysUntil===0 && hoursUntil===0 && minutesUntil===0 && secondsUntil===0) alert("It's here!!");
    output += daysUntil + " days, " + hoursUntil + " hours, " + minutesUntil + " minutes, " + secondsUntil + " seconds until " + "TATTOO!!!!";//USER_DATE.toDateString();
    return output;
    
    
});

$(document).ready(function() {
    var $h1 = $("h1");
    $h1.empty();
    $h1.append(timeUntil);
    
    window.setInterval(function(){
        time_until = timeUntil;
        $h1.empty();
        $h1.append(timeUntil);
    },1000);


});//end doc ready