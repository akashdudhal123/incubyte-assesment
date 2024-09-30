var IncubyteAssignment = /** @class */ (function () {
    function IncubyteAssignment() {
    }
    IncubyteAssignment.prototype.add = function (input) {
        // Test case 1:  Input: “”, Output: 0
        if (!input) {
            return 0;
        }
        var inputInArray = input.split(',');
        var addition = inputInArray.reduce(function (result, input) {
            var x = +input;
            result += x;
            return result;
        }, 0);
        return addition;
    };
    return IncubyteAssignment;
}());
var instance = new IncubyteAssignment();
console.log('Add:', instance.add('1,2,3'));
