console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
const ten=Math.floor("10")
const ten1=parseInt("10")
console.log(10===ten)
let float=parseFloat('9.8');
console.log(ten1===parseFloat)
float=Math.round(float)
console.log(float===ten1)
function randomMath(max,min) {
    if(min){
        return Math.floor(Math.random()*(max-min))+min
    }
    return Math.floor(Math.random()*max)
}
console.log(randomMath(101))
console.log(randomMath(101,51))
console.log(randomMath(256))

function randomString(text) {
    const number= randomMath(text.length)
    return text.charAt(number)
}
console.log(randomString("Javascript"))
