module.exports = function toReadable(number) {
    const decoding = [];
    const arrayOfNumbers = tensAndHundred(number);
    for (let i = 0; i <= arrayOfNumbers.length; i++) {
        decoding[i] = decode(arrayOfNumbers[i]);
    }
    // console.log(decoding);
    return decoding.join(' ').trimEnd();
}

function tensAndHundred(data) {
    if (data.toString().length === 3) {
        const result = [];
        result[0] = parseInt(data.toString().charAt(0));
        result[1] = 100;
        if ((data % 100) === 0) { // если кратно сотне
            return result;
        } else { // если есть остаток
            return [...result, ...unitsAndTens(data % 100)];
        }
    }
    return unitsAndTens(data); // если число не трехзначное
}

function unitsAndTens(number) {
    const result = [];
    if (number <= 20 || number % 10 === 0) { //если меньше 20 или остаток кратно 10
        result[0] = number;
    } else { // если остаток числа не кратен 10
            result[0] = number.toString().charAt(0) * 10;
            result[1] = number % 10;
    }
    return result;
}

function decode(number) {
    switch (number) {
        case (0):
            return 'zero';
        case (1)    :
            return 'one';
        case (2)    :
            return 'two';
        case (3)    :
            return 'three';
        case (4)    :
            return 'four';
        case (5)    :
            return 'five';
        case (6)    :
            return 'six';
        case (7)    :
            return 'seven';
        case (8)    :
            return 'eight';
        case (9)    :
            return 'nine';
        case (10)    :
            return 'ten';
        case (11)    :
            return 'eleven';
        case (12)    :
            return 'twelve';
        case (13)    :
            return 'thirteen';
        case (14)    :
            return 'fourteen';
        case (15)    :
            return 'fifteen';
        case (16)    :
            return 'sixteen';
        case (17)    :
            return 'seventeen';
        case (18)    :
            return 'eighteen';
        case (19)    :
            return 'nineteen';
        case (20)    :
            return 'twenty';
        case (30)    :
            return 'thirty';
        case (40)    :
            return 'forty';
        case (50)    :
            return 'fifty';
        case (60)    :
            return 'sixty';
        case (70)    :
            return 'seventy';
        case (80)    :
            return 'eighty';
        case (90)    :
            return 'ninety';
        case (100) :
            return 'hundred';
    }
}
