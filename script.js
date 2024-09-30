var IncubyteAssignment = /** @class */ (function () {
    function IncubyteAssignment() {
    }
    IncubyteAssignment.prototype.add = function (input) {
        // Test case 1:  Input: “”, Output: 0
        if (!input) {
            return 0;
        }
        var inputInArray = this._convertStringToNumbers(input);
        var negativeNumbers = inputInArray.filter(function (i) { return i < 0; });
        if (negativeNumbers.length) {
            console.error("negative numbers not allowed: ".concat(negativeNumbers));
            return;
        }
        var addition = inputInArray.reduce(function (result, input) {
            var x = +input;
            result += x;
            return result;
        }, 0);
        return addition;
    };
    IncubyteAssignment.prototype._convertStringToNumbers = function (data) {
        var replaceNewLine = data.replaceAll("\n", ",");
        var inputWithoutDelimiter = replaceNewLine.replaceAll(/[^0-9-\s]/g, ',');
        return inputWithoutDelimiter.split(',');
    };
    return IncubyteAssignment;
}());
var instance = new IncubyteAssignment();
console.log('Add:', instance.add('1,2,3,\n56,67\n87,\n5,1,-2,-4'));
