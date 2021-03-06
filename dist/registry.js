'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.



registerAnimation=registerAnimation;exports.



getAnimationByName=getAnimationByName;exports.



getAnimationNames=getAnimationNames;exports.



initializeRegistryWithDefinitions=initializeRegistryWithDefinitions;var _createAnimation=require('./createAnimation');var _createAnimation2=_interopRequireDefault(_createAnimation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var animationRegistry={};function registerAnimation(animationName,animation){animationRegistry[animationName]=animation;}function getAnimationByName(animationName){return animationRegistry[animationName];}function getAnimationNames(){return Object.keys(animationRegistry);}function initializeRegistryWithDefinitions(definitions){
Object.keys(definitions).forEach(function(animationName){
registerAnimation(
animationName,
(0,_createAnimation2.default)(definitions[animationName]));

});
}