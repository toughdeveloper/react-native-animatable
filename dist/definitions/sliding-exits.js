'use strict';Object.defineProperty(exports,"__esModule",{value:true});function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function makeSlideOutTranslation(translationType,fromValue){
return{
from:_defineProperty({},
translationType,0),

to:_defineProperty({},
translationType,fromValue)};


}

var slideOutDown=exports.slideOutDown=makeSlideOutTranslation('translateY',100);

var slideOutUp=exports.slideOutUp=makeSlideOutTranslation('translateY',-100);

var slideOutLeft=exports.slideOutLeft=makeSlideOutTranslation('translateX',-100);

var slideOutRight=exports.slideOutRight=makeSlideOutTranslation('translateX',100);