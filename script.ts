class IncubyteAssignment {
    public add(input: string): any {
        // Test case 1:  Input: “”, Output: 0
        if (!input) {
            return 0;
        }
        const inputInArray = input.split(',');
        const addition = inputInArray.reduce((result, input) => {
            const x = +input;
            result += x;
            return result;
        }, 0);
        return addition;
    }
}

const instance = new IncubyteAssignment();
console.log('Add:', instance.add(''));