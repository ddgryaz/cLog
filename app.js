const moment = require("moment");

const colors = {
    red: '\x1b[31m%s',
    green: '\x1b[32m%s',
    yellow: '\x1b[33m%s',
}

const reset = '\x1b[0m'

function logWithColor (message, color) {
    if (colors[color]) {
        console.log(colors[color] + reset, moment(new Date()).format('YYYY-MM-DD hh:mm a') + ' - ' + message)
    }
}


function cLog(message, color) {

    switch (color) {
        case 'red':
            logWithColor(message, color)
            break
        case 'green':
            logWithColor(message, color)
            break
        case 'yellow':
            logWithColor(message, color)
            break
        default:
            console.log(moment(new Date()).format('YYYY-MM-DD hh:mm a') + ' - ' + message)
            break
    }
}

module.exports = cLog
