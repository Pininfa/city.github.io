window.onload=function start(){
    
                    /*Поиск html объектов*/
    var startGame  = document.getElementById("startGame");
    
    var menu = document.getElementById("menu");
    
    var marginGame = document.getElementById("marginGame");
    
    var DivSG = document.getElementById("DivSG");
    
    var twoGamers = document.getElementById("twoGamers");

                        /*Выбор количества игроков*/
    
    menu.onclick = function(Event){
        
                    /*Добавление поля marginGame и form*/
        
if(event.target.id == "twoGamers" || event.target.id == "threeGamers" || event.target.id == "fourGamers"){
            
var formOne = document.createElement("form");
var formTwo = document.createElement("form");

formOne.id="formOne";
formTwo.id="formTwo";
     

marginGame.appendChild(formOne);
marginGame.appendChild(formTwo);
            
startGame.style.display="inline-block";
    
    
    
    /*Переменные имен игроков*/
    
   
                                /*Два игрока*/
        
if(event.target.id == "twoGamers" && twoGamers.id !="click"){
    
    twoGamers.id="click";
    
            
var p = document.createElement("p"); 
            
var twoGamer = document.createElement("input");
twoGamer.setAttribute("placeholder", "Введите имя второго игрока");
 twoGamer.id = "twoGamer";    
    
var oneGamer = document.createElement("input");
oneGamer.id= "oneGamer";
oneGamer.setAttribute("placeholder","Введите имя первого игрока"); 
    
oneName= document.createTextNode("Введите имя первого игрока:");
twoName= document.createTextNode("Введите имя второго игрока:");
            
formOne.appendChild(oneName);
formOne.appendChild(oneGamer);
    
oneGamer.focus();    
              
formTwo.appendChild(twoName);
formTwo.appendChild(twoGamer);
              

    DivSG.onclick = function(Event){
        
                    /*Два игрока*/
        
          /*Ввод имени первого игрока*/
            
   
        
       if(event.target.id=="startGame" && oneGamer.value == "" || oneGamer.value=="Введите имя первого игрока"){
           
            while( oneGamer.value == "" || oneGamer.value=="Введите имя первого игрока"){
                
                
              if(oneGamer.value == "" || oneGamer.value=="Введите имя первого игрока"){
                  oneGamer.focus();
                  alert("Введите имя первого игрока");
              } break;
            }
           
       }
        
                if(event.target.id=="startGame" && oneGamer.value != "" && oneGamer.value!="Введите имя первого игрока"){
                
                    NOGsave = oneGamer.value;
                    
                    
                    console.log(NOGsave);
                    
                    
                     /*Ввод имени второй игрока*/
                    
                    
                    while(event.target.id=="startGame" && oneGamer.value != "" || oneGamer.value!="Введите имя первого игрока" && twoGamer.value == "" || twoGamer.value =="Введите имя второго игрока"){
                          
                        if(twoGamer.value == "" || twoGamer.value =="Введите имя второго игрока"){
                                    twoGamer.focus();
                                    alert("Введите имя второго игрока");
                            
                        }break;
                          
                          }
                    
                   
                    
              
                }
                            /*Приветсвтвие игроков*/
        
                    if(event.target.id=="startGame" && twoGamer.value != "" && twoGamer.value !="Введите имя второго игрока" && oneGamer.value != "" && oneGamer.value!="Введите имя первого игрока"){
                        
                        NTGsave = twoGamer.value;
                        
                        console.log(NTGsave);
                        alert("Привет"+" "+NTGsave+" "+"и"+" "+NOGsave+"!"+" "+"Начинаем игру!")
                        
                        
                     var formSity = document.createElement("div");
                     var nextMove = document.createElement("div");
                     nextMove.id="nextMove"  
                     formSity.id="formSity";  
                   
                        
                    var span = document.createElement("span");  
                    var SityOne =  document.createElement("input");
                    var SityTwo =   document.createElement("input");
                    
                        
                    SityOne.setAttribute("placeholder", NOGsave);
                    SityTwo.setAttribute("placeholder", NTGsave);   
                    
                    var nextButton = document.createElement("p");
                    nextButton.id="next";
                    nextButton.innerHTML="Первым ходит"+" "+ NOGsave;
                    
                    marginGame.style.flexDirection="column"   
                    marginGame.appendChild(span); 
                     marginGame.appendChild(formSity);
                    formSity.appendChild(SityOne);
                    formSity.appendChild(SityTwo);
                    marginGame.appendChild(nextMove)
                    nextMove.appendChild(nextButton);
                    
                    var x = document.getElementById("formOne");
                    var y = document.getElementById("formTwo");
                    marginGame.removeChild(x);
                    marginGame.removeChild(y);
                   SityOne.focus();
                        
                    SityTwo.setAttribute("disabled", false);   
                    startGame.style.display="none";
                        
                    
                   
                        
                        /*Массив из двух игроков*/
                        
             var arrGamerOne =[];
                
            var arrGamerTwo=[];
                                 
    
            marginGame.onclick = function(Event){  
            
                    
            if(event.target.id=="next" && SityOne.id=="" && SityOne.value != ""){
                    
                var wordOne = SityOne.value.toLowerCase();
                
                console.log(wordOne);
                
                var FirstIndexArrGamerOne  = arrGamerOne.indexOf(wordOne);
                
                var FirstIndexArrGamerTwo  = arrGamerTwo.indexOf(wordOne);
                
                
                console.log(FirstIndexArrGamerOne);
                console.log(FirstIndexArrGamerTwo);
                
            if(arrGamerOne[FirstIndexArrGamerOne] == wordOne){
               
                    alert(NOGsave +" " + "Вы уже называли это слово. Назовите пожалуйста другое слово"); 
               
               }
                
                else if(arrGamerTwo[FirstIndexArrGamerTwo]== wordOne){
                
                        alert(NOGsave+", "+NTGsave +" "+"уже называл это слово. Назовите пожалуйста другое слово")
                
                
                }
                
                
                
               
                else if(arrGamerTwo[FirstIndexArrGamerTwo]!= wordOne && arrGamerOne[FirstIndexArrGamerOne] != wordOne){
                
              var backWordOne = wordOne.charAt(wordOne.length -1);
                
                var firstLetterOne = wordOne.charAt(wordOne.length [0]);
                
                
                 span.innerHTML=NTGsave+","+" "+ "сейчас Ваш ход."+" "+NOGsave+" "+"назвал город"+" "+wordOne+"."+" "+"Вам на букву"+" "+ backWordOne.toUpperCase();
                    nextButton.innerHTML="Сейчас ходит"+" "+ NTGsave;
                 SityOne.setAttribute("disabled", false);
                 SityTwo.removeAttribute("disabled");
                 SityOne.id="open";
                 SityTwo.focus();
                
                
                
                SityTwo.value = "";
                arrGamerOne.push(wordOne);
                
                console.log(arrGamerOne);
                console.log(firstLetterOne);
                console.log(backWordOne);
                 var LastWordOne = arrGamerOne[arrGamerOne.length -1];
                console.log(LastWordOne)
                console.log(LastWordOne.charAt(LastWordOne.length-1))
                
               var codeOneGamerLastLatter = LastWordOne.charAt(LastWordOne.length-1).charCodeAt(0);
                
                console.log(codeOneGamerLastLatter);
           
                }
            }
                
             else if(SityOne.value == ""){
                 
                 
                 alert("Первый игрок забыл назвть город");
                 SityOne.focus();
                 
             }
             else if( SityTwo.value == "" && SityOne.value != ""){
                 
                 
                 alert("Второй игрок забыл назвть город");
                 SityTwo.focus();
                 
             } 
                
                
              
                else if(event.target.id=="next" && SityOne.id !="" && SityOne.value != ""){
                    
                    var wordTwo = SityTwo.value.toLowerCase();
                    
                    
                    var SecondIndexArrGamerOne  = arrGamerOne.indexOf(wordTwo);
                
                    var SecondIndexArrGamerTwo  = arrGamerTwo.indexOf(wordTwo);
                    
                    
                    
                    console.log(wordTwo)
                    
                    console.log(SecondIndexArrGamerOne);
                    
                    console.log(SecondIndexArrGamerTwo);
                    
                    
                   if(arrGamerOne[SecondIndexArrGamerOne] == wordTwo){
               
                     
                       
                       alert(NTGsave+", "+NOGsave+" "+"уже называл это слово. Назовите пожалуйста другое слово");
               
               }
                
                else if(arrGamerTwo[SecondIndexArrGamerTwo]== wordTwo){
                
                        alert(NTGsave+" " + "Вы уже называли это слово. Назовите пожалуйста другое слово");
                
                
                }
                   
                    
                    
                   else if(arrGamerTwo[SecondIndexArrGamerTwo]!= wordTwo && arrGamerOne[SecondIndexArrGamerOne] != wordTwo){ 
                    
                    var backWordTwo = wordTwo.charAt(wordTwo.length -1);
                    
                    var firstLetterTwo = wordTwo.charAt(wordTwo.length [0]);
                    
                    codeTwoGamerFirstLatter = firstLetterTwo.charCodeAt(0);
                    
                    console.log(firstLetterTwo);
                    console.log(codeTwoGamerFirstLatter);
                    
                    
                    
                    span.innerHTML=NOGsave+","+" "+ "сейчас Ваш ход."+" "+NTGsave+" "+"назвал город"+" "+wordTwo+"."+" "+"Вам на букву"+" "+ backWordTwo.toUpperCase();
                    
                    nextButton.innerHTML="Сейчас ходит"+" "+ NOGsave;
                   
                    SityOne.removeAttribute("disabled");
                     SityTwo.setAttribute("disabled", false);
                    SityOne.focus();
                    
                    arrGamerTwo.push(wordTwo);
                    
                    console.log(arrGamerTwo);
                    
                    SityOne.value = "";
                    SityOne.id="";
                    
            }
                
            }
                
                
                
                
            }
           
                    }
                    }
                    
    
         
    }
                                        
               
   
        
        
        
    }
        
      

}
 

    
    
    
                            /*Три игрока*/
        if(event.target.id=="threeGamers"){
            
            alert("три игрока")
            
        }
                                /*Четыре игрока*/
         if(event.target.id=="fourGamers"){
            
            alert("четыре игрока")
            
        }
        
        }
        
        


        

        