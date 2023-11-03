
/*=== side bar toggle ===*/
let closeBtn = document.querySelector('#closeBtn');
let menuBtn = document.querySelector('#menuBtn');
let sideBar = document.querySelector('.sideBar');

menuBtn.onclick = () => {
    sideBar.classList.add('active');
}

closeBtn.onclick = () => {
    sideBar.classList.remove('active');
}

