console.log('Bismillah');

const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const side = document.querySelector('.side')

menu.addEventListener('click', () => { 
    console.log('Assalam Alaikum');
    
    side.classList.add('open-side');
    menu.classList.add('hide');

})

close.addEventListener('click', () =>  {
    side.classList.remove('open-side');
    menu.classList.remove('hide');
})
