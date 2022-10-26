// Iteration 1: Names and Input

let hacker1 = "claudiacastella";
// let hacker1 = prompt("Write driver's name");

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "chrome";
//// let hacker2 = prompt("Write navigator's name");

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else (
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
)


// Iteration 3: Loops

// 3.1 Uppercase
let hacker1UpperCase = "";
for (let i=0; i < hacker1.length; i++) {
    hacker1UpperCase += hacker1[i].toUpperCase() + " " ;
}
console.log(hacker1UpperCase);

//3.2 Reverse
let hacker2Reverse = " ";
for (let i = hacker2.length; i > 0; i--) {
    hacker2Reverse += hacker2[i-1];
}
console.log(hacker2Reverse);

//3.3 Lexicographic Order
let sortHacker = '$hacker1'.localeCompare('hacker2');
if (sortHacker < 0) {
    console.log('The driver\'s name goes first');
} else if (sorthacker > 0) {
    console.log('Yo, the navigator goes first definitely')
} else (console.log('What?! You both have the same name?')
)


//Bonus 1

let lorem =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, turpis sit amet faucibus gravida, velit lorem tristique nunc, id rhoncus massa erat at nunc. Praesent accumsan, nunc et blandit dictum, orci orci tincidunt neque, nec vestibulum ante enim sit amet mauris. Fusce viverra nisl non urna ultricies tincidunt eget sed nibh. Praesent nunc magna, pellentesque in pretium ac, ultricies eu mauris. Aliquam sit amet elit hendrerit, iaculis ante ut, maximus turpis. Nulla sit amet vestibulum odio. Aenean ultricies urna pharetra, vehicula nibh sed, egestas odio. In tempus, urna vitae maximus varius, lorem purus elementum sem, non lacinia sem nulla quis eros. 
Aliquam diam urna, pretium quis blandit eget, euismod vitae lacus. Curabitur aliquet viverra est, a rhoncus justo elementum dignissim. Quisque eget elit id est molestie cursus. Cras tempor justo id gravida aliquet. Etiam eleifend non nisl nec ornare. In accumsan consectetur nunc vitae pharetra. Fusce in viverra lacus, eu efficitur orci. Aliquam aliquet, urna eu vestibulum porttitor, justo sem sodales arcu, eget tristique diam odio sed lacus. Maecenas eu elit id dolor eleifend fringilla. Praesent sed tortor volutpat, blandit ante non, interdum nisi. Proin dictum nunc at lorem tempus, eu blandit est molestie. Duis scelerisque id libero non bibendum. Pellentesque vehicula eros non nisi euismod, vehicula varius magna scelerisque. Vivamus sit amet hendrerit lacus, aliquet dapibus orci. 
Pellentesque rhoncus id ipsum ac feugiat. Maecenas semper, arcu et cursus porttitor, diam sem aliquet turpis, non iaculis purus eros sit amet lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris pellentesque lectus eget ligula sagittis iaculis. Integer pulvinar ipsum in est congue, non eleifend mi imperdiet. Donec blandit rutrum velit. Aliquam erat volutpat. Integer dignissim augue ac faucibus iaculis. Ut mollis mi accumsan orci condimentum, ac porttitor arcu posuere. Aenean ut lectus augue. Nullam egestas nisl purus, at dapibus nisl dictum sit amet. Aliquam dignissim placerat nulla in finibus. Nullam non cursus lacus, et tincidunt lorem. Quisque tempor facilisis cursus. Morbi sed lectus nisi.`

let spaces = 0;
let wordEt = 0;
for (let i=0; i < lorem.length; i++){
    // count total of words
    if (lorem[i] === " "){
        spaces += 1;
    };
    // count words "et"
    if (lorem[i] === "e" && lorem[i+1] === "t" && lorem [i+2] === " " && lorem[i-1] === " "){
        wordEt += 1;
    };
}
console.log(spaces + 1);
console.log(wordEt);


//Bonus 2

let phraseToCheck = "a man, a plan, a canal, panama";
// let phraseToCheck = prompt("Escribe tu frase")
let phraseNoSpaces = "";
let phraseReverse = "";

// phrase without symbols; and lowercased
for (let i=0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] !== " " && phraseToCheck[i] !== ",") {
        phraseNoSpaces += phraseToCheck[i].toLowerCase();
    }
};

// phrase reversed
for (let i = phraseNoSpaces.length; i > 0; i--) {
    phraseReverse += phraseNoSpaces[i-1];
};

// compare phrases
if (phraseNoSpaces === phraseReverse) {
    console.log("It's a palindrome!");
} else ( 
    console.log("Try again!")
);
