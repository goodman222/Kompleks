const menuBtn = document.getElementById('menuBtn')
const menuMob = document.getElementById('mobileMenu')
const searchBtn = document.getElementById('searchIcon')
const searchField = document.getElementById('searchField')
let isMenuOpen = false
let isSearchOpen = false

//Открытие меню и поиска
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

//Переключение меню на странице продукта

const menuBox = document.querySelector('.product-info-menu')
let activeSection = 'description'

menuBox.onclick = function(event) {
    if (!event.target.dataset.section) {
        return
    }
    document.querySelectorAll('.product-info-menu p').forEach(element => {
        element.classList.remove('product-active-menu')
    });

    document.querySelector(`.product-info-${activeSection}`).classList.remove('product-active-info')

    activeSection = event.target.dataset.section

    event.target.classList.add('product-active-menu')
    document.querySelector(`.product-info-${activeSection}`).classList.add('product-active-info')
}

//Выбор селекторов продукта

const optionsField = document.querySelector('.product-options')

optionsField.onclick = function(event) {
    let item = event.target
    if (!item.classList.contains('option-item')) {
        return
    }

    console.log(item);

}
