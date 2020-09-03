"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temp = void 0;
var Temp = /** @class */ (function () {
    function Temp() {
        this.noTemporal = 0;
    }
    Temp.prototype.getTemporal = function () {
        this.noTemporal++;
        return "T" + this.noTemporal;
    };
    return Temp;
}());
exports.Temp = Temp;
