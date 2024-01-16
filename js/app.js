"use strict";
/* РАБОТА С mockapi */
let countCards = 0;
// создаем переменную для хранения данных
var data;

// используем fetch для получения JSON-данных с API
fetch("https://65a587e452f07a8b4a3f4c7a.mockapi.io/CRITICAL_OPERATIONS_2022")
    .then((response) => response.json()) // извлекаем данные из тела ответа
    .then((json) => {
        data = json; // присваиваем данные переменной
        console.log(data);
        // Получаем элемент, в который будем добавлять карточки
        let container = document.querySelector(".page-a4");
        // Перебираем свойства объекта
        for (var a in data) {
            let types = data[a];
            console.log("Типы операция (общие и именные)", types);

            for (var b in types) {
                if (b === "BASE_TAC_OPS") {
                    let baseTacOpsTypes = types[b];
                    console.log(
                        "Базовые группы тактических операций",
                        baseTacOpsTypes
                    );

                    for (let c in baseTacOpsTypes) {
                        let baseTacOpsType = baseTacOpsTypes[c];
                        console.log(`Группа ${c}`, baseTacOpsType);
                        for (const d in baseTacOpsType) {
                            if (Object.hasOwnProperty.call(baseTacOpsType, d)) {
                                const tacOp = baseTacOpsType[d];
                                console.log(`Операция ${d}`, tacOp);

                                // Создаётся пустая карточка
                                let varCard = document.createElement("div")
                                varCard.className = "card";
                                document.querySelector(".page-a4").append(varCard);

                                // Прописывается категория тактической операции
                                let varCardCategory = document.createElement("h2");
                                varCardCategory.className = "card__category";
                                varCardCategory.textContent = tacOp.GROUP + " TAC OP";
                                varCard.append(varCardCategory);

                                // Прописывается название тактической операции
                                let varCardTitle = document.createElement("h3");
                                varCardTitle.className = "card__title";
                                varCardTitle.textContent = tacOp.NAME;
                                varCard.append(varCardTitle);

                                // Прописывается описание операции
                                let varCardDescription = document.createElement("p");
                                varCardDescription.className = "card__description";
                                varCardDescription.textContent = tacOp.DESCRIPTION;
                                varCard.append(varCardDescription);

                                // Создаётся список условий
                                let varCeardConditions = document.createElement("ul");
                                varCeardConditions.className = "card__conditions";
                                varCard.append(varCeardConditions);

                                // Прописывается первое условие
                                let varCardConditionFirst = document.createElement("li");
                                varCardConditionFirst.className = "card__condition-first";
                                varCardConditionFirst.textContent = tacOp.CONDITIONS.CONDITION_FIRST;
                                varCard.querySelector(".card__conditions").append(varCardConditionFirst);

                                // Прописывается второе условие 
                                let varCardConditionSecond = document.createElement("li");
                                varCardConditionSecond.className = "card__condition-second";
                                varCardConditionSecond.textContent = tacOp.CONDITIONS.CONDITION_SECOND;
                                varCard.querySelector(".card__conditions").append(varCardConditionSecond);

                                // Работа с активными действиями
                                if (tacOp.ACTION.ACTION_DESCRIPTION !== "") {

                                    // 
                                    let varCardActionRule = document.createElement("p");
                                    varCardActionRule.className = "card__action-rule";
                                    varCardActionRule.textContent = tacOp.ACTION.ACTION_RULE;
                                    varCard.append(varCardActionRule);

                                    // 
                                    let varCardAction = document.createElement("div");
                                    varCardAction.className = "card__action";
                                    varCard.append(varCardAction);

                                    let varCardActionName = document.createElement("h3");
                                    varCardActionName.className = "card__action-name";
                                    varCardActionName.textContent = tacOp.ACTION.ACTION_NAME;
                                    varCard.querySelector(".card__action").append(varCardActionName);

                                    let varCardActionCost = document.createElement("span");
                                    varCardActionCost.className = "card__action-cost";
                                    varCardActionCost.textContent = tacOp.ACTION.ACTION_COST + "AP";
                                    varCard.querySelector(".card__action").append(varCardActionCost);

                                    let varCardActionDescription = document.createElement("p");
                                    varCardActionDescription.className = "card__action-description";
                                    varCardActionDescription.textContent = tacOp.ACTION.ACTION_DESCRIPTION;
                                    varCard.querySelector(".card__action").append(varCardActionDescription);
                                }

                                if (tacOp.ADDITIONAL_DESCRIPTION !== "") {
                                    let varCardAdditionalDescription = document.createElement("p");
                                    varCardAdditionalDescription.className = "card__additional-description";
                                    varCardAdditionalDescription.innerHTML = tacOp.ADDITIONAL_DESCRIPTION;
                                    varCard.append(varCardAdditionalDescription);
                                }

                                if (tacOp.DESIGNERS_NOTE !== "") {
                                    let varCardDesignersNote = document.createElement("p");
                                    varCardDesignersNote.className = "card__designers-note";
                                    varCardDesignersNote.innerHTML = tacOp.DESIGNERS_NOTE;
                                    varCard.append(varCardDesignersNote);
                                }

                                countCards++;
                                console.log("Создана", countCards, "карточка");
                            }
                        }
                    }
                }
            }
        }
    })
    .then((tasks) => {
        addImage();
    })
    .catch((error) => {
        console.error(error); // обрабатываем ошибки
    });

function addImage() {
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
                "--6--": "./svg/6inch.svg",
            };
            // Перебираем все свойства объекта symbols
            for (let symbol in symbols) {
                // Создаем новый элемент img с атрибутом src, равным значению свойства
                let img = document.createElement("img");
                img.src = symbols[symbol];
                img.alt = `${symbol.split("-")[2]}inch`;
                // Заменяем все вхождения символа на элемент img в содержимом с помощью регулярного выражения
                content = content.replace(
                    new RegExp(symbol, "g"),
                    img.outerHTML
                );
            }
            // Обновляем содержимое элемента text
            text.innerHTML = content;
        }
    }
}
