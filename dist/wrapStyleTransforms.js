'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=
















wrapStyleTransforms;function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var TRANSFORM_STYLE_PROPERTIES=['perspective','rotate','rotateX','rotateY','rotateZ','scale','scaleX','scaleY','skewX','skewY','translateX','translateY'];function wrapStyleTransforms(style){
var wrapped={};
Object.keys(style).forEach(function(key){
if(TRANSFORM_STYLE_PROPERTIES.indexOf(key)!==-1){
if(!wrapped.transform){
wrapped.transform=[];
}
wrapped.transform.push(_defineProperty({},
key,style[key]));

}else{
wrapped[key]=style[key];
}
});
return wrapped;
}