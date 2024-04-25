let tenhoSede2: boolean = true;
let alguemPraPegar: boolean = false

function naoBebeAgua(){
  if(tenhoSede2 === true && alguemPraPegar === true){
    console.log("Bebi água!");
}else{
  console.log('fiquei com sede');
  
}
}

naoBebeAgua()


function bebeAgua() {
alguemPraPegar = true

if(tenhoSede2 === true && alguemPraPegar === true){
  console.log("Bebi água!");
}else{
console.log('fiquei com sede');

}
  
}