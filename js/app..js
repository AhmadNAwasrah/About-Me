

"use strict";



alert('Welcome to my personal web site ');

let age =28;
var gussedAge =prompt('Guess about my age numbers only ');

if(age==gussedAge)
{alert(true);
console.log(true);
}
else
{
    alert('You enter wrong answer')
    console.log(false);

}

var garduatedUnivercity=prompt('Guess from wich univercity I was grdduated just yarmouk jordan univercity ').toLocaleLowerCase;
switch(garduatedUnivercity)
{
case 'just':
    alert('True')
    console.log(true);
    break;

    case 'yarmouk' :
        
        alert('fales ')
        console.log(false);
        break;
        case 'jordan univercity' :
        
        alert('fales ')
        console.log(false);
        break;

        default : 
        alert('You enter wrong chooice  ')
        console.log('wrong choise');


}

var smokingMan = prompt('Do yiu think I\m smoking man ? tab y for yes and n for no ');



