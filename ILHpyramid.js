var num = 5
var str = ''

for(let i = num ; i>= 1 ; i--){

    for(let j = 1; j <=i ; j++){

        str += ' *'
    }

    str += '\n'

}

console.log(str);