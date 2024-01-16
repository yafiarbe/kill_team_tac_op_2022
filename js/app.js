'use strict'
/* РАБОТА С mockapi */
let countCards = 0

let varCardCategory = document.createElement('h2')
varCardCategory.className = 'card__category'
varCardCategory.innerHTML = 'varCardCategory'
document.querySelector('.footer').append(varCardCategory)

let varCardTitle = document.createElement('h3')
varCardTitle.className = 'card__title'
varCardTitle.innerHTML = 'varTitle'
document.querySelector('.footer').append(varCardTitle)

let varCardDescription = document.createElement('p')
varCardDescription.className = 'card__description'
varCardDescription.textContent = 'varCardDescription'
document.querySelector('.footer').append(varCardDescription)

let varCeardConditions = document.createElement('ul')
varCeardConditions.className = 'card__conditions'
document.querySelector('.footer').append(varCeardConditions)

let varCardConditionFirst = document.createElement('li')
varCardConditionFirst.className = 'card__condition-first'
varCardConditionFirst.textContent = 'varCardConditionFirst'
document.querySelector('.footer .card__conditions').append(varCardConditionFirst)

let varCardConditionSecond = document.createElement('li')
varCardConditionSecond.className = 'card__condition-second'
varCardConditionSecond.textContent = 'varCardConditionSecond'
document.querySelector('.footer .card__conditions').append(varCardConditionSecond)

let varCardActionRule = document.createElement('p')

let varCardAction = document.createElement('div')

let varCardActionName = document.createElement('h3')

let varCardActionCost = document.createElement('span')

let varCardActionDescription = document.createElement('p')

let varCardDesignersNote = document.createElement('p')
/* 

card__conditions
var condition-first

<ul class="card__conditions">
<li class="card__condition-first">${tacOp.CONDITIONS.CONDITION_FIRST}</li>
<li class="card__condition-second">${tacOp.CONDITIONS.CONDITION_SECOND}</li>
</ul>
<p class="card__action-rule">${tacOp.ACTION.ACTION_RULE}</p>
<div class="card__action ${actionhide}">
<h3 class="card__action-name">${tacOp.ACTION.ACTION_NAME}</h3>
<span class="card__action-cost">${tacOp.ACTION.ACTION_COST}AP</span>
<p class="card__action-description">${tacOp.ACTION.ACTION_DESCRIPTION}</p>
</div>
<p class="card__additional-description">${tacOp.ADDITIONAL_DESCRIPTION}</p>
<p class="card__designers-note">${tacOp.DESIGNERS_NOTE}</p>`

*/

// let varCardDescription = document.createElement('h3')
// varCardDescription.className = 'card__description'
// varCardDescription.innerHTML = 'varCardDescription'
// document.querySelector('.footer').append(varCardDescription)


// CRITICAL_OPERATIONS_2022 //

// const card = document.querySelector('.card');
// const card = document.querySelector('.card__category');
// const card = document.querySelector('.card__title');
// const card = document.querySelector('.card__description');
// const card = document.querySelector('.card__conditions');
// const card = document.querySelector('.card__condition-first');
// const card = document.querySelector('.card__condition-second');
// const card = document.querySelector('.card__action-rule');
// const card = document.querySelector('.');
// const card = document.querySelector('.');
// const card = document.querySelector('.');
// const card = document.querySelector('.');
// const card = document.querySelector('.');
// const card = document.querySelector('.');

// создаем переменную для хранения данных
var data;

