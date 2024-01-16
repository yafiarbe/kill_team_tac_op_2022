////////////////////////////////////
/* Изменяем дюйми на SVG картинки */
////////////////////////////////////
let cardsTexts = document.querySelectorAll(".card");
// Перебираем все карточки
for (let card of cardsTexts) {
    let textscard = card.querySelectorAll(".card *");
    // Перебираем все элементы text
    for (let text of textscard) {
        // Получаем содержимое элемента text
        let content = text.innerHTML;
        console.log('RJYNTYN', content);
        // Создаем новый элемент img с атрибутом src
        let img = document.createElement("img");
        img.src = "./svg/1inch.svg";
        // Заменяем все вхождения слова "2inch" на элемент img в содержимом с помощью регулярного выражения
        content = content.replace(/--1--/g, img.outerHTML);
        // Обновляем содержимое элемента text
        text.innerHTML = content;
    }
    for (let text of textscard) {
        // Получаем содержимое элемента text
        let content = text.innerHTML;
        // Создаем новый элемент img с атрибутом src
        let img = document.createElement("img");
        img.src = "./svg/2inch.svg";
        // Заменяем все вхождения слова "2inch" на элемент img в содержимом с помощью регулярного выражения
        content = content.replace(/--2--/g, img.outerHTML);
        // Обновляем содержимое элемента text
        text.innerHTML = content;
    }
    for (let text of textscard) {
        // Получаем содержимое элемента text
        let content = text.innerHTML;
        // Создаем новый элемент img с атрибутом src
        let img = document.createElement("img");
        img.src = "./svg/3inch.svg";
        // Заменяем все вхождения слова "2inch" на элемент img в содержимом с помощью регулярного выражения
        content = content.replace(/--3--/g, img.outerHTML);
        // Обновляем содержимое элемента text
        text.innerHTML = content;
    }
    for (let text of textscard) {
        // Получаем содержимое элемента text
        let content = text.innerHTML;
        // Создаем новый элемент img с атрибутом src
        let img = document.createElement("img");
        img.src = "./svg/6inch.svg";
        // Заменяем все вхождения слова "2inch" на элемент img в содержимом с помощью регулярного выражения
        content = content.replace(/--6--/g, img.outerHTML);
        // Обновляем содержимое элемента text
        text.innerHTML = content;
    }
}