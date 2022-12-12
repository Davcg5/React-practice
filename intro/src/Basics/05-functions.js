const salute = function(name) {
    return `Hi, I'm ${name}`
}

const salute2 = () => {
    return `Hi man`
}

const salute3 = (name) => `Hi!!!!! ${name}`

const salute4 = () => `Hi!!!!!`

console.log(salute('Goku'))
console.log(salute2())
console.log(salute3('Gohan'))
console.log(salute4())

const getUser = () => (
    {
        name:"Dav"
    }
)

const user = getUser()
console.log(user)