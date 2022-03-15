"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const fillArray = (arrFill, f) => {
    for (let i = 0; i < arrFill.length; i++) {
        // if( arrFill[i]){
        arrFill[i] = f(i);
        // }
    }
    return arrFill;
};
// console.log(fillArray([1,2,3,4], m => m + 1));
console.log(fillArray([1, undefined, 3, 4], fillVaraible => fillVaraible = 'salom'));
// fill
