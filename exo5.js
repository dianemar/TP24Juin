var nom = document.getElementById('nom');
nom.addEventListener('keypress',function(event){
    var charCode = event.charCode;
    if (charCode < 97 || charCode > 122) {
        event.preventDefault();
        alert("Merci de tout ´ecrire en minuscule");
    }
});
