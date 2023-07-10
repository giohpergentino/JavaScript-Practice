let num = [5, 2, 8, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(1)
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor está na posição ${pos}`)
}

######## vetornatela.js

let valores = [2, 4, 1, 5, 8, 9]
valores.sort()

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

for(pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
