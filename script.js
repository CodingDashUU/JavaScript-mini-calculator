//BASIC CALCULATOR

//Display the equation on the screen
function ShowNumber(...value){  
     let answer = document.getElementById("answer");
     answer.textContent += value;
}
 //Reset the screen and font size
let exp = "";
let ans2 = document.getElementById("answer");
     function setback(){ 
        exp = "";
       document.getElementById("answer").textContent = ""
       document.getElementById("answer").style.fontSize = "5em";
}
//Handles clicking events of the buttons and calculations
function onclick(id,number){  
    document.getElementById(id).onclick = function(){
      
     exp += number;
     ShowNumber(number);
     document.getElementById("equal").onclick = function(){
        try{
         exp = exp.replace("x","*")
         exp = exp.replace("^","**")
        
         let fial = eval(exp);
         fial = fial.toFixed(5)
         //Handles number/0
          if(fial == "Infinity"){
            ans2.style.fontSize = "29px";
           ans2.textContent = "Your number is too big, or your divisor is 0";
           
           setTimeout(setback,5000)
        }
          else{
           document.getElementById("answer").textContent = fial;
           }
    }
    catch(error){
       document.getElementById("answer").textContent = "Error";
       setTimeout(setback,2000);

    }}}
}
    //Button clicking
    onclick("one",1)
    onclick("two",2)
    onclick("three",3)
    onclick("four",4)
    onclick("five",5)
    onclick("six",6)
    onclick("seven",7)
    onclick("eight",8)
    onclick("nine",9)
    onclick("zero",0)
    onclick("decimal",".")
    onclick("plus"," + ")
    onclick("minus"," - ")
    onclick("multiply"," x ")
    onclick("divide"," / ")
    onclick("parenthesiso","(")
   onclick("parenthesisc",")")
   onclick("exponent", " ^ ")
  
    
   //The Clear Button
   document.getElementById("clear").onclick = function(){
    document.getElementById("answer").textContent = "";
    exp = "";
   }
//The equivalent of a Backspace
      document.getElementById("delete").onclick = function(){
            exp = exp.replace("*","x")
       exp = exp.replace("**","^")
    document.getElementById("answer").textContent = exp.slice(0,-1);
    exp = exp.slice(0,-1);
 
        
   }

//COMPOUND INTEREST CALCULATOR

const sign = document.getElementById("sign")
const principle = document.getElementById("principle")
const years = document.getElementById("years")
const interest = document.getElementById("interest")
const compound = document.getElementById("compound")
const output = document.getElementById("output")
const calculate = document.getElementById("calculate")



calculate.onclick = function(){
output.value = ` ${sign.value} ${Math.floor(principle.value * (1 + ((interest.value/100) / compound.value)) ** (compound.value * years.value))}`
}