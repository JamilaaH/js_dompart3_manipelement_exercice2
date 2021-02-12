let body = document.body
console.log(body);
//partie 1 
// 1
let monTitre = document.querySelector('h1')
monTitre.innerText = "Les attributs class et id"

//2
let monSubtitle1 = document.querySelectorAll('h2')[0]
monSubtitle1.innerText = "Exercice 2 partie A"

//3
let monSubtitle2 = document.querySelectorAll('h2')[1]
monSubtitle2.innerText = "Exercice 2 partie B"

//4 
let premierPara = document.querySelectorAll('p')[0]
premierPara.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les méthodes <b> par coeur </b>"

//5 
let secondPara = document.querySelectorAll('p')[1]
secondPara.innerHTML = "La manipulation de l'attribut style peut être une  <i> solution </i> rapide "


// Partie 2 
//6
monTitre.setAttribute('id', "bigTitle")

//7 
let myDiv1 = document.querySelector('div')
myDiv1.setAttribute('class', 'container')

//8 
let mesH2 = document.querySelectorAll('h2')

mesH2.forEach(element => {
    element.setAttribute('class', 'title')
});

//9 
let mesPara = document.querySelectorAll('p')

mesPara.forEach(element => {
    element.setAttribute('class', 'text')
});

//Partie 2.2
//10
let mySection1 = document.querySelector('section')
mySection1.setAttribute('class', 'margin-bottom border-black padding')
//11
let mySection2 = document.querySelectorAll('section')[1]
mySection2.setAttribute('class', 'margin-top border-black padding')

//12

let myDiv3 = mySection2.children[2]
myDiv3.style = "background-color:blue ; border: border 1px solid black ; height:20px; width:20px"
