const person = {
    name:'Tony',
    age:45,
    key:'Iron-man'
}

const {name, age, key,} = person

console.log(name)
console.log(age)
console.log(key)

const printPerson = (person) => {
    console.log(person)
}

printPerson(person)

const printPerson2 = ({name}) => {
    console.log(name)
}

printPerson2(person)

const printPerson3 = ({name, movies=3}) => {
    console.log(name)
    console.log(movies)
}

printPerson3(person)

const returnPerson = ({name, age}) => {
    return {
        otherName:name,
        otherAge:age,
        position:{
            x:1,
            y:2,
        }
    }
}

const {otherName, otherAge, position:{x,y}} = returnPerson(person)
console.log(otherName, otherAge, x, y)