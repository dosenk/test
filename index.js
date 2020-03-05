// module.exports = 
function toReadable(number) {
    var numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    }

    // let length = String(number).length;
    //           990
    //  nulls = 100;
    for (var nulls = 1, i = 1; i < String(number).length; i ++ ) nulls *= 10;

    let dec = number % nulls // 90

    let ost = dec != 0 ? dec % (nulls/10) : undefined;
    console.log(nulls + ' ' + dec + ' ' + ost);
    return numbers[(number - dec)/nulls] += 0 < dec < 20  || ost == 0 ? numbers[dec] : numbers[dec - ost] + ' ' + numbers[ost];
    //  let dec = number 
    


https://docs.google.com/forms/u/0/d/e/1FAIpQLScHaTjoazbz8mworB6A-mP1tZf_adJLreQ_VwfYQYgOANOC-A/formResponse

    // 999 (900 + 99 + 9) ---- 990 (900 + 90) ---- 919 (900 + 19) ---- 900 ----- 99 (90 + 9) ------ 90 ------ <20 
  
    return dec;





    // if (number < 20) {
    //     return numbers[number];
    // } else if (String(number).length == 2) {
    //     let ost = number % 10;
    //     let dec = number - ost;
    //     return ost == 0 ? numbers[dec] : numbers[dec] + ' ' + numbers[ost];
    // } else if (String(number).length == 3) {
    //     let ost = (number % 100) % 10;
    //     let dec = (number % 100);
    //     console.log(dec + ' ' + ost);
    //     let sot = Number(String(number)[0]);
    //     return numbers[sot] += dec == 0 ? ' hundred ' : (dec - ost) < 20 ?  ' hundred ' + numbers[dec] : ' hundred ' + (ost == 0 ? numbers[dec] : numbers[dec - ost] + ' ' + numbers[ost]);
    // }
};

console.log(toReadable(100));
