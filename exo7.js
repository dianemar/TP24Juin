// Question 1:

function ChangerStyle(){
    var paragraph1 = document.getElementById("parag1");
    console.log(paragraph1.innerHTML);

    /*
    paragraph1.style.color = "white";
    paragraph1.style.backgroundColor = "black";
    paragraph1.style.borderStyle = "dashed";
    paragraph1.style.borderWidth = "1px";
    // paragraph1.style.borderColor = "black"; 
    paragraph1.style.margin = "5px";
    */

   paragraph1.className = "active";
   console.log(container.paragraph1);
}

// Question 2:
function getAttributes(){
    var lien = document.querySelector('a');

    // récupération des attributs
    var href = lien.href;
    var hreflang = lien.getAttribute('hreflang');
    var rel = lien.getAttribute('rel');
    var target = lien.getAttribute('target');
    var type = lien.getAttribute('type');
 

    // Affichage des attributs sous le bouton
    var p = document.getElementById("question2"); 
    p. insertAdjacentHTML("afterend", "<p id=container></p>")

    var container = document.getElementById("container");
    container.innerHTML += "Href : ";
    container.innerHTML += href;
    container.innerHTML += "<br> Hreflang : ";
    container.innerHTML += hreflang;
    container.innerHTML += "<br> Rel : ";
    container.innerHTML += rel;
    container.innerHTML += "<br> Target : ";
    container.innerHTML += target;
    container.innerHTML += "<br> Type : ";
    container.innerHTML += type;
}

// Question 3
// Écrivez une fonction JavaScript pour obtenir les valeurs du prénom et du nom de famille du formulaire

function getFormvalue(){
    var form1 = document.getElementById("form1"); // form1 devient un tableau implicitement

    for (var i=0; i<form1.clientHeight; i++){
        if (form1.elements[i].value != "Submit"){
            alert("form1.elements[i].value");
        }
    }
}

// Question 4
// Écrivez un programme JavaScript pour compter et afficher les éléments d'une liste déroulante, dans une fenêtre d'alerte.
function getOptions(){
    var select = document.getElementById("mySelect"); 
    var compte = select.length; // récupère la longueur 
    var txt =select.textContent;

    alert("il y a " + compte+ " options : " + txt);
}