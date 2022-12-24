
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use these commands without the prefix_

▢ If you have more audio   
send me by t.me/i_want_to_be_isekaied *audio + command* with which you will respond

┌─⊷ *AUDIOS* 
▢ Bot
▢ HELLO
▢ Good afternoon!
▢ Goodnight
└──────────────
`
//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = './src/fg_logo.jpg' 
    conn.sendButton(m.chat, m2, '▢ komi  ┃ ᴮᴼᵀ https://chat.whatsapp.com/CX9XKj3hrze6sFcY6Yalj0', pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Groups', `${usedPrefix}gpdylux`]
    ],m, rpyt)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
