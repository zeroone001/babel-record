// import "core-js/stable";
// import "regenerator-runtime/runtime";

import Boo from './class.js';

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

const t1 = new Boo('liuyongsheng');
console.log(t1.age);
