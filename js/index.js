// Iteration 1: Names and Input
// 

var hacker1 = "Minyoung";
console.log("The driver's name is" + " " + hacker1);

var hacker2 = "Ting";
console.log("The navigator's name is" + " " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters.")
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));
console.log(hacker2.split('').reverse().join(''));

console.log(hacker1.charAt(0));
console.log(hacker2.charAt(0));

console.log("a" < "b");

if (hacker1.charAt(0) < hacker2.charAt(0)){
  console.log("The driver's name goes first.");
} else if (hacker1.charAt(0) > hacker2.charAt(0)) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?")
}

console.log(hacker1.substring(0, 2));
console.log(hacker2.substring(0, 2));

/* Bonus 1 */ 

let paragraphs = `chien et chat
human and pets
plants and animal
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsam, sit, ipsa aut tempore quos blanditiis nisi porro sint maiores cum. Excepturi ea laboriosam modi atque ad recusandae labore quaerat.
`

let splitString = paragraphs.split(" ");
console.log(splitString);
console.log(splitString.length);


function count(paragraphs) {
  let count = 0;
  for (let i = 0; i < paragraphs.length; i++) {
    if(paragraphs.charAt(i) === "e" && paragraphs.charAt(i+1) === "t")
    count ++
  }
  return count;
}


console.log(count(paragraphs));

/* Bonus 2 */ 

/*
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

function checkPalindrom(palindrom) {
  var l = palindrom.length;
  for (var i = 0; i < l / 2; i++) {
    if (palindrom.charAt(i) !== palindrom.charAt(l - 1 -i)) {
      return false;
    }
   }
    return true;
  }

  if (checkPalindrom("evae")) {
    console.log("The word is palindrom."); 
    } else {
    console.log("The word is not palindrom.")
    }

