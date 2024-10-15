let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
// console.log(emailElement);
// console.log("Hello world")

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click',function(e){
    e.preventDefault();

    let emailValue = emailElement.value;
    let messageValue = messageElement.value;

    if(emailValue.includes('@')) {
        alert('thank you for your message');
        console.log('Email : ', emailValue);
        console.log('Message : ', messageValue);

    } else{
        alert('that does not look like a correct email adress,Please try again');
    }
    // console.log('Email : ', emailValue);
    // console.log('Message : ', messageValue);


})

