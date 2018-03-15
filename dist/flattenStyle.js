'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=

flattenStyle;var _reactNative=require('react-native');function flattenStyle(style){
var flatStyle=_extends({},_reactNative.StyleSheet.flatten(style));
if(flatStyle.transform){
flatStyle.transform.forEach(function(transform){
var key=Object.keys(transform)[0];
flatStyle[key]=transform[key];
});
delete flatStyle.transform;
}
return flatStyle;
}