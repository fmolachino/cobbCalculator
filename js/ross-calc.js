const json = [  
{    "Age": "0",    "Feed": 0},
{    "Age": "1",    "Feed": 15},
{    "Age": "2",    "Feed": 17},
{    "Age": "3",    "Feed": 20},
{    "Age": "4",    "Feed": 23},
{    "Age": "5",    "Feed": 27},
{    "Age": "6",    "Feed": 31},
{    "Age": "7",    "Feed": 35},
{    "Age": "8",    "Feed": 39},
{    "Age": "9",    "Feed": 43},
{    "Age": "10",    "Feed": 48},
{    "Age": "11",    "Feed": 53},
{    "Age": "12",    "Feed": 58},
{    "Age": "13",    "Feed": 63},
{    "Age": "14",    "Feed": 69},
{    "Age": "15",    "Feed": 74},
{    "Age": "16",    "Feed": 80},
{    "Age": "17",    "Feed": 86},
{    "Age": "18",    "Feed": 93},
{    "Age": "19",    "Feed": 98},
{    "Age": "20",    "Feed": 104},
{    "Age": "21",    "Feed": 110},
{    "Age": "22",    "Feed": 115},
{    "Age": "23",    "Feed": 122},
{    "Age": "24",    "Feed": 128},
{    "Age": "25",    "Feed": 134},
{    "Age": "26",    "Feed": 140},
{    "Age": "27",    "Feed": 145},
{    "Age": "28",    "Feed": 151},
{    "Age": "29",    "Feed": 157},
{    "Age": "30",    "Feed": 162},
{    "Age": "31",    "Feed": 167},
{    "Age": "32",    "Feed": 172},
{    "Age": "33",    "Feed": 177},
{    "Age": "34",    "Feed": 182},
{    "Age": "35",    "Feed": 186},
{    "Age": "36",    "Feed": 191},
{    "Age": "37",    "Feed": 195},
{    "Age": "38",    "Feed": 199},
{    "Age": "39",    "Feed": 203},
{    "Age": "40",    "Feed": 207},
{    "Age": "41",    "Feed": 210},
{    "Age": "42",    "Feed": 214},
{    "Age": "43",    "Feed": 217},
{    "Age": "44",    "Feed": 220},
{    "Age": "45",    "Feed": 223},
{    "Age": "46",    "Feed": 226},
{    "Age": "47",    "Feed": 228},
{    "Age": "48",    "Feed": 230},
{    "Age": "49",    "Feed": 233},
{    "Age": "50",    "Feed": 235},
{    "Age": "51",    "Feed": 236},
{    "Age": "52",    "Feed": 238}];

const maxAge = 52;

//I get 2 numbers, first for age and second for amount of chicken. Age will tell me
//which feed amount i should use for calculations. 
//and amount will be multiplied by that.


function calculateFood() {
    let chickenAge = Number(document.getElementById("age").value);
    
    let chickenAmount = Number(document.getElementById("amount-chicken").value);

    let foodForAge = getAmountOfFoodForAge(chickenAge);

    let result = convertGramToKilogram(foodForAge * chickenAmount);

    writeResultDown(result);

}

function getAmountOfFoodForAge(chickenAge) {
    if(checkAgeInput()){
        let foodWeight = json[chickenAge].Feed;
        return foodWeight;
    }

}



function convertGramToKilogram(grams) {
    let kilograms = grams/1000;
    return kilograms.toFixed(4);
}

function writeResultDown(result) {
    let kgEnd = "KG";
    result += " " + kgEnd;
    document.getElementById("result").value=result;
    writeFeedNumberUsed();
}

function checkAgeInput() {
    let inputedAge = (document.getElementById("age").value);
    if(inputedAge > maxAge || inputedAge<1){
        alert(`Please enter a valid number for the age (1-${maxAge}). ${document.getElementById("age").value} is not valid.`,);
    }
    return true;
}

function clearInput() {
    var getValue= document.getElementById("age");
    if (getValue.value !="") {
        getValue.value = "";
    }
    getValue= document.getElementById("amount-chicken");
    if (getValue.value !="") {
        getValue.value = "";
    }
    getValue= document.getElementById("result");
    if (getValue.value !="") {
        getValue.value = "";
    }
    getValue= document.getElementById("result-age-feed");
    if (getValue.value !="") {
        getValue.value = "";
    }
}

function writeFeedNumberUsed(){
    let inputedAge = (document.getElementById("age").value);
    let gramsForAge = getAmountOfFoodForAge(inputedAge);
    let feedNumberUsed = "For age: " + inputedAge + ", used: " + gramsForAge + " grams";
    document.getElementById("result-age-feed").value=feedNumberUsed;
    
}



























