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


//Открытие фильтров

const filtersOpenBtn = document.querySelector('.filter-btn-mob')
const filtersCloseBtn = document.querySelector('.catalog-filters-close')

filtersOpenBtn.onclick = function () {
    document.body.classList.add('catalog-filters-open')
    window.scrollTo(0,0)
}

filtersCloseBtn.onclick = function () {
    document.body.classList.remove('catalog-filters-open')
}


//Открытие сортировки

const sortingBtn = document.querySelector('.catalog-sorting')
const sortingBox = document.querySelector('.sorting-dropdown')

sortingBtn.onclick = function () {
    sortingBox.classList.toggle('hidden')
}

// открытие сортировки в мобильной версии

const sortingBtnMob = document.querySelector('.sorting-btn-mob')
sortingBtnMob.onclick = function () {
    sortingBox.classList.toggle('hidden')
}
//Переключение сортировки (только визуально, на расположение элементов не влияет)
const sortingStateFiled = document.querySelector('.catalog-sorting p')

sortingBox.onclick = function (event) {
    let eventTarget = event.target
    let targetItem

    if (eventTarget.classList.contains('sorting-dropdown-item')) {
        targetItem = event.target
    } else if (eventTarget.parentNode.classList.contains('sorting-dropdown-item')) {
        targetItem = event.target.parentNode
    } else if (eventTarget.parentNode.parentNode.classList.contains('sorting-dropdown-item')) {
        targetItem = event.target.parentNode.parentNode
    } 

    let newSortingState = targetItem.querySelector('p').innerHTML
    sortingStateFiled.innerHTML = newSortingState 
    sortingBtnMob.querySelector('p').innerHTML = newSortingState

    document.querySelector('.dropdown-active-item').classList.remove('dropdown-active-item')


    targetItem.classList.add('dropdown-active-item')

    sortingBox.classList.toggle('hidden')
}


// Включение фильтров (только визуально), скрытие/раскрытие фильтров

const filtersField = document.querySelector('.catalog-filters')
let targetItem

filtersField.onclick = function(event) {
    let eventTarget = event.target
    if (eventTarget.classList.contains('filter-position')) {
        targetItem = event.target
    } else if (eventTarget.parentNode.classList.contains('filter-position')) {
        targetItem = event.target.parentNode
    } else if (eventTarget.parentNode.parentNode.classList.contains('filter-position')) {
        targetItem = event.target.parentNode.parentNode
    } else if ((eventTarget.classList.contains('filter-header'))) { 
        targetItem = eventTarget
        targetItem.parentNode.querySelectorAll('.filter-positions-container').forEach(element => {
            element.classList.toggle('hidden')
        });
        targetItem.querySelector('img').classList.toggle('filter-rotate');

        return
    } else if ((eventTarget.parentNode.classList.contains('filter-header'))) { 
        targetItem = eventTarget.parentNode
        targetItem.parentNode.querySelectorAll('.filter-positions-container').forEach(element => {
            element.classList.toggle('hidden')
        });
        targetItem.querySelector('img').classList.toggle('filter-rotate');

        return
    } else {
        return
    }
    targetItem.classList.toggle('filter-position-active')
}




