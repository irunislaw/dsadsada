




let array1= [1,2,3,4,5,6]



let last = array1[array1.length-1]; 
const map1 = array1.map(x => (x * 2)+3);


let joinarrays = (tab1,tab2) =>{
    return [...tab1,...tab2];

}

let filter =(arr,filt)=>arr.filter(x => x==filt)


let initialValue =0;
let dodawanie = array1.reduce((previousValue, currentValue )=> previousValue+currentValue, initialValue)




console.log("Mapa "+map1);
console.log("ostatnie funkcyjnie "+last)
console.log("polaczenia tablic "+joinarrays([1,2,3,4,5],[1,2,3,4,5,6,7,8]).join(", "))
console.log("filter "+ filter(array1,5))
console.log("Suma "+dodawanie)























function handleCalculatorForm(form) {
    let number1 = form.input1.value;
    let number2 = form.input2.value;
    let type = form.calctype.value;
    document.getElementById("calcResult").innerHTML = calculate(number1, number2, type).toString();
}

function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}

function calculate(number1, number2, method) {
    number1 = parseFloat(number1);
    if (!isNaN(number1) && method === "log")
        return log(number1);
    number2 = parseFloat(number2);
    if (isNaN(number1) || isNaN(number2))
        return "input only numbers";
    switch (method) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            if (number2 == 0)
                return "Dividing by 0";
            return number1 / number2;
        case "power":
            return power(number1, number2);
        default:
            return 0;
    }
}
function log(n) {
    if (n > 1)
        return 1 + log(n / 2);
    else
        return 0;
    
}

function power(number1, number2) {
    if (number2 != 0)
        return number1 * power(number1, number2 - 1);
    return 1;
}



function handlePalindrome(form) {
    form.result.innerHTML = palindrome(form.input.value);
}

function palindrome(x) {
    x = x.toLowerCase();
    for(let i in x) {
        if(x[i] != x[x.length - 1 - i])
            return false;
    }
    return true;
}
function secondHighest(array) {
    let secondHighest = array[0];
    let highest = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > highest) {
            secondHighest = highest;
            highest = array[index];
        }
    }
    return secondHighest;
}


function handleAnagramForm(form){

    let word1 = form.inputbox3.value;
    let word2 = form.inputbox4.value;
    document.getElementById("anagramResult").innerHTML = anagram(word1, word2);
}

function bubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
         
            if(arr[j] > arr[j+1]){           
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function anagram(var1, var2) {
    let word1 = [];
    let word2 = [];
    let flag = true;

    word1ASCII = [];
    word2ASCII = [];

    word1 = var1.split('');
    word2 = var2.split('');

    if(word1.length == word2.length){
        for(let i = 0; i < word1.length; i++){
            word1ASCII[i] = word1[i].charCodeAt(0);
        }

        for(let i = 0; i < word2.length; i++){
            word2ASCII[i] = word2[i].charCodeAt(0);
        }

        word1ASCII = bubbleSort(word1ASCII);
        word2ASCII = bubbleSort(word2ASCII);

        console.log(word1ASCII);
        console.log(word2ASCII);


        for(let i = 0; i < word1ASCII.length; i++){
            if (word1ASCII[i] != word2ASCII[i]){
                flag = false;
                break;
            }
        }
    }
    else {
        return false;
    }
    return flag;
}

function tower(n, sourcePole, destinationPole, auxiliaryPole) {
    if(0 == n)
    return;

    tower(n - 1, sourcePole, auxiliaryPole, destinationPole);

    console.log("Move the disk " + n + " from " +
    sourcePole + " to " + destinationPole);

    tower(n - 1, auxiliaryPole, destinationPole,sourcePole);
}

tower(4, 'A', 'C', 'B');

function fibonacci (n){
    if (n < 2){
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}


console.log(0.2 + 0.1);
console.log(fibonacci(5));
console.log(anagram("siema", "siemb"));
console.log("a".charCodeAt(0));
console.log("b".charCodeAt(0));
console.log(secondHighest([1,5,15,20]))


function najwieksza(tab){
let najwieksza=0; 
let druga_najwieksza=0;
let najwiekszas="";
let druga_najwiekszas="";
if(!isString(tab)){   
    for(i=0;i<tab.length;i++){
        if(tab[i]>najwieksza){
            druga_najwieksza=najwieksza;
            najwieksza=tab[i];
        }}
        return druga_najwieksza;
           
        }else{
           for(i=0;i<tab.length;i++){
            if(tab[i].length>najwiekszas.length){
            druga_najwiekszas=najwiekszas;
            najwiekszas=tab[i];
        }}
        return druga_najwiekszas;
        }
    }
    

function isString(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(typeof element == "string"){
            return true
        }
    }
    return false

}

console.log("druga najwieksza intidżer "+najwieksza([1,2,3,4,5,6,6,6,6,6,6,6,6,6,6,6]));


console.log("najwieksza stringer "+najwieksza(["a","bb","ccc","dddd","ee"]));



function rekurencja(form) {
    a = parseInt(form.a.value);
    b = parseInt(form.b.value);
    form.result.innerHTML = rekurencja1(a, b);
}


function rekurencja1(a, b) {
    if(a<b){
    return String(a) +" "+ String(rekurencja1(a+1,b))
    }else{
    return a
    }
}
console.log(rekurencja1(8,15))


