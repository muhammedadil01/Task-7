
var num = 5
var str = ''

for(let i = 0 ; i<=num ; i++){

    for(let j = 1; j <=num -i ; j++){

        str += ' '
    }

    for(let k = 1 ; k <= i ; k++){
        str += "*"
    }

    str += '\n'

}

console.log(str);