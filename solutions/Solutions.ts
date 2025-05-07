// problem 1
const formString = (param: string, toUpper?: boolean): string => {
    if (toUpper === false) {
        return param.toLowerCase();
    } else if (toUpper) {
        return param.toUpperCase();
    } else {
        return param.toUpperCase();
    }
};

const r1 = formString('HELLO');
// console.log(r1);
