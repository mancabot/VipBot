const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
βββ’ *π±ππππππ ππππππ πππππ π’πππ πππ ππππ πππ πππ*
β
β°ββ’β| πΌπ°π½π²π° β±βΏβ° π±πΎπ |ββ’Β°ΰΏ

       βͺββββ«β±βΏβ°βͺββββ«
       
β­ββ’β| ππ°π½π³πΎπΌ β±βΏβ° πΌπ΄π½π |ββ’Β° α­
β
βββΊ *${prefix}randomhentong*
βββΊ *${prefix}nekonime*
βββΊ *${prefix}wibu*
βββΊ *${prefix}loli*
βββΊ *${prefix}neko*
βββΊ *${prefix}blowjob*
βββΊ *${prefix}husbu*
βββΊ *${prefix}kpop*
βββΊ *${prefix}anjing*
βββΊ *${prefix}pokemon*
β
β°ββ’β| πΌπ°π½π²π° β±βΏβ° π±πΎπ |ββ’Β°ΰΏ

β­ββ’β|βͺββββ«β±βΏβ°βͺββββ«|ββ’Β° α­
β
βββ’ *πΏπΎππ΄ππ΄π³ π±π ${ownerName}*
β
β°ββ’β| πΌπ°π½π²π° β±βΏβ° π±πΎπ |ββ’Β°ΰΏ`
}
exports.random = random