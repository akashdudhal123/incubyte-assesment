var IncubyteAssignment = /** @class */ (function () {
    function IncubyteAssignment() {
    }
    IncubyteAssignment.prototype.add = function (input) {
        // Test case 1:  Input: “”, Output: 0
        if (!input) {
            return 0;
        }
        var inputInArray = this._convertStringToNumbers(input);
        var addition = inputInArray.reduce(function (result, input) {
            var x = +input;
            result += x;
            return result;
        }, 0);
        return addition;
    };
    IncubyteAssignment.prototype._convertStringToNumbers = function (data) {
        var replaceNewLine = data.replaceAll("\n", ",");
        return replaceNewLine.split(',');
    };
    return IncubyteAssignment;
}());
var instance = new IncubyteAssignment();
console.log('Add:', instance.add('1,2,3,\n56,67\n87,\n5'));
