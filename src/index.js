let test = new Promise((resolve, reject) => {
    console.log('1231233');
    resolve('123');
});
console.log(test);

let fun1 = (params) => {
    if (params) {
        console.log(params);
    }
};
fun1('a');

class Boo {
    constructor () {
        this.a = 1;
    }
    get () {
        console.log('1243');
    }
    set () {
        console.log('eqwew');
    }
}

