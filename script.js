const backButton = document.getElementById('backButton');
const wraper = document.querySelector('.wraper');
const test = document.getElementById('test');


test.addEventListener('click', ()=>{

    wraper.style.transform = 'rotateY(180deg)';
    wraper.style.zIndex = '1';

});

backButton.addEventListener('click', () => {
    wraper.style.transform = 'rotateY(0deg)';
    wraper.style.zIndex = '1';
});
