"use strict";
let employe = {
    id: 1,
    myName: 'Roshan',
    retire: (date) => {
        console.log(date);
    }
};
function multiply(input) {
    if (typeof input === 'number') {
        return input * 2;
    }
    else {
        return parseInt(input) * 3;
    }
}
multiply(8);
multiply('8');
let boy = {
    move: () => { },
    dance: () => { }
};
let num = 10;
//# sourceMappingURL=advance.js.map