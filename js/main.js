"use strict";

const shoppingList = [
    'pane',
    'acqua',
    'sapone',
    'carta',
    'birra'
];

const listContainer = document.getElementById("list");

let i = 0;

while( i < shoppingList.length) {

    const listItem = document.createElement("li");
    listItem.innerHTML = shoppingList[i];
    listContainer.append(listItem);
    i++;
}