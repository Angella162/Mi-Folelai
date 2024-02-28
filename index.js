const yesBtn =document.querySelector('#yesBtn');

yesBtn.addEventListener8('click',function() {
    alert('Yo invito, tú pagas')
});
const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function() {
const randomX = parseInt(Math.random()*100);
const randomY = parseInt(Math.random()*100);
noBtn.style.setProperty('top',randomY+'%');
noBtn.style.setProperty('letf',randomX+'%');
noBtn.style.setProperty('transform',`traslate(-${randomX}%,-${randomY}%)`);
})