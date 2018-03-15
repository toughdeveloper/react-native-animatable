'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=



getStyleValues;var _flattenStyle=require('./flattenStyle');var _flattenStyle2=_interopRequireDefault(_flattenStyle);var _getDefaultStyleValue=require('./getDefaultStyleValue');var _getDefaultStyleValue2=_interopRequireDefault(_getDefaultStyleValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getStyleValues(keys,style){
var values={};
var flatStyle=(0,_flattenStyle2.default)(style);

(typeof keys==='string'?[keys]:keys).forEach(function(key){
values[key]=key in flatStyle?
flatStyle[key]:
(0,_getDefaultStyleValue2.default)(key,flatStyle);
});
return values;
}