"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

let valor = 0;

const agregarNombres= () =>{
    const selector = document.getElementById("items");
    if (selector){
        Object.values(itemData).forEach(item => {
            const option = document.createElement("option");
            option.value = valor++;
            option.text = item.name
            selector.add(option);
        });
    }
}

const mostrarDatos = () => {
    const imagen = document.getElementById("displayImage");
    const photographer = document.getElementById("photographer");
    const description = document.getElementById("description");
    const score = document.getElementById("score");
    const selector = document.getElementById("items");
    const selectedValue = selector.value;
    const selectedItem = Object.values(itemData)[selectedValue];

    if (selectedItem) {
        imagen.src = selectedItem.image;
        photographer.value = selectedItem.photographer;
        description.value = selectedItem.description;
        score.value = selectedItem.score;
        selector.addEventListener("change", mostrarDatos);
    
    }
}

const modificarPuntaje = () => {
    const selector = document.getElementById("items");
    const botonAumentar = document.getElementById("increaseScore");
    const botonDisminuir = document.getElementById("decreaseScore");

    const actualizarPuntaje = (delta) => {
        const selectedValue = selector.value;
        const selectedItem = Object.values(itemData)[selectedValue];
        if (selectedItem) {
            selectedItem.score += delta;
            const score = document.getElementById("score");
            score.value = selectedItem.score;
        }
    };

    if (botonAumentar) {
        botonAumentar.addEventListener("click", () => actualizarPuntaje(1));
    }
    if (botonDisminuir) {
        botonDisminuir.addEventListener("click", () => actualizarPuntaje(-1));
    }
}

(() => {
    agregarNombres();
    mostrarDatos();
    modificarPuntaje();
})();