function ShowNumber(...value){
     let answer = document.getElementById("answer");
     answer.textContent += value;
}
 let exp = "";
     function setback(){
        exp = "";
       document.getElementById("answer").textContent = ""
       document.getElementById("answer").style.fontSize = "5em";
}

function onclick(id,number){
    document.getElementById(id).onclick = function(){
      
     exp += number;
     ShowNumber(number);
     document.getElementById("equal").onclick = function(){
         let fial = eval(exp);
          if(fial == "Infinity"){
           let ans2 = document.getElementById("answer");
           ans2.textContent = "Your divisor may not be 0";
           ans2.style.fontSize = "29px";
           setTimeout(setback,5000)
        }
          else{
           document.getElementById("answer").textContent = fial;}}
           }

    }
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
    
   document.getElementById("clear").onclick = function(){
    document.getElementById("answer").textContent = "";
    exp = "";
   }

      document.getElementById("delete").onclick = function(){
    document.getElementById("answer").textContent = exp.slice(0,-1);
    exp = exp.slice(0,-1);
   }