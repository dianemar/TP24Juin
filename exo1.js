/*
var test = true;
var promesse = new Promise((resolve, reject) => {
if(test)
resolve();
else
reject();
});

promesse.then(() => console.log("test réussi") )
.catch(() => console.log("erreur") );

var division = (a, b) => {
    return new Promise((resolve, reject) => {
    if(b != 0)
    resolve(a / b);
    else
    reject("erreur : division par zéro");
    });
    };

division(10, 2).then((res) => console.log("résultat : " + res))
.catch((error) => console.log(error));
// affiche résultat : 5
division(5, 0).then((res) => console.log("résultat : " + res))
.catch((error) => console.log(error));
// affiche erreur : division par zéro
console.log("fin");
*/

let somme = (a, b) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(a + b) }, 2000);
        });
    };
     
let sommeCarre = async (a, b) => {
    let s = await somme(a, b).then(result => result);
    let result = Math.pow(s, 2);
    return result;
    };
     
sommeCarre(2, 3).then(result => console.log(result));