const moment = require("moment");

const colors = {
    red: '\x1b[31m%s',
    green: '\x1b[32m%s',
    yellow: '\x1b[33m%s',
}

const reset = '\x1b[0m'

function logWithColor (message, color) {
    if (colors[color]) {
        console.log(colors[color] + reset, moment(new Date()).format('YYYY-MM-DD HH:mm') + ' - ' + message)
    }
}


function cLog(message, color) {

    const colorToLowers = color ? color.toLowerCase() : null

    switch (colorToLowers) {
        /* To display any important messages and errors */
        case 'red':
            logWithColor(message, colorToLowers)
            break
        /* To notify that the work is completed. Or has the request been accepted and processed? */
        case 'green':
            logWithColor(message, colorToLowers)
            break
        /* For warnings or implicit instructions */
        case 'yellow':
            logWithColor(message, colorToLowers)
            break
        /* Output with time and standard color */
        default:
            console.log(moment(new Date()).format('YYYY-MM-DD HH:mm') + ' - ' + message)
            break
    }
}

module.exports = cLog
