const number = [2, 4, 8, 7, 10];

function numberDesend(number) {
    let items = '';
    for(let i = 0; i < number.length){
        items += `<li>${number[i]}</li>`;
    }
    return items;
}

//Exercise 3
const movies = [
    [],
    [],
    []
]