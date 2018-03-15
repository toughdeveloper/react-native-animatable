'use strict';Object.defineProperty(exports,"__esModule",{value:true});function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function makeSlideInTranslation(translationType,fromValue){
return{
from:_defineProperty({},
translationType,fromValue),

to:_defineProperty({},
translationType,0)};


}

var slideInDown=exports.slideInDown=makeSlideInTranslation('translateY',-100);

var slideInUp=exports.slideInUp=makeSlideInTranslation('translateY',100);

var slideInLeft=exports.slideInLeft=makeSlideInTranslation('translateX',-100);

var slideInRight=exports.slideInRight=makeSlideInTranslation('translateX',100);