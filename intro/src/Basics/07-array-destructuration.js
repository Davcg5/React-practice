const characters = ["Goku", "Vegeta", "Trunks"];

const [character1, , character3] = characters;
console.log(character1);
console.log(character3);


const returnArray = () => {
    return ['ABC', 123]
}

const [text] = returnArray()
console.log(text)

const returnFunction = (value) => {
    return [value, ()=> {console.log("returning")}]
}

const [name, callMethod] = returnFunction("val")
console.log(name, )
callMethod()