
// //const amount =9;
// //if(amount<10){
// //console.log ('small number')
// //}else{
// //    console.log ('Larg number')
// //}
// //console.log("First App");
// //console.log(__dirname);
// //setInterval(()=>{
// //    console.log("Hello hema")
// //},1000)   

// const names=require('./4-names')
// const sayHi= require('./5-utile')
// const data=require('./6-Alternative-Flavor')
// require('./7-mind-grenade')
// //console.log(names)
// // sayHi("susan");
// // sayHi(names.peter); 
// // sayHi(names.jhon)
// // console.log(data.singlePerson);
// // console.log(data);
// // console.log(data.items);
// console.log(first);
// const http1= require('http')
const _=require("lodash")
const items=[1,[2,[3,[4]]]]
const newItem=_.flattenDeep(items)
console.log(newItem);