// используем fetch для получения JSON-данных с API
fetch('https://65a587e452f07a8b4a3f4c7a.mockapi.io/CRITICAL_OPERATIONS_2022')
    .then(response => response.json()) // извлекаем данные из тела ответа
    .then(json => {
        data = json; // присваиваем данные переменной
        console.log(data);
        /*
        console.log(data); // выводим данные в консоль
        console.log(data.length); // выводим данные в консоль
        console.log(data[0]); // выводим данные в консоль
        console.log(data[0].BASE_TAC_OPS); // выводим данные в консоль
        console.log(data[0].BASE_TAC_OPS.RECON); // выводим данные в консоль
        console.log(data[0].BASE_TAC_OPS.RECON.RECOVER_ITEM); // выводим данные в консоль
        */






        // Получаем элемент, в который будем добавлять карточки
        let container = document.querySelector('.page-a4');

        // Перебираем свойства объекта
        for (var a in data) {
            let types = data[a]
            console.log('Типы операция (общие и именные)', types);

            for (var b in types) {
                if (b === "BASE_TAC_OPS") {
                    let baseTacOpsTypes = types[b]
                    console.log('Базовые группы тактических операций', baseTacOpsTypes);

                    for (let c in baseTacOpsTypes) {
                        let baseTacOpsType = baseTacOpsTypes[c]
                        console.log(`Группа ${c}`, baseTacOpsType);
                        for (const d in baseTacOpsType) {
                            if (Object.hasOwnProperty.call(baseTacOpsType, d)) {
                                const tacOp = baseTacOpsType[d];
                                console.log(`Операция ${d}`, tacOp);

                                let actionhide
                                if (tacOp.ACTION.ACTION_NAME == false || tacOp.ACTION.ACTION_NAME == undefined) {
                                    actionhide = "hide";
                                } else {
                                    actionhide = '';
                                }




                                let card = document.createElement('div')
                                card.className = "card"
                                card.innerHTML = `<h2 class="card__category">${tacOp.GROUP} TAC OP</h2>
                                <h3 class="card__title">${tacOp.NAME}</h3>
                                <p class="card__description">${tacOp.DESCRIPTION}</p>
                                <ul class="card__conditions">
                                    <li class="card__condition-first">${tacOp.CONDITIONS.CONDITION_FIRST}</li>
                                    <li class="card__condition-second">${tacOp.CONDITIONS.CONDITION_SECOND}</li>
                                </ul>
                                <p class="card__action-rule">${tacOp.ACTION.ACTION_RULE}</p>
                                <div class="card__action ${actionhide}">
                                    <h3 class="card__action-name">${tacOp.ACTION.ACTION_NAME}</h3>
                                    <span class="card__action-cost">${tacOp.ACTION.ACTION_COST}AP</span>
                                    <p class="card__action-description">${tacOp.ACTION.ACTION_DESCRIPTION}</p>
                                </div>
                                <p class="card__additional-description">${tacOp.ADDITIONAL_DESCRIPTION}</p>
                                <p class="card__designers-note">${tacOp.DESIGNERS_NOTE}</p>`



                                let cardAction = card.querySelector('.card__action .card__action-name')
                                console.log('asdasdasd', cardAction.textContent);

                                container.append(card)

                                countCards++
                                console.log("Создана", countCards, "карточка");
                            }
                        }
                    }
                }
            }
        }

    }).then(tasks => {
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
                // Создаем объект, в котором храним соответствие между символами и путями к изображениям
                let symbols = {
                    "--1--": "./svg/1inch.svg",
                    "--2--": "./svg/2inch.svg",
                    "--3--": "./svg/3inch.svg",
                    "--6--": "./svg/6inch.svg"
                };
                // Перебираем все свойства объекта symbols
                for (let symbol in symbols) {
                    // Создаем новый элемент img с атрибутом src, равным значению свойства
                    let img = document.createElement("img");
                    img.src = symbols[symbol];
                    img.alt = `${symbol.split("-")[2]}inch`;
                    // Заменяем все вхождения символа на элемент img в содержимом с помощью регулярного выражения
                    content = content.replace(new RegExp(symbol, "g"), img.outerHTML);
                }
                // Обновляем содержимое элемента text
                text.innerHTML = content;
            }
        }


        // Do something with the list of tasks
    }).catch(error => {
        console.error(error); // обрабатываем ошибки
    });


window.onload = function () {
    const hideAction = function (clMother, clBaby) {
        let div = document.querySelectorAll(clMother)
        console.log('eqweqweqweqweqasdasdasd', div);
    };

    hideAction('.card')
}



