// script.js

document.addEventListener('DOMContentLoaded', function () {
    const chanceCards = [
    ];

    const communityCards = [
    ];

    const chanceDiv = document.getElementById('chance');
    const communityDiv = document.getElementById('community');
    const garagesDiv = document.getElementById('garages');

    chanceCards.forEach(card => {
        const cardElement = document.createElement('p');
        cardElement.textContent = card;
        chanceDiv.appendChild(cardElement);
    });

    communityCards.forEach(card => {
        const cardElement = document.createElement('p');
        cardElement.textContent = card;
        communityDiv.appendChild(cardElement);
    });

    garages.forEach(garage => {
        const cardElement = document.createElement('p');
        cardElement.textContent = garage;
        garagesDiv.appendChild(cardElement);
    });
});
