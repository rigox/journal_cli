const readLine =  require("readline-sync")
const colors =  require("colors")

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
                 console.log("1")
                 break;
            case   2: 
                    console.log("2")
                    break;

            default:
                  break;
       }

   }while(counter!=4)
}


main()






console.log("here is what you enter: ".red , question)
