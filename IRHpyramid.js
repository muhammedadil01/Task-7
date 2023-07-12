var num = 5
var str = ''

for(let i = 0 ; i<=num ; i++){

    for(let j = 1; j <=i ; j++){
        str += ' '
    }

    for(let k = i ; k <= num ; k++){
        str += "*"
    }

    str += '\n'

}

console.log(str);