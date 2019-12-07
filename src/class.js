export default class Boo {
    constructor (age) {
        this.age = age;
        this._name = 'lys';
    }
    get name () {
        console.log('1243');
        return this._name;
    }
    set name (name) {
        console.log('eqwew', name);
        this._name = name;
    }
    look () {

    }
}