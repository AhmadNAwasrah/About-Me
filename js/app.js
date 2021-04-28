

"use strict";
let scoure = 0;


alert('Welcome to my personal web site ');

let age = 28;
var gussedAge = prompt('Guess about my age numbers only ');

if (age == gussedAge) {
    alert(true);
    console.log(true);
    scoure++;
}
else {
    alert('You enter wrong answer')
    console.log(false);

}

// var garduatedUnivercity = prompt('Guess from wich univercity I was grdduated just yarmouk ju ').toLowerCase;
// if (garduatedUnivercity) {

//     if (garduatedUnivercity == "just") {
//         alert('True')
//         console.log(true);

//     } else if (garduatedUnivercity = "yarmouk") {
//         alert('fales')
//         console.log(fales);
//     }


// }
// else {

//     alert('You enter wrong chooice  ')
// }




// else {
//     alert('You enter wrong chooice  ')
//     console.log('wrong choise');
// }







// switch(garduatedUnivercity)




// {
//     case  'just' : 
//         //alert('True')
//         console.log(true);
//         break;

//     case 'yarmouk':

//         //('fales ')
//         console.log(false);
//         break;

//     case 'ju' :

//         //('fales ')
//         console.log(false);
//         break;

//     default : 
//         //alert('You enter wrong chooice  ')
//         console.log('wrong choise');
// }



var smokingMan = prompt('Do you think I\'m smoking man ? tab y for yes and n for no ').toLowerCase();
if (smokingMan == 'n') {
    alert('True');
    console.log(true);
    scoure++;

}
else {
    alert('Fales');
    console.log(false);
}

var marridMan = prompt('Do you think I\'m married man ? tab y for yes and n for no ').toLowerCase();
if (marridMan == 'n') {
    alert('True');
    console.log(true);
    scoure++;

}
else {
    alert('Fales');
    console.log(false);
}

var employerMan = prompt('Do you think I\m employer man ? tab y for yes and n for no ').toLowerCase();
if (employerMan == 'n') {
    alert('True');
    console.log(true);
    scoure++;

}
else {
    alert('Fales');
    console.log(false);
}

var tallMan = prompt('Do you think I\m tall man ? tab y for yes and n for no ').toLowerCase();
if (tallMan == 'y') {
    alert('True');
    console.log(true);
    scoure++;

}
else {
    alert('Fales');
    console.log(false);
}

var fateMan = prompt('Do you think I\m fate man ? tab y for yes and n for no ').toLowerCase();
if (fateMan == 'y') {
    alert('True');
    console.log(true);
    scoure++;

}
else {
    alert('Fales');
    console.log(false);
}

//let favNumber=prompt('Guess my favorite number between 1-5?');
let myFavNumber = 3;
for (let i = 1; i <= 4; i++) {
    let favNumber = prompt('Guess my favorite number between 1-5?');


    if (favNumber == myFavNumber) {
        alert('correct');
        console.log('correct');
        scoure++;
        break;

    }
    else if (favNumber < myFavNumber) {
        alert('too low ');


        console.log('too low');
    }
    else {
        alert('too Higte ');

        console.log('too Higte ');
    }



}
// do 
// {
// if(favNumber===3)
// {alert('Exsactly ');
// console.log('Exsactly');
// scoure++;

// }
// else if(favNumber===2)
// {alert('too high')}
// eles
//  if(favNumber===1)
// {alert('too low');
// console.log('too low');
// }
// else if(favNumber===4)
// {alert('too high')

// console.log('too high')}


// else
// {
// alert('too low');
// console.log('too low');

// }
// count++;
// }
// while(count<4);

alert('My favorate number is 3 ');

let favpalce = ['amman', 'irbid', 'ajloun', 'jersh', 'aqaba'];


let flage = false;
for (let j = 1; j <= 6; j++) {
    let guessFavPlace = prompt('Pleas guess my favorate place ');
    for (let i = 0; i < favpalce.length; i++) {
        if (guessFavPlace == favpalce[i]) {
            alert('Exsactly ');
            console.log('exsactly');
            flage = true;
            scoure++;

            break;

        }
        
    }
    if (flage == true) { break; }
    else {
        alert('Wrong try ');
            console.log('Wrong try ');
    }
}

if (flage == false) {
    alert('sorry my favorate places is amman irbid ajloun jersh aqaba');
    console.log('sorry my favorate places is amman irbid ajloun jersh aqaba');
}


alert('your final Score is ' + scoure);






