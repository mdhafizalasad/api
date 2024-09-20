function watch() {
    const time = new Date(); 
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();
    // console.log(second);
    let amPM ="AM";

    //am or pm
    if (hours > 12){
        amPM = "PM";

    }

    // 12 hours formate
    if (hours > 12){
        hours = hours -12;

    }

    // 12 == 0
    if (hours == 0){
        hours = 12;

    }

// Add leading zero to minutes and seconds
minutes = minutes < 10 ? '0' + minutes : minutes;
second = second < 10 ? '0' + second : second;


const ui = document.getElementById("watch");
// console.log(ui);
ui.innerText = hours + ":" + minutes + ":" + second + " " + amPM;

    
}

// call the function
//watch()
setInterval(watch,1000);








var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
  var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
      var day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 100);



// type writter

const words = ["Welcome to API Website.", "Please Click the menu", "to see details"];
        let wordIndex = 0;
        let charIndex = 0;
        let currentWord = '';
        const typewriterElement = document.getElementById('typewriter');

        function type() {
            if (charIndex < words[wordIndex].length) {
                currentWord += words[wordIndex].charAt(charIndex);
                typewriterElement.textContent = currentWord;
                charIndex++;
                setTimeout(type, 200);
            } else {
                setTimeout(erase, 1000);
            }
        }
        function erase() {
            if (charIndex > 0) {
                currentWord = currentWord.slice(0, -1);
                typewriterElement.textContent = currentWord;
                charIndex--;
                setTimeout(erase, 100);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(type, 500);
        });