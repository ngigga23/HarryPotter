window.addEventListener('DOMContentLoaded', getHarryPotter);

 async function getHarryPotter(){
    const response = await fetch('https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json');

    const data = await response.json();
    console.log(data);

    displayHarryPotter();

 }

 function displayHarryPotter(data){
     console.log(`data a displayHarryPotterben: ${data}`);
     
 }