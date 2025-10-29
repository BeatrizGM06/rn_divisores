function toEnteroPositivo(texto:string):ResultadoConversion{
    const expresionRegular = /^\d+$/
    const valor = parseInt(texto)
    const exito = expresionRegular.test(texto)
    return { valor, exito }
}

async function calcularDivisores(numero:number):Promise<Array<number>>{
    return new Promise( (resolve,reject) => {
        const lista=[]
        for(let i=1;i<=numero;i++){
            if(numero%i === 0){
                lista.push(i)
            }
        }
        resolve(lista)
    })
    
}

type ResultadoConversion={
    valor:number
    exito:boolean
}

export{toEnteroPositivo,calcularDivisores}