function toEnteroPositivo(texto:string):ResultadoConversion{
    const expresionRegular = /^\d+$/
    const valor = parseInt(texto)
    const exito = expresionRegular.test(texto)
    return { valor, exito }
}

function calcularDivisores(numero:number):Array<number>{
    const lista=[]
    for(let i=1;i<=numero;i++){
        if(numero%i === 0){
            lista.push(i)
        }
    }
    return lista
}

type ResultadoConversion={
    valor:number
    exito:boolean
}

export{toEnteroPositivo,calcularDivisores}