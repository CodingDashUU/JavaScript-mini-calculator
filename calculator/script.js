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
         let fial = eval(exp);
         //Handles number/0
          if(fial == "Infinity"){
           ans2.textContent = "Your divisor may not be 0";
           ans2.style.fontSize = "29px";
           setTimeout(setback,5000)
        }
          else{
           document.getElementById("answer").textContent = fial;
           }
    }
    catch(error){
       document.getElementById("answer").textContent = error;
       ans2.style.fontSize = "29px";
       setTimeout(setback,5000);

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
    onclick("plus","+")
    onclick("minus","-")
    onclick("multiply","*")
    onclick("divide","/")
    onclick("parenthesiso","(")
   onclick("parenthesisc",")")
    
   //The Clear Button
   document.getElementById("clear").onclick = function(){
    document.getElementById("answer").textContent = "";
    exp = "";
   }
//The equivalent of a Backspace
      document.getElementById("delete").onclick = function(){
    document.getElementById("answer").textContent = exp.slice(0,-1);
    exp = exp.slice(0,-1);
   }