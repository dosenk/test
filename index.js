var Alphabet = {
    BINARY:        '01',
    OCTAL:         '01234567',
    DECIMAL:       '0123456789',
    HEXA_DECIMAL:  '0123456789abcdef',
    ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  };
function convert(input, source, target) {
    let inputSys = source.length
    let outputSys = target.length
    console.log(input, inputSys, outputSys);
    // 25 = 1*10 + 1*10 + 5
    // 1111 = 1*2~3 + 1*2~2 + 1*2~1 + 1*2~0 
    let resDec = 0
    // let input = 1111
    let len = input.length - 1
    for (let i = len, j = 0; i >= 0; i--, j++) {
        resDec += input[i] * Math.pow(inputSys, j)
    } 

    console.log(resDec);

    

    
    const rec = (resDec) => {
        result += target[resDec % outputSys]
        console.log(resDec);
        resDecNew = Math.floor(resDec/outputSys)
        if (resDecNew > outputSys) {
            rec(resDecNew)
        }
        return result += target[resDecNew]
    }

    let result = ''
    return rec(resDec).split('').reverse().join('')



    // return resDec
  }

console.log(convert("11100111", Alphabet.BINARY, Alphabet.DECIMAL)); // should return "15"
// console.log(convert("17", Alphabet.OCTAL, Alphabet.DECIMAL)); // should return 15"
// convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
// console.log(convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER));
