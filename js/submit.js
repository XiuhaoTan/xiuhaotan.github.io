document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // display the success information
    document.getElementById('submitbackgrond').style.display = 'block' 
    document.getElementById('successMessage').style.display = 'block'; 

    // hide the questionnaire
    document.getElementById('registrationForm').style.display = 'none'; 

    //back to index.html after submittion success 5 seconds
    setTimeout(function() {
        window.location.href = '../web/index.html'; 
    }, 5000);
});