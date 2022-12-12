
import {getHeroById} from './Basics/08-imports-exports'

const promesa = new Promise(
    (resolve, reject) =>{
        const heroe = getHeroById(2)
        resolve(heroe)
    }
);

promesa.then((heroe)=> {
    console.log("heroe", heroe)
})
.catch(err => console.warn(err))


const getHeroByIdAsync = (id) => {
    return new Promise(
        (resolve, reject) => {
            const heroe = getHeroById(id);
            if (heroe){
                resolve(heroe)
            }
            else {
                reject("No hay")
            }
        }
    )
}

getHeroByIdAsync(30).then(
    heroe => console.log('Heroe', heroe)
).catch(err => console.warn(err))
getHeroByIdAsync(30).then(
    console.log
).catch(console.warn)