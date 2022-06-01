function addUser(){
    p1name=document.getElementById("p1input").value; //name p1input gets saved in the variable named in blue. 
    p2name=document.getElementById("p2input").value;
    localStorage.setItem("p1name", p1name); //Orange p1name is the key which holds the value of p1input in the variable p1name. 
    localStorage.setItem("p2name", p2name);
    window.location="game.html" //directs you to gmame.html page. 
}