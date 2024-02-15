// DOM ELEMENTS
const resultEl = document.getElementById("output")
const lengthEl = document.getElementById("length")
const upperaseEl = document.getElementById("capss")
const lowercaseEl = document.getElementById("lowercase-letter")
const numberEl = document.getElementById("numbers")
const symbolEl = document.getElementById("symbols")
const generateEl = document.getElementById("gen-pass")

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol

}
// Generate evengt listen
generateEl.addEventListener('click' , () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked;
    const hasUpper = upperaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    resultEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber,
        hasSymbol,
        length
    )
    console.log(hasLower, hasUpper, hasNumber, hasSymbol)
})

//generate Password
function generatePassword(lower, upper, number,symbol, length){
    let generatePassword = '';

    const typescount = lower + upper + number + symbol;

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (
        item => Object.values(item) [0]
    );


    if(typescount === 0){
        return ''
    }
    
    for (let i=0; i<length; i+=typescount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatePassword += randomFunc[funcName]();
        })
    }
   
    const finalPassword = generatePassword.slice(0, length)
    return finalPassword
}
// GENERATE FUNCTIONS

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*()><?|~'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log(getRandomSymbol())