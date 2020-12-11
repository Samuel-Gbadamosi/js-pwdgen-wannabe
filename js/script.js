// alert("hello there");

// nome,cognome,colore
var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome");
var colorPreferito =  prompt('Inserisci il tuo colore Preferito ?');
var risulatati = nome + cognome + colorPreferito;
// nome,cognome,colore

document.getElementById("nome").innerHTML = "ciao" + " " + nome + " " + cognome;
document.getElementById("cognome").innerHTML ="i tuoi dettagli sono" + risulatati + "19";



alert("thank you and goodbye"+ " " + nome + " " + " " + cognome);

console.log("the user details : "+ risulatati);
