'use strict';Object.defineProperty(exports,"__esModule",{value:true});function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function makeFadeInTranslation(translationType,fromValue){
return{
from:_defineProperty({
opacity:0},
translationType,fromValue),

to:_defineProperty({
opacity:1},
translationType,0)};


}

var fadeIn=exports.fadeIn={
from:{
opacity:0},

to:{
opacity:1}};



var fadeInDown=exports.fadeInDown=makeFadeInTranslation('translateY',-100);

var fadeInUp=exports.fadeInUp=makeFadeInTranslation('translateY',100);

var fadeInLeft=exports.fadeInLeft=makeFadeInTranslation('translateX',-100);

var fadeInRight=exports.fadeInRight=makeFadeInTranslation('translateX',100);

var fadeInDownBig=exports.fadeInDownBig=makeFadeInTranslation('translateY',-500);

var fadeInUpBig=exports.fadeInUpBig=makeFadeInTranslation('translateY',500);

var fadeInLeftBig=exports.fadeInLeftBig=makeFadeInTranslation('translateX',-500);

var fadeInRightBig=exports.fadeInRightBig=makeFadeInTranslation('translateX',500);