class IncubyteAssignment {
    public add(input: string): any {
        // Test case 1:  Input: “”, Output: 0
        if (!input) {
            return 0;
        }
        const inputInArray = this._convertStringToNumbers(input);
        const addition = inputInArray.reduce((result: number, input: number) => {
            const x = +input;
            result += x;
            return result;
        }, 0);
        return addition;
    }

    private _convertStringToNumbers(data: any) {
        const replaceNewLine = data.replaceAll("\n", ",");
        return replaceNewLine.split(',');
    }
}

const instance = new IncubyteAssignment();
console.log('Add:', instance.add('1,2,3,\n56,67\n87,\n5'));
