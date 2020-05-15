const Entry =  require("./Entry")



class Journal{ 
     constructor(){
            this.entries = []
     }
  
       makeEntry(title,content){
           let newEntry =  new Entry(title, content)
           this.entries.push(newEntry)
      }

      getEntries(){
            this.entries.forEach(e=>{
                     console.log(e.getEntry())
                })
      }

}

module.exports =  Journal;