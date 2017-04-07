const starWars7 = 'Star Wars: El Despertar de la fuerza';
const pgStarWars7 = 13;

const nameSacha = 'Sacha';
const ageSacha = 26;

const nameSanti = 'Santi';
const ageSanti = 12;

function canWatchStarWars7(name,age) {
    console.log(age);
    if (age >= pgStarWars7) {
        alert(`${name} puede pasar a ver ${starWars7}`);
    }
    else{
        alert(`${name} no puede pasar a ver ${starWars7}.
        Tiene ${age} años y necesita tener ${pgStarWars7}`)
    }
}

