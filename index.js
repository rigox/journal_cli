const readLine =  require("readline-sync")
const colors =  require("colors")


const question =  readLine.question("please enter your  name: ")


console.log("here is what you enter: ".red , question)