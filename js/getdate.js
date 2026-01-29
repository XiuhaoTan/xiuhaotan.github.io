function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date(); // use Date class to get the date from computer
    const options = { month: 'short', day: 'numeric', weekday: 'short' }; // Initialize date format
    dateElement.textContent = now.toLocaleDateString('en', options); // english format
}


setInterval(updateDate, 1000); //update date per second
updateDate();