const buttons = document.querySelectorAll('button');

const toggleImage = (event) => {
    let button = event.target;
    let imageId = button.getAttribute('data-image-id');
    const pic = document.getElementById(imageId)
    
    if(pic.style.display === 'none' || !pic.style.display) {
        pic.style.display = 'block';
    } else {
        pic.style.display= 'none'
    }
};

buttons.forEach((button) => {
    button.addEventListener('click', toggleImage);
});