const array = [1,2,3,4]

// Don't use push use spread
const array2 = [...array, 5]


console.log(array);
console.log(array2);

const array3 = array2.map(function(x){
    return x-1
})
console.log(array3)

const array4 = array3.map(function(x){
    return x
})
console.log(array4)
