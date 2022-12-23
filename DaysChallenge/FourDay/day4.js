// let result= prompt('rəqəm yaz');
// result%2===0
// ? alert('Rəqəm cütdür')
// : alert('Rəqəm təkdir')

let result = prompt('Ay yaz');
let monthDays=[31 ,28,31,30,31,30,31,31,30,31,30,31];
let months=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let isFinding=false;
for (let index = 0; index < months.length; index++) {
    const element = months[index];
    if(element.toLocaleLowerCase()===result.toLocaleLowerCase()){
        alert(monthDays[index])
        isFinding=true;
    }
    
    
}
if(!isFinding){
    alert('Belə bir ay yoxdur ad!')
}
