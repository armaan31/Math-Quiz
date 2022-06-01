p1name=localStorage.getItem("p1name"); //p1 name is another variable declared in game.js which will hold the value of the key p1name in orange declared for the local storage. 
p2name=localStorage.getItem("p2name");
p1score=0; //starting score is 0
p2score=0; //same as above
document.getElementById("p1name").innerHTML=p1name+" : "; //p1 name is orange is the id for p1name from HTML. This will hold the value of the variable of p1 declared in line #1. 
document.getElementById("p2name").innerHTML=p2name+" : ";
document.getElementById("p1score").innerHTML=p1score; //p1score in orange is the id that will hold the value of p1score variable in blue.
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("playerquest").innerHTML="Question Turn Is - "+p1name; 
document.getElementById("playerans").innerHTML="Answer Turn Is - "+p2name;
function send(){
    n1=document.getElementById("n1").value; //n1 in blue is the variable declared to hold the value entered in the text input id n1 in orange. 
    n2=document.getElementById("n2").value;
    answer=parseInt(n1)*parseInt(n2); //holds the product of n1 and n2.
    questionnumber = "<h4>" +n1 + " X "+ n2+"</h4>"; //creates the question n1xn2. 
    inputbox = "<br>Answer : <input type='text' id='inputcheckbox'>"; //creates text input box
    checkButton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; //creates check button. Exucutes function check
    document.getElementById("output").innerHTML=questionnumber+inputbox+checkButton;
    document.getElementById("n1").value=null; //moment we hit send, the text box id n1 and n2 should become empty. 
    document.getElementById("n2").value=null;
}
function logout(){
    localStorage.removeItem("p1name"); //removes item from local storage
    localStorage.removeItem("p2name");
    window.location="index.html";
}
qturn="player1";
aturn="player2";
function check(){ 
    getAnswer=document.getElementById("inputcheckbox").value; //declaring a variable entered by player in text input of the output section. 
    if(getAnswer==answer){
        if(aturn=="player1"){
            p1score=p1score+1;
            document.getElementById("p1score").innerHTML=p1score;
        } else {
            p2score=p2score+1;
            document.getElementById("p2score").innerHTML=p2score;
        }
    }
    if(qturn=="player1"){
        qturn="player2"
        document.getElementById("playerquest").innerHTML="Question Turn - "+p2name;
        } else {
        qturn="player1"
        document.getElementById("playerquest").innerHTML="Question Turn - "+p1name;
    }
    if(aturn=="player1"){
        aturn="player2"
        document.getElementById("playerans").innerHTML="Answer Turn - "+p2name;
        } else {
        aturn="player1"
        document.getElementById("playerans").innerHTML="Answer Turn - "+p1name;
    }
    document.getElementById("output").innerHTML="";
}