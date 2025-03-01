const d = new Date();
document.getElementById("time").innerHTML = d.toDateString();

function myTime(){
    let now = new Date();
    let hours = now.getHours().toString();
    let minutes = now.getMinutes().toString();
    let seconds = now.getSeconds().toString();
    hours = hours % 12 || 12;
    let amPm = hours >= 12 ? "AM" : "PM";

    let time = `${hours}:${minutes}:${seconds} ${amPm}`;
  
    // console.log( typeof times)
  
    const timeat = time.innerHTML = time;
    return timeat;
}

