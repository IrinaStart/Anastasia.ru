//Бургер

// вытаскиваем эл-ты
var hamb = document.querySelector('#hamb');
var popup = document.querySelector('#popup');
var menu = document.querySelector('#menu').cloneNode(1);// клонируем
var body = document.body; //зафиксировать нон скрол 

hamb.addEventListener('click', hambHandler); //повесить слушателя по клик

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open'); //при нажатии
    hamb.classList.toggle('active');//активировать
    body.classList.toggle('noscroll');// не скролить
    renderPopup(); //щтрисовка меню
}

function renderPopup() {
    popup.appendChild(menu);
}

var links = Array.from(menu.children); //получаем все эллементы меню

links.forEach((link) => {
    link.addEventListener('click', closeOnClick);
})// вешаем событие слушателя, функция для закрыти

function closeOnClick() {
    popup.classList.remove('open');
    hamb.classList.remove('active');
    body.classList.remove('noscroll');
}//закрыть бургер







//СЛАЙДЕР

// Получаем видимую часть слайда
let viewport = document.getElementById("slider__viewport").offsetWidth;
// Получаем кнопку вперёд
let btnNext = document.getElementById("slider__control-next");
// Получаем кнопку назад
let btnPrev = document.getElementById("slider__control-prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector("div.slider");
// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;

// Назначаем цвет индикатор слайда зелёный
viewSliders[0].style.backgroundColor = "#644C96";
// viewSliders[0].classList.add("active");

// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    // viewSliders[viewSlide].classList.remove("active");
    viewSliders[viewSlide].style.backgroundColor = "rgb(150, 128, 151)";
    // Условие, если номер слайда меньше четырёх
    if (viewSlide < 4) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "#644C96";
    // viewSliders[viewSlide].classList.remove("active");
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});

// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    viewSliders[viewSlide].style.backgroundColor = "rgb(150, 128, 151)";
    // Условие, если номер слайда больше нуля
    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--;
    } else { // Иначе
        // Номер слайда равен четырём
        viewSlide = 4;
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "#644C96";
    // viewSliders[viewSlide].classList.remove("active");
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});





