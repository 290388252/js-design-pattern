class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age) {
        super(name)
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
let p = new Student('yanchao1', 12);
alert(p.getName());
alert(p.getAge());