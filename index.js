/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(user_time) {
  let time = parseInt(user_time);
  if (time < 12) {
    return `Good Morning`;
  }
  else if (time >= 19) {
    return `Good Evening`;
  }
  else {
    return `Good Afternoon`;
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  greeting = document.getElementById("greeting")
  greeting.innerHTML = `${message}`
}