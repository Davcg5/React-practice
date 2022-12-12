const person = {
    name: 'David',
    lastName: 'Cárdenas',
    age: 27,
};

const person2 = {...person}
person2.name = 'Alex'

console.log(person)
console.log(person2)