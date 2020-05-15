 
 const colors =  require("colors")
 const  Entry  = require("./models/Entry")
 

 const newEntry =  new Entry("test","this is a test")


 console.log(newEntry.getEntry())