

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
    
}

module.exports =  Entry;