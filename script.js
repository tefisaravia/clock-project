//Time variables for Messages & images
var time = new Date().getHours();
var wakeupTime = 6; 
var noon = 12;
var lunchTime = 13; // 1PM
var napTime = lunchTime + 2; // 2PM
var partyTime = 17; // 5PM
var evening = 18; // 6PM
var sleepTime = 21; // 9PM
var messageText;
var image = "img/all-time.jpg";
var timeEvent = document.getElementById ("timeEvent");
var imageJS = document.getElementById("main-image");
var isPartyTime = false;

//Event variables
var partyButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");


//Function to update the clock every second 
var updateClock = function() 
{

//Change image and message depending on the time
    if (time == partyTime){
        image = "img/party-time.jpg";
        messageText = "IT'S PARTEEEE TIME!!";
    } else if (time == napTime) {
        image ="img/nap-time.jpg";
        messageText = "IT'S NAP TIME zzz";
    } else if (time == lunchTime) {
        image ="img/lunch-time.jpg";
        messageText = "IT'S NOM NOM TIME!!";
    } else if (time == wakeupTime) {
        image ="img/wakeup-time.jpg";
        messageText = "IT'S TIME TO GET UP!!!";
    } else if (time == sleepTime) {
        image ="img/sleep-time.jpg";
        messageText = "Time to sleep...";
    } 
    else if (time < noon) {
        image ="img/goodmorning-time.jpg";
        messageText = "Good morning!";
    } else if (time > evening) {
        image ="img/evening-time.jpg";
        messageText = "Good Evening!";
    } else {
        image ="img/afternoon-time.jpg";
        messageText = "Good afternoon!";
    }

    timeEvent.innerText = messageText;
    imageJS.src = image;

    //Clock function 
    var showCurrentTime = function()
    {
        // display the string on the webpage
        var clock = document.getElementById('clock');
    
        var currentTime = new Date();
    
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";
    
        // Set hours 
        if (hours >= noon) 
        { 
            meridian = "PM"; 
        }  
        if (hours > noon) 
        { 
            hours = hours - 12; 
        }
    
        // Set Minutes
        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }
    
        // Set Seconds
        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }
    
        // put together the string that displays the time
        var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    
        clock.innerText = clockTime;
    };
    showCurrentTime();
};

updateClock(); 
var oneSecond = 1000; 
setInterval( updateClock, oneSecond);

// Change party button message and color when it's clicked 

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	   
	   var partyMessage = "Party Over";
	   partyButton.innerText = partyMessage;
	   partyButton.style.background = "#2A2A72";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	   var partyMessage = "Click to start the PARTY";
	   partyButton.innerText = partyMessage;
	   partyButton.style.background = "#FFA400";
   }
};

// Selectors of time 


var wakeUpEvent = function () {
	var wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function () {
	var lunchTime = lunchTimeSelector.value;
};
var napEvent = function () {
	var napTime = napTimeSelector.value;
};

partyButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
