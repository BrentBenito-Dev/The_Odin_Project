function favoriteAnimal(animal){
    return animal + " is my favorite animal"
}

console.log(favoriteAnimal("Tiger"));

function add7 (x){
    console.log(x + 7);
}

function multiply (x, y){
    console.log(x * y);
}

function capitalize(word){
    word = word.toLowerCase();
    word = word[0].toUpperCase().concat(word.substr(1));
    console.log(word);
}

function lastLetter(word){
    console.log(word[word.length - 1]);
}


add7(3);
multiply(2, 3);
capitalize("BoTh");
lastLetter("abcd");