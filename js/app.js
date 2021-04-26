

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

var garduatedUnivercity=prompt('Guess from wich univercity I was grdduated just yarmouk ju ').toLocaleLowerCase;
switch(garduatedUnivercity)
{
    case just:
    alert('True')
    console.log(true);
    break;

    case yarmouk :
        
        alert('fales ')
        console.log(false);
        break;
        case ju :
        
        alert('fales ')
        console.log(false);
        break;

        default : 
        alert('You enter wrong chooice  ')
        console.log('wrong choise');
}



var smokingMan = prompt('Do you think I\m smoking man ? tab y for yes and n for no ').toLocaleLowerCase;
if(smokingMan=='n') 
{alert('True');
console.log(true);}
else {
    alert('Fales');
console.log(false);
}

var marridMan = prompt('Do you think I\m married man ? tab y for yes and n for no ').toLocaleLowerCase;
if(marridMan=='n') 
{
    alert('True');
console.log(true);
}
else 
{
    alert('Fales');
console.log(false);
}

var employerMan = prompt('Do you think I\m employer man ? tab y for yes and n for no ').toLocaleLowerCase;
if(employerMan=='n') 
{
    alert('True');
console.log(true);
}
else 
{
    alert('Fales');
console.log(false);
}

var tallMan = prompt('Do you think I\m tall man ? tab y for yes and n for no ').toLocaleLowerCase;
if(tallMan=='y') 
{
    alert('True');
console.log(true);
}
else 
{
    alert('Fales');
console.log(false);
}
