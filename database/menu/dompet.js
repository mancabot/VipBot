const dompet = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
╎❑➢ *𝙱𝚎𝚛𝚒𝚔𝚞𝚝 𝚊𝚍𝚊𝚕𝚊𝚑 𝚏𝚒𝚝𝚞𝚛 𝚢𝚊𝚗𝚐 𝚊𝚍𝚊 𝚙𝚊𝚍𝚊 𝚋𝚘𝚝 𝚒𝚗𝚒*
╎
╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐

       ≪━─━≫⊱✿⊰≪━─━≫
       
╭❑➢─| 𝙳𝙾𝙼𝙿𝙴𝚃𝙺𝚄 ⊱✿⊰ 𝙼𝙴𝙽𝚄 |─➢° ᭄
╎
╎❒► *${prefix}limit*
╎❑► *${prefix}atm*
╎❒► *${prefix}transfer*
╎❑► *${prefix}buylimit*
╎
╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐

╭❑➢─|≪━─━≫⊱✿⊰≪━─━≫|─➢° ᭄
╎
╎❑➢ *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 ${ownerName}*
╎
╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐`
}
exports.dompet = dompet