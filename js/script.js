var genera = document.getElementById("genera");

genera.addEventListener("click",
function() {
  // prendo nome
  var nome = document.getElementById("nome").value;
  console.log(nome);
  // prendo km da inpiut
  var km = document.getElementById("km").value;
  console.log(km);
  // fascia eta
  var fasciaEta = document.getElementById("fascia-eta").value;
  console.log(fasciaEta);

// calcolo prezzo viaggio
var prezzoKm = 0.21;
var totale = km * prezzoKm;
var offerta = "Biglietto Standard";
console.log("totale intero: " + totale);

// condizioni sconti
if (fasciaEta == "minorenne") {
  totale = totale - ((totale * 20) / 100);
  offerta = "Sconto Minorenne";
} else if (fasciaEta == "over65") {
  totale = totale - ((totale * 40) / 100);
  offerta = "Sconto Silver";
}

// arrotondiamo a 2 cifre
totale = totale.toFixed(2);
// genero carrozza e codice cp
var numCarrozza = Math.floor(Math.random() * 9) + 1;
var codiceCP = Math.floor(Math.random() * 9999) + 9000;

// inserisco dati nel Biglietto
document.getElementById('nome-passeggero').innerHTML = nome;
document.getElementById('offerta').innerHTML = offerta;
document.getElementById('carrozza').innerHTML = numCarrozza;
document.getElementById('codice-cp').innerHTML = "9" + codiceCP;
document.getElementById('costo').innerHTML = totale + "€";

document.getElementById('biglietto-container').classList.add("show");
document.getElementById('acquista').classList.add("show");
  }
);


// bottone Annulla
var annulla = document.getElementById('annulla');

annulla.addEventListener("click",
  function() {
  document.getElementById('biglietto-container').classList.remove("show");
  document.getElementById('acquista').classList.remove("show");
  // resetta campi input
  document.getElementById("nome").value = "";
  document.getElementById("km").value = "";
  document.getElementById("fascia-eta").value = "";
  }
);
