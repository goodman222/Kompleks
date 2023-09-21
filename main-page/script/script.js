const menuBtn = document.getElementById('menuBtn')
const menuMob = document.getElementById('mobileMenu')
const searchBtn = document.getElementById('searchIcon')
const searchField = document.getElementById('searchField')
let isMenuOpen = false
let isSearchOpen = false


menuBtn.onclick = function () {
    if (isSearchOpen) {
        isSearchOpen = !isSearchOpen
        searchField.classList.toggle('hidden')
        document.body.classList.toggle('noScroll')
    }
    isMenuOpen = !isMenuOpen
    menuMob.classList.toggle('hidden')
    document.body.classList.toggle('noScroll')
    document.getElementsByTagName('header')[0].classList.toggle('menu-is-open')
}

searchBtn.onclick = function () {
    if (isMenuOpen) {
        isMenuOpen = !isMenuOpen
        menuMob.classList.toggle('hidden')
        document.body.classList.toggle('noScroll')
        document.getElementsByTagName('header')[0].classList.toggle('menu-is-open')
    }
    isSearchOpen = !isSearchOpen
    searchField.classList.toggle('hidden')
    document.body.classList.toggle('noScroll')
}