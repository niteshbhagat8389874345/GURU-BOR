import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['916294337316', 'NIGHT', true],
  [''], 
  [''] 
] //Numeros de owner 

global.mods = ['917908632051', 918822021347] 
global.prems = ['917908632051', '917908632051', '917908632051']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'NIGHT🌙' 
global.author = '@NIGHT🌙' 
global.igfg = 'https://chat.whatsapp.com/BYvsMPfQpd5Ed7TkStNNPA' 
global.dygp = 'https://chat.whatsapp.com/BYvsMPfQpd5Ed7TkStNNPA'
global.fgsc = 'https://chat.whatsapp.com/BYvsMPfQpd5Ed7TkStNNPA' 
global.fgyt = 'https://chat.whatsapp.com/BYvsMPfQpd5Ed7TkStNNPA'
global.fgpyp = 'https://chat.whatsapp.com/BYvsMPfQpd5Ed7TkStNNPA'
global.fglog = 'https://chat.whatsapp.com/BYvsMPfQpd5Ed7TkStNNPA' 

global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
