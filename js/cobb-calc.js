const json = [  
{    "Age": "0",    "Feed": 5},
{    "Age": "1",    "Feed": 9},
{    "Age": "2",    "Feed": 13},
{    "Age": "3",    "Feed": 16},
{    "Age": "4",    "Feed": 20},
{    "Age": "5",    "Feed": 25},
{    "Age": "6",    "Feed": 32},
{    "Age": "7",    "Feed": 37},
{    "Age": "8",    "Feed": 43},
{    "Age": "9",    "Feed": 50},
{    "Age": "10",    "Feed": 57},
{    "Age": "11",    "Feed": 61},
{    "Age": "12",    "Feed": 64},
{    "Age": "13",    "Feed": 72},
{    "Age": "14",    "Feed": 74},
{    "Age": "15",    "Feed": 78},
{    "Age": "16",    "Feed": 85},
{    "Age": "17",    "Feed": 91},
{    "Age": "18",    "Feed": 103},
{    "Age": "19",    "Feed": 110},
{    "Age": "20",    "Feed": 114},
{    "Age": "21",    "Feed": 118},
{    "Age": "22",    "Feed": 123},
{    "Age": "23",    "Feed": 128},
{    "Age": "24",    "Feed": 133},
{    "Age": "25",    "Feed": 137},
{    "Age": "26",    "Feed": 144},
{    "Age": "27",    "Feed": 150},
{    "Age": "28",    "Feed": 156},
{    "Age": "29",    "Feed": 160},
{    "Age": "30",    "Feed": 164},
{    "Age": "31",    "Feed": 167},
{    "Age": "32",    "Feed": 170},
{    "Age": "33",    "Feed": 174},
{    "Age": "34",    "Feed": 177},
{    "Age": "35",    "Feed": 179},
{    "Age": "36",    "Feed": 182},
{    "Age": "37",    "Feed": 186},
{    "Age": "38",    "Feed": 190},
{    "Age": "39",    "Feed": 193},
{    "Age": "40",    "Feed": 197},
{    "Age": "41",    "Feed": 203},
{    "Age": "42",    "Feed": 208},
{    "Age": "43",    "Feed": 213},
{    "Age": "44",    "Feed": 218},
{    "Age": "45",    "Feed": 224},
{    "Age": "46",    "Feed": 228},
{    "Age": "47",    "Feed": 231},
{    "Age": "48",    "Feed": 236},
{    "Age": "49",    "Feed": 241},
{    "Age": "50",    "Feed": 243},
{    "Age": "51",    "Feed": 244},
{    "Age": "52",    "Feed": 245},
{    "Age": "53",    "Feed": 247},
{    "Age": "54",    "Feed": 247},
{    "Age": "55",    "Feed": 246},
{    "Age": "56",    "Feed": 245},
{    "Age": "57",    "Feed": 243},
{    "Age": "58",    "Feed": 241},
{    "Age": "59",    "Feed": 239},
{    "Age": "60",    "Feed": 237},
{    "Age": "61",    "Feed": 234},
{    "Age": "62",    "Feed": 232},
{    "Age": "63",    "Feed": 228}];

const maxAge = 65;

//I get 2 numbers, first for age and second for amount of chicken. Age will tell me
//which feed amount i should use for calculations. 
//and amount will be multiplied by that.

function clear() {
    let clean = "";
    document.getElementById("age").value=clean;
    document.getElementById("amount-chicken").value=clean;
    document.getElementById("result").value=clean;
}


function calculateFood() {
    let chickenAge = Number(document.getElementById("age").value);
    
    let chickenAmount = Number(document.getElementById("amount-chicken").value);
    checkAgeInput();

    let foodForAge = getAmountOfFoodForAge(chickenAge);

    let result = convertGramToKilogram(foodForAge * chickenAmount);

    writeResultDown(result);

}

function getAmountOfFoodForAge(chickenAge) {
    let foodWeight = json[chickenAge].Feed;
    return foodWeight;
}

function convertGramToKilogram(grams) {
    let kilograms = grams/1000;
    return kilograms.toFixed(4);
}

function writeResultDown(result) {
    let kgEnd = "KG";
    result += " " + kgEnd;
    document.getElementById("result").value=result;
}

function checkAgeInput() {
    let inputedAge = (document.getElementById("age").value);
    if(inputedAge >= maxAge || inputedAge<0){
        alert(`Please enter a valid number for the age (0-65). ${document.getElementById("age").value} is not valid.`,);
    }
    else return;
}



























