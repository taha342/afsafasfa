const chalk = require('chalk')
const moment = require('moment')
const kanal = '778000445758504983'
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}

module.exports = async client => {
  let tarih = moment().format('l');
    client.user.setPresence({activity:{name:`Fors Code | v12 Moderasyon Botu`},status: 'online'})
    log(chalk.green(`[BOT] Aktif, Komutlar Yüklendi ${tarih}`))
  }

//SAFE CODE ❤ #1.5K

//SALVO CODE ❤ #1.6K

//GÜLE GÜLE KULLAN DOSTUM :) ❤ 