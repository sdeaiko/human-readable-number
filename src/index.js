module.exports = function toReadable (number) {
    let num_values = {
        '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five',
        '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten',
        '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen',
        '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen', '20': 'twenty',
        '30': 'thirty', '40': 'forty', '50': 'fifty', '60': 'sixty', '70': 'seventy', '80': 'eighty', '90': 'ninety'
      };
    str_num = String(number);
    function inner_function(str_num) {
        number = parseInt(str_num)
        if (str_num.length == 1) {
            return num_values[str_num]
        } else if (number % 10 == 0 && str_num.length == 2) {
            return num_values[str_num]
        } else if (number > 10 && number < 20 && str_num.length == 2) {
            return num_values[str_num]
        } else if (str_num.length == 2) {
            let first_num = str_num[0] + '0' // 8
            let res = '' 
            let second_num = str_num[1]
            res += num_values[first_num] + ' ' + num_values[second_num]
            return res;
        }
    }

    if (str_num.length == 2 || str_num.length == 1) {
        return inner_function(str_num)
    } else if (str_num.length == 3 && number % 100 == 0) {
        let first_num = str_num[0]
        return num_values[first_num] + ' hundred' 
    } else if (str_num.length == 3) {
        let res = ''
        let first_part = str_num[0]
        let second_part = ''
        if (str_num[1] == 0) {
            second_part = str_num[2]
        } else {
            second_part = str_num[1] + str_num[2]
        }
        res += num_values[first_part] + ' hundred ' + inner_function(second_part)
        return res;
    }
}
