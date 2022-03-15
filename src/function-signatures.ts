import { type } from "os";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

// Map

// type MapArr = (arrParam: any) => any;

// type NewMap = ( arr: any[], p: MapArr ) => any[]
// const newMapArr: NewMap = ( arr, p ) => {
//    let arrayNew: any[] = []
//    for(let key of arr){
//       arrayNew.push(p(key))
//    }
//    return arrayNew
// } 
// let arrAny: any[] = ['sd','salom', 'srt','sdfgd']
// console.log(newMapArr( arrAny, arrParam => arrParam.toLowerCase() ));

// Map



// find

// type Predicat = (num: number) => boolean
// type Find = (arraysNumber: number[], find: Predicat) => number | undefined
// const filterNumber: Find = (arraysNumber, find) => {

//    let n: number | undefined = 0
//    for( let key of arraysNumber ) {
//       if(find( key )){
//          n =  key
//          break;
//       } else{ n = undefined }
//    }
//    return n
// }

// console.log(filterNumber([2,5,7,8,5], (num) => num === 70));

// find
// type PredicatFill = (fillVaraible: any) => any;

// type Fill = (arrFill: any[], f: PredicatFill) => any[];

// const fillArray: Fill = ( arrFill, f ) => {
//    for( let i = 0; i < arrFill.length; i++ ) {
//          arrFill[i] = f(i)
//    }
//    return arrFill
// }
// console.log(fillArray([1, undefined,3,4], fillVaraible =>  fillVaraible = 'salom'));
// fill

