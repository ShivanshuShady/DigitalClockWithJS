function updateClock(){

    // set time values in code
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // logic to handle 0 to 00 for hours, minutes, seconds
    hours = hours < 10 ? "0"+ hours: hours;
    minutes = minutes < 10 ? "0"+ minutes: minutes;
    seconds = seconds < 10 ? "0"+ seconds: seconds;


    // set the values
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

}
//interval method for clock change after 1 second
setInterval(updateClock, 1000);