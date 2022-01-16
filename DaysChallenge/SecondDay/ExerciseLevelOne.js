const challenge=" 30 Days Of JavaScript ";
console.log(challenge);
console.log(challenge.length) ;
console.log(challenge.toUpperCase())
console.log(challenge.toLocaleLowerCase())
console.log(challenge.substring(0,2))
console.log(challenge.toLowerCase().includes("script".toLowerCase()));
console.log(challenge.split(""))
console.log(challenge.split(" "))
const webSites="Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"
console.log(webSites.split(","))
console.log(challenge.replace("JavaScript","Python"))
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf("Of"))
console.log(challenge.lastIndexOf("Of"))
const challengeBecause='You cannot end a sentence with because because because is a conjunction';
console.log(challengeBecause.indexOf("because"))
console.log(challengeBecause.lastIndexOf("because"))
console.log(challengeBecause.search("because"))
console.log(challenge.trim())
console.log(challenge.startsWith(" "))
console.log(challenge.endsWith(" "))

const regex=/a/g
let result=challenge.match(regex);
console.log(result)

console.log(challenge.repeat(2))


