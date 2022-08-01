console.log('start')
const {readFileSync,writeFileSyncSync, writeFileSync}=require('fs')
const first=readFileSync('./Content/First.txt','utf-8')
const second=readFileSync('./Content/second.txt','utf-8')

writeFileSync('./content/resultsync.txt',`Here is a result  :${first},${second}`,{flag:'a'})
console.log('done with this file')
console.log('strting with next one')

