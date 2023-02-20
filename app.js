const inputLength = document.getElementById('input-length');
const inputSlider = document.getElementById('pass-length');
const copybtn = document.getElementById('copy');
const passTxt = document.getElementById('generate-pass');
const generateBtn = document.getElementById('generate-btn');
/* Settings */
const checkNum = document.getElementById('switch-numbers');
const checkUpperCase = document.getElementById('switch-uppercase');
const checkSymbols = document.getElementById('switch-symbols');


//Update the html render value from input slider
inputSlider.addEventListener("input",(e) => {
    inputLength.innerText = e.target.value;
})

//copy the generated password.
copybtn.addEventListener('click',() => {
    passTxt.select();
    passTxt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passTxt.value);
    passTxt.readOnly = true;
})
 

const asciiToCharCode = (min, max) => {
    let collectionChar = [];
    for(let i= min; i<= max; i++){
        collectionChar.push(String.fromCharCode(i));
    }

    return collectionChar;
}

const generatePassword = (charLength) => {
    let generated= []
    for(let len = 0; len < charLength ; len++){
        generated.push(pass[Math.floor(Math.random() * pass.length)]);
    }
    return generated;
}

const checkSettings = () => {

    if(checkNum.checked === true){
        !pass.includes(numberCollection) ? numberCollection.forEach((num) => pass = [...pass, num]) : [];
    } else {
        pass = pass.filter((element) => !numberCollection.includes(element));
    }

    if(checkUpperCase.checked === true){
        !pass.includes(uppercaseCollection) ? uppercaseCollection.forEach((char) => pass = [...pass, char]) : [];
    } else {
        pass = pass.filter((element) => !uppercaseCollection.includes(element));
    }

    if(checkSymbols.checked === true){
        !pass.includes(symbolsCollection) ? symbolsCollection.forEach((symb) => pass = [...pass, symb]) : [];
    } else {
        pass = pass.filter((element) => !symbolsCollection.includes(element));
    }
}

let pass = [];
let numberCollection = asciiToCharCode(48, 57)
let uppercaseCollection = asciiToCharCode(65, 90)
let symbolsCollection = asciiToCharCode(33, 47)

pass = asciiToCharCode(97,122);

generateBtn.addEventListener("click", () => {
    const charLength = Number.parseInt(inputSlider.value);
    checkSettings();
    let generationPass = generatePassword(charLength);
    passTxt.value = generationPass.join('');
})

