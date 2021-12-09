document.getElementById('login-button').addEventListener('click', function () {

    // get user userEmail
    const userEmail = document.getElementById('user-email');
    const userValue = userEmail.value;


    // get user password
    const userPassword = document.getElementById('user-password');
    const passWord = userPassword.value;
    // console.log(passWord);

    // check email and passWord

    if (userValue == 'sontan@bap.com' && passWord == 'secret') {
        window.location.href = 'banking.html';
    }
})