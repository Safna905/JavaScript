setInterval(showtime, 1000);

function showtime() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}