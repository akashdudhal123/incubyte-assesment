class IncubyteAssignment {
    public add(input: string): any {
        // Test case 1:  Input: “”, Output: 0
        if (!input) {
            return 0;
        }
        return input;
    }
}

const instance = new IncubyteAssignment();
console.log('Add:', instance.add(''));