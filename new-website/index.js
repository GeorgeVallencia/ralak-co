const login = document.querySelector('.login-btn');
const loginButton = document.querySelector('.cont');
const signUp = document.querySelector('.create');
const signIn =document.querySelector('.sign-in');



login.addEventListener('click', () => {
    // console.log('clicked');
    if(login.click){
        window.location.href = 'login.html';
    }else{
        window.location.href = 'index.html';
    }
});

loginButton.addEventListener('click', () => {
    if(loginButton.click){
        window.location.href = 'index.html';
    }else{
        window.location.href = 'login.html'; 
    }
});

// signUp.addEventListener('click', () => {
//     // console.log('clicked');
//     if(signUp.click){
//         window.location.href = 'SignUp.html';
//     }else{
//         window.location.href = 'login.html';
//     }
// });

// signIn.addEventListener('click', () => {
//     if(signIn.click){
//         window.location.href = 'index.html';
//     }else{
//         window.location.href = 'SignUp.html';
//     }
// });