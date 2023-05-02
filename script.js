 let url = "https://rickandmortyapi.com/api/character"

 const getdata = (url) =>{
    return fetch (url)
    .then(res => res.json())
    .then(json => { printData(json)})
    .catch(err => { console.log(err)})
}

 const printData = (data) => {
    let html = '';
    data.results.forEach(c => {
        html += '<div class="col m-2">';
            html += '<div class="card" style="width: 15rem;">'
            html += `<img src="${c.image}" class="card-img-top" alt="...">`
            html += '<div class="card-body">'
            html += `<h5 class="card-title">${c.name}</h5>`
            html += `<p class="card-text">Genero ${c.gender}</p>`
            html += `<p class="card-text">Especie ${c.species}</p>`
            html += '</div>'
            html += '</div>'
        html += '</div>'
        
    });
    document.getElementById('infoCaracter').innerHTML =html
     
}
getdata(url);








// const n= new Promise((res, rej)=>{
//     const numero=012
//     if (numero != null || numero != undefined) {
//         if (Number.isInteger(numero)) {
//             if (numero === 0) console.log(`el numero: ${numero} es un numero sin paridad`)
//             if (numero % 2 === 0 && numero != 0) return res(`el numero: ${numero} es par`)
//             if (numero % 2 != 0) console.log(`el numero: ${numero} es impar`)
//         } else console.log("el valor introducido no es un numero")
//     } 
// })
    // if(num%2===0) return res("El numero es par")
    // if(num===0) return res("el numero es 0")
    // return rej("el numero es impar")

// n.then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
// console.log(error)
// })  


