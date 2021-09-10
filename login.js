document.getElementById('login-submit').addEventListener('click', function () {
    // USER EMAIL
    const emailField = document.getElementById('user-email');
    const getEmail = emailField.value;
    // console.log(getEmail
    // USER PASSWORD
    const passwordField = document.getElementById('user-password').value;
    // console.log(passwordField);
    // const getPassword = passwordField.value;
    // console.log(getPassword);
    // check email password valid or not
    if (getEmail == 'banking@gmail.com' && passwordField == 'banking') {
        // console.log('valied');
        window.location.href = 'banking.html'
    }
})