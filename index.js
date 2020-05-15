const readLine =  require("readline-sync")
const colors =  require("colors")
const  Journal =  require("./models/Journal")
const  J =  new Journal()
function menu(){
       current_date  = new Date().toUTCString()
       console.log("Welcome Rigo ".green , current_date  )

       console.log("-------------------------------------".bold)

       console.log("1-- Create Entry ")
      
       console.log("2-- View Entrys ")

       console.log("3--  delete Entry")

       console.log("4--   Exit")

}

function main(){
 let  counter = 0 ;

   do{
      
       menu();

       counter =  parseInt(readLine.question("Enter Choice:  "))

       switch(counter){
             case  1:
                      createEntry()                   
                 break;
            case   2: 
                     J.getEntries()
                    break;

            default:
                  break;
       }

   }while(counter!=4)
}

function createEntry(){
     let title =  readLine.question("Enter Title: ")
     let content =  readLine.question("Write: \n")
     let newEntry =  J.makeEntry(title,content)
}

main()






console.log("here is what you enter: ".red , question)
