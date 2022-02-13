"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.isNumber = exports.checkNumber = void 0;
function checkNumber(n) {
    return n > 0;
}
exports.checkNumber = checkNumber;
function isNumber(num) {
    return typeof num === 'number';
}
exports.isNumber = isNumber;
var studentList = [
    { id: 1, name: 'linh', age: 22, gender: 'male' },
    { id: 2, name: 'Tuyen', age: 22, gender: 'female' },
];
var newList = __spreadArray([], studentList, true);
newList[0].name = 'Alice alice';
console.log(newList[0]);
