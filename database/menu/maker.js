const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `β­ββ’β| *πΌπ΄π½π β±βΏβ° ${botName}* |βΒ° α­
β
βββΊ π·ππππ, ${pushname} π
βββΊ πππππππ πππππππ ππππ, 
βββΊ ${sender.split("@")[0]}
β
β°ββ’β| πΌπ°π½π²π° β±βΏβ° π±πΎπ |ββ’Β°ΰΏ

β­ββ’β|βͺββββ«β±βΏβ°βͺββββ«|ββ’Β° α­
β
βββΊ π½π°πΌπ° : ${pushname}
βββΊ π»π΄ππ΄π» : ${getLevelingLevel(sender)}
βββΊ πππ΄π ${botName} : ${_registered.length}
β
β°ββ’β| πΌπ°π½π²π° β±βΏβ° π±πΎπ |ββ’Β°ΰΏ

β­ββ’β|βͺββββ«β±βΏβ°βͺββββ«|ββ’Β° α­
β
βββΊ *[πππππππ πΌππππππ πΌπππ πΌππππ-πππ]*
βββΊ *πππππ πππππ πππππ :* *${prefix}bingungcok*
β
β°ββ’β| πΌπ°π½π²π° β±βΏβ° π±πΎπ |ββ’Β°ΰΏ

       βͺββββ«β±βΏβ°βͺββββ«

β­ββ’β| πΌπ°πΊπ΄π β±βΏβ° πΌπ΄π½π |ββ’Β° α­
β
βββΊ *${prefix}hartatahta*
βββΊ *${prefix}pornhub*
βββΊ *${prefix}halloweentext*
βββΊ *${prefix}ninjalogo*
βββΊ *${prefix}cloudtext*
βββΊ *${prefix}gemboktext*
βββΊ *${prefix}glitchtext*
βββΊ *${prefix}silktext*
β
β°ββ’β| πΌπ°π½π²π° β±βΏβ° π±πΎπ |ββ’Β°ΰΏ

β­ββ’β|βͺββββ«β±βΏβ°βͺββββ«|ββ’Β° α­
β
βββ’ *πΏπΎππ΄ππ΄π³ π±π ${ownerName}*
β
β°ββ’β| πΌπ°π½π²π° β±βΏβ° π±πΎπ |ββ’Β°ΰΏ`
}
exports.maker = maker