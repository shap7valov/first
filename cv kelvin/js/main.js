const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "img/NAV CLOSE.png";
    } else {
        navBtnImg.src = 'img/NAV.png';
    }
}



AOS.init();
