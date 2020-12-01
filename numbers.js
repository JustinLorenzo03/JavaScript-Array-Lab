const desend = [2020, 2004, 2008, 1997, 2010];

function numberDesend() {
    desend = desend.sort();
    console.log(desend);
    return numberDesend();
}

//Exercise 3
const movies = [
    [ 'Rio 2', 'Scooby-Doo' ],
    [ 'Fast and Furious', 'Flash' ],
    [ 'Meteor Garden', 'Love Alarm' ]
]
console.log(movies[2][1]);
arr[1][0] = 'Pele';

for(let i = 0; i < movies.length; i++) {
    console.log(`${i}: ${movies[i][i + 1]}`);
}