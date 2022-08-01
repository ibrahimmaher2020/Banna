console.log("Start");
const {readFile,writeFile}=require('fs')
readFile ('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/second.txt','utf8',(erro,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const secod = result
        writeFile('./content/resultsync.txt',`Here is the Result ${first},${secod}`,
        (error,result)=>{
        if(err) {
            console.log(err);
            return    
        }
        console.log('Done with this task');
        })
    })    
})
console.log('Starting with next task');
