let number = 15;

let ourPromise = new Promise((resolve, reject) => {
    let num = number;
    if(num > 10){
        resolve(`Numero mayor a 10 => ${num}`);
    } else {
        reject("Error tipo: Número menor a 10");
    }
})

ourPromise
    .then((val) => console.log(val))
    .catch((err) => console.error(err))

