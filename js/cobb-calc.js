let temp; 

fetch('../resources/cobb-data/cobbConstant-Mixed.json')
    .then((temp) => temp.json())
    .then((json) => console.log(json));