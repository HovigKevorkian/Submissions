
function redBorder() {
    var pass = document.querySelector('#password').value;
    var conf = document.querySelector('#confirmation').value;
    
    if(pass != conf) {
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirmation').style.borderColor = 'red';
    } else {
        document.getElementById('password').style.borderColor = 'green';
        document.getElementById('confirmation').style.borderColor = 'green';
    }
}
