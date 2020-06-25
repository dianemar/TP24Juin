/*
function vert(){
    alert("vert");
    }

function jaune(){
    alert("jaune");
    }
*/

function vert(event){
    alert("vert");
    event.stopPropagation();
    }

function jaune(){
    alert("jaune");
    }