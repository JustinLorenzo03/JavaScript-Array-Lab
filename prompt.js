var songs = ['Righteous', 'Del Rancho', 'Gooba', 'Lucid Dreams', 'RockStar'];
console.log(songs[0]);
console.log(songs[2]);

songs.pop();
songs.push('Happy');

var jamFour = songs[3];
console.log(jamFour);
songs.push('EastSide');

songs.unshift('Boy with luv');
console.log(songs.length);
songs.pop();
console.log(songs.length);
