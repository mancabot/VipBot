const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `╭❑➢─| *𝙼𝙴𝙽𝚄 ⊱✿⊰ ${botName}* |─° ᭄
╎
╎❒► 𝙷𝚊𝚕𝚕𝚘, ${pushname} 👋
╎❑► 𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚖𝚎𝚗𝚌𝚘𝚋𝚊 𝚄𝚜𝚎𝚛, 
╎❑► ${sender.split("@")[0]}
╎
╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐

╭❑➢─|≪━─━≫⊱✿⊰≪━─━≫|─➢° ᭄
╎
╎❒► 𝙽𝙰𝙼𝙰 : ${pushname}
╎❑► 𝙻𝙴𝚅𝙴𝙻 : ${getLevelingLevel(sender)}
╎❒► 𝚄𝚂𝙴𝚁 ${botName} : ${_registered.length}
╎
╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐

╭❑➢─|≪━─━≫⊱✿⊰≪━─━≫|─➢° ᭄
╎
╎❒► *[𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙼𝚎𝚗𝚌𝚘𝚋𝚊 𝙼𝚎𝚗𝚞 𝙼𝚊𝚗𝚌𝚊-𝚋𝚘𝚝]*
╎❑► *𝚝𝚒𝚍𝚊𝚔 𝚏𝚊𝚑𝚊𝚖 𝚔𝚎𝚝𝚒𝚔 :* *${prefix}bingungcok*
╎
╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐

       ≪━─━≫⊱✿⊰≪━─━≫

╭❑➢─| 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ⊱✿⊰ 𝙼𝙴𝙽𝚄 |─➢° ᭄
╎
╎❒► *${prefix}play*
╎❑► *${prefix}yutubdl*
╎❒► *${prefix}tiktod*
╎
╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐

╭❑➢─|≪━─━≫⊱✿⊰≪━─━≫|─➢° ᭄
╎
╎❑➢ *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 ${ownerName}*
╎
╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐`
}
exports.download = download