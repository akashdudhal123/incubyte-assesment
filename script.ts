class IncubyteAssignment {
    public add(input: string): any {
        // Test case 1:  Input: “”, Output: 0
        if (!input) {
            return 0;
        }
        const inputInArray = this._convertStringToNumbers(input);
        const negativeNumbers = inputInArray.filter((i: number) => i < 0);

        if (negativeNumbers.length) {
            console.error(`negative numbers not allowed: ${negativeNumbers}`)
            return;
        }
        const addition = inputInArray.reduce((result: number, input: number) => {
            const x = +input;
            result += x;
            return result;
        }, 0);
        return addition;
    }

    private _convertStringToNumbers(data: any) {
        const replaceNewLine = data.replaceAll("\n", ",");
        const inputWithoutDelimiter = replaceNewLine.replaceAll(/[^0-9-\s]/g, ',');
        return inputWithoutDelimiter.split(',');
    }
}

const instance = new IncubyteAssignment();
console.log('Add:', instance.add('1,2,3,\n56,67\n87,\n5,1,-2,-4'));
