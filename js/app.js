// Initialize Some Variable
const myForm = document.querySelector('form');
const img = document.querySelector('img[alt=Logo]');
const sendIcon = document.querySelector('.sicon');
const sendText = document.querySelector('.stext');

// Event Handle Function
const formEvent = (e) => {
    e.preventDefault();
    img.style.transition = `5s all ease`;
    img.style.transform = `rotate(7560deg)`;

    sendIcon.style.transition = `1s`;
    sendIcon.style.transitionDelay = `4s`    
    sendIcon.style.opacity = `1`;
    sendIcon.style.marginLeft = `-40px`;


    sendText.style.transition = `1s`;
    sendText.style.transitionDelay = `5s`    
    sendText.style.opacity = `1`;
    sendText.style.marginLeft = `0px`;

    document.querySelector('input[type=email]').value = '';
}

myForm.addEventListener('submit', formEvent)