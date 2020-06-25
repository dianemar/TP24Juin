/*var container = document.getElementById("container");
console.log(container.innerHTML);

var paragraphes = container.getElementsByTagName("p");
for (let paragraphe of paragraphes)
    console.log(paragraphe.innerHTML);

var bleus = document.getElementsByClassName("blue");
for (let bleu of bleus)
    console.log(bleu.innerHTML);

var parConteneurs = document.getElementsByName("parConteneur");
console.log(parConteneurs);

var pbleus = document.querySelectorAll("p.blue");
for (let bleu of pbleus)
    console.log(bleu.innerHTML);

var pbleu = document.querySelector("p.blue");
console.log(pbleu.innerHTML);

var lien = document.querySelector('a');
var href = lien.getAttribute('href');
console.log(href);

lien.setAttribute('href', 'https://www.w3schools.com');
console.log(lien);

lien.removeAttribute('href');

var container = document.getElementById("container");
console.log(container.className);

container.className = "blue";
console.log(container.className);

container.className += " red";
console.log(container.className);

var container = document.getElementById("container");
var list = container.classList;
console.log(list);

var container = document.getElementById("container");
var list = container.classList;
list.add('green');
console.log(list);

var container = document.getElementById("container");
var list = container.classList;
list.add('red',"blue");
console.log(list);

list.remove('red','green');
console.log(list);

list.toggle('red');
console.log(list);

var container = document.getElementById("container");
console.log(container.innerHTML);

console.log(container.textContent);

container.innerHTML += "<p> hello </p>";
console.log(container.innerHTML);

container.textContent += "<p> hello </p>";
console.log(container.textContent);
console.log(container.innerHTML);

var parent = container.parentNode;
console.log(parent);

var parent = container.parentNode;
console.log(parent.nodeName);

var premierFils = container.firstElementChild;
console.log(premierFils.nodeName);

var container = document.getElementById("container");
var dernierFils = container.lastElementChild;
console.log(dernierFils.nodeName); 

var premierFils = container.firstChild;
console.log(premierFils.nodeName);

var dernierFils = container.lastChild;
console.log(dernierFils.nodeName);

var enfants = container.childNodes;
for(let enfant of enfants)
console.log(enfant);
*/
var par = document.createElement("p");

par.id = "intro";
par.setAttribute("class", "blue");
var text = document.createTextNode("JS paragraph");
par.appendChild(text);

var container = document.getElementById("container");
container.appendChild(par);


var container = document.getElementById("container");
container.style.color = "red";

var container = document.getElementById("container");
container.style.backgroundColor = "red";