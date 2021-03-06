

class Entry{
 
      constructor(title, content){
            this.title  =  title;
            this.content = content;
            this.timestamp =  new Date().toUTCString()
      }

      getTitle(){
            return this.title
      } 

      getContent(){
             return this.content
      }

      getTimeStamp(){
            return   this.timestamp
      }

      getEntry(){
             let  entry  = '\n Title : '.green.italic.bold + this.title + '\n' +
                            "Content:  ".green + this.content + '\n'  +
                            'Time Created: '.underline.green + this.timestamp +'\n'

             return entry;
      }
    
}

module.exports =  Entry;