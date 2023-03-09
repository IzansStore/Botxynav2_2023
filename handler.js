import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

/**
 * @type {import('@adiwajshing/baileys')}
 */
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
 
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    
    global.img = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' 
    
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
              // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== "object")
                global.db.data.users[m.sender] = {}
            if (user) {
            if (!("BannedReason" in user)) user.BannedReason = ""
              if (!("Banneduser" in user)) user.Banneduser = false
              if (!("afkReason" in user)) user.afkReason = ""
              if (!("autolevelup" in user)) user.autolevelup = true
              if (!("banned" in user)) user.banned = false
              if (!("catatan" in user)) user.catatan = ""
              if (!("job" in user)) user.job = ""
              if (!("kingdom" in user)) user.kingdom = true
              if (!("misi" in user)) user.misi = ""
              if (!("pasangan" in user)) user.pasangan = ""
              if (!("premium" in user)) user.premium = false
              if (!("registered" in user)) user.registered = false
              if (!("role" in user)) user.role = "Beginner"
              if (!("sewa" in user)) user.sewa = false
              if (!("skill" in user)) user.skill = ""
              if (!("title" in user)) user.title = ""
              
                if (!user.registered) {
                    if (!("name" in user)) user.name = m.name
                    if (!isNumber(user.age)) user.age = -1
                    if (!isNumber(user.anggur)) user.anggur = 0
                    if (!isNumber(user.apel)) user.apel = 0
                    if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
                    if (!isNumber(user.bibitapel)) user.bibitapel = 0
                    if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
                    if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
                    if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
                    if (!isNumber(user.emas)) user.emas = 0
                    if (!isNumber(user.jeruk)) user.jeruk = 0
                    if (!isNumber(user.kayu)) user.kayu = 0
                    if (!isNumber(user.makanan)) user.makanan = 0
                    if (!isNumber(user.mangga)) user.mangga = 0
                    if (!isNumber(user.pisang)) user.pisang = 0
                    if (!isNumber(user.premiumDate)) user.premiumDate = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                    if (!isNumber(user.semangka)) user.semangka = 0
                    if (!isNumber(user.stroberi)) user.stroberi = 0
                }
              
              
              if (!isNumber(user.afk)) user.afk = -1
              if (!isNumber(user.agility)) user.agility = 0
              if (!isNumber(user.anakanjing)) user.anakanjing = 0
              if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
              if (!isNumber(user.anakgriffin)) user.anakgriffin = 0
              if (!isNumber(user.anakkucing)) user.anakkucing = 0
              if (!isNumber(user.anakkuda)) user.anakkuda = 0
              if (!isNumber(user.anakkyubi)) user.anakkyubi = 0
              if (!isNumber(user.anaknaga)) user.anaknaga = 0
              if (!isNumber(user.anakpancingan)) user.anakpancingan = 0
              if (!isNumber(user.anakphonix)) user.anakphonix = 0
              if (!isNumber(user.anakrubah)) user.anakrubah = 0
              if (!isNumber(user.anakserigala)) user.anakserigala = 0
              if (!isNumber(user.anggur)) user.anggur = 0
              if (!isNumber(user.anjing)) user.anjing = 0
              if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
              if (!isNumber(user.antispam)) user.antispam = 0
              if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
              if (!isNumber(user.apel)) user.apel = 0
              if (!isNumber(user.aqua)) user.aqua = 0
              if (!isNumber(user.arc)) user.arc = 0
              if (!isNumber(user.arcdurability)) user.arcdurability = 0
              if (!isNumber(user.arlok)) user.arlok = 0
              if (!isNumber(user.armor)) user.armor = 0
              if (!isNumber(user.armordurability)) user.armordurability = 0
              if (!isNumber(user.armormonster)) user.armormonster = 0
              if (!isNumber(user.as)) user.as = 0
              if (!isNumber(user.atm)) user.atm = 0
              if (!isNumber(user.axe)) user.axe = 0
              if (!isNumber(user.axedurability)) user.axedurability = 0
              if (!isNumber(user.ayam)) user.ayam = 0
              if (!isNumber(user.ayamb)) user.ayamb = 0
              if (!isNumber(user.ayambakar)) user.ayambakar = 0
              if (!isNumber(user.ayamg)) user.ayamg = 0
              if (!isNumber(user.ayamgoreng)) user.ayamgoreng = 0
              if (!isNumber(user.babi)) user.babi = 0
              if (!isNumber(user.babihutan)) user.babihutan = 0
              if (!isNumber(user.babipanggang)) user.babipanggang = 0
              if (!isNumber(user.bandage)) user.bandage = 0
              if (!isNumber(user.bank)) user.bank = 0
              if (!isNumber(user.banteng)) user.banteng = 0
              if (!isNumber(user.batu)) user.batu = 0
              if (!isNumber(user.bawal)) user.bawal = 0
              if (!isNumber(user.bawalbakar)) user.bawalbakar = 0
              if (!isNumber(user.bayam)) user.bayam = 0
              if (!isNumber(user.berlian)) user.berlian = 10
              if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
              if (!isNumber(user.bibitapel)) user.bibitapel = 0
              if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
              if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
              if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
              if (!isNumber(user.botol)) user.botol = 0
              if (!isNumber(user.bow)) user.bow = 0
              if (!isNumber(user.bowdurability)) user.bowdurability = 0
              if (!isNumber(user.boxs)) user.boxs = 0
              if (!isNumber(user.brick)) user.brick = 0
              if (!isNumber(user.brokoli)) user.brokoli = 0
              if (!isNumber(user.buaya)) user.buaya = 0
              if (!isNumber(user.buntal)) user.buntal = 0
              if (!isNumber(user.cat)) user.cat = 0
              if (!isNumber(user.catexp)) user.catexp = 0
              if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
              if (!isNumber(user.centaur)) user.centaur = 0
              if (!isNumber(user.centaurexp)) user.centaurexp = 0
              if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0
              if (!isNumber(user.centaurlastfeed)) user.centaurlastfeed = 0
              if (!isNumber(user.clay)) user.clay = 0
              if (!isNumber(user.coal)) user.coal = 0
              if (!isNumber(user.coin)) user.coin = 0
              if (!isNumber(user.common)) user.common = 0
              if (!isNumber(user.crystal)) user.crystal = 0
              if (!isNumber(user.cumi)) user.cumi = 0
              if (!isNumber(user.cupon)) user.cupon = 0
              if (!isNumber(user.diamond)) user.diamond = 0
              if (!isNumber(user.dog)) user.dog = 0
              if (!isNumber(user.dogexp)) user.dogexp = 0
              if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
              if (!isNumber(user.dory)) user.dory = 0
              if (!isNumber(user.dragon)) user.dragon = 0
              if (!isNumber(user.dragonexp)) user.dragonexp = 0
              if (!isNumber(user.dragonlastfeed)) user.dragonlastfeed = 0
              if (!isNumber(user.emas)) user.emas = 0
              if (!isNumber(user.emerald)) user.emerald = 0
              if (!isNumber(user.enchant)) user.enchant = 0
              if (!isNumber(user.esteh)) user.esteh = 0
              if (!isNumber(user.exp)) user.exp = 0
              if (!isNumber(user.expg)) user.expg = 0
              if (!isNumber(user.exphero)) user.exphero = 0
              if (!isNumber(user.fishingrod)) user.fishingrod = 0
              if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
              if (!isNumber(user.fortress)) user.fortress = 0
              if (!isNumber(user.fox)) user.fox = 0
              if (!isNumber(user.foxexp)) user.foxexp = 0
              if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
              if (!isNumber(user.fullatm)) user.fullatm = Infinity
              if (!isNumber(user.gadodado)) user.gadodado = 0
              if (!isNumber(user.gajah)) user.gajah = 0
              if (!isNumber(user.gamemines)) user.gamemines = false
              if (!isNumber(user.ganja)) user.ganja = 0
              if (!isNumber(user.gardenboxs)) user.gardenboxs = 0
              if (!isNumber(user.gems)) user.gems = 0
              if (!isNumber(user.glass)) user.glass = 0
              if (!isNumber(user.glimit)) user.glimit = 20
              if (!isNumber(user.glory)) user.glory = 0
              if (!isNumber(user.gold)) user.gold = 0
              if (!isNumber(user.griffin)) user.griffin = 0
              if (!isNumber(user.griffinexp)) user.griffinexp = 0
              if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 0
              if (!isNumber(user.griffinlastfeed)) user.griffinlastfeed = 0
              if (!isNumber(user.gulai)) user.gulai = 0
              if (!isNumber(user.gurita)) user.gurita = 0
              if (!isNumber(user.harimau)) user.harimau = 0
              if (!isNumber(user.haus)) user.haus = 100
              if (!isNumber(user.healt)) user.healt = 100
              if (!isNumber(user.health)) user.health = 100
              if (!isNumber(user.healthmonster)) user.healthmonster = 0
              if (!isNumber(user.healtmonster)) user.healtmonster = 0
              if (!isNumber(user.hero)) user.hero = 1
              if (!isNumber(user.herolastclaim)) user.herolastclaim = 0
              if (!isNumber(user.hiu)) user.hiu = 0
              if (!isNumber(user.horse)) user.horse = 0
              if (!isNumber(user.horseexp)) user.horseexp = 0
              if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
              if (!isNumber(user.ikan)) user.ikan = 0
              if (!isNumber(user.ikanbakar)) user.ikanbakar = 0
              if (!isNumber(user.intelligence)) user.intelligence = 0
              if (!isNumber(user.iron)) user.iron = 0
              if (!isNumber(user.jagung)) user.jagung = 0
              if (!isNumber(user.jagungbakar)) user.jagungbakar = 0
              if (!isNumber(user.jeruk)) user.jeruk = 0
              if (!isNumber(user.joinlimit)) user.joinlimit = 1
              if (!isNumber(user.judilast)) user.judilast = 0
              if (!isNumber(user.kaleng)) user.kaleng = 0
              if (!isNumber(user.kambing)) user.kambing = 0
              if (!isNumber(user.kangkung)) user.kangkung = 0
              if (!isNumber(user.kapak)) user.kapak = 0
              if (!isNumber(user.kardus)) user.kardus = 0
              if (!isNumber(user.katana)) user.katana = 0
              if (!isNumber(user.katanadurability)) user.katanadurability = 0
              if (!isNumber(user.kayu)) user.kayu = 0
              if (!isNumber(user.kentang)) user.kentang = 0
              if (!isNumber(user.kentanggoreng)) user.kentanggoreng = 0
              if (!isNumber(user.kepiting)) user.kepiting = 0
              if (!isNumber(user.kepitingbakar)) user.kepitingbakar = 0
              if (!isNumber(user.kerbau)) user.kerbau = 0
              if (!isNumber(user.kerjadelapan)) user.kerjadelapan = 0
              if (!isNumber(user.kerjadelapanbelas)) user.kerjadelapanbelas = 0
              if (!isNumber(user.kerjadua)) user.kerjadua = 0
              if (!isNumber(user.kerjaduabelas)) user.kerjaduabelas = 0
              if (!isNumber(user.kerjaduadelapan)) user.kerjaduadelapan = 0
              if (!isNumber(user.kerjaduadua)) user.kerjaduadua = 0
              if (!isNumber(user.kerjaduaempat)) user.kerjaduaempat = 0
              if (!isNumber(user.kerjaduaenam)) user.kerjaduaenam = 0
              if (!isNumber(user.kerjadualima)) user.kerjadualima = 0
              if (!isNumber(user.kerjaduapuluh)) user.kerjaduapuluh = 0
              if (!isNumber(user.kerjaduasatu)) user.kerjaduasatu = 0
              if (!isNumber(user.kerjaduasembilan)) user.kerjaduasembilan = 0
              if (!isNumber(user.kerjaduatiga)) user.kerjaduatiga = 0
              if (!isNumber(user.kerjaduatujuh)) user.kerjaduatujuh = 0
              if (!isNumber(user.kerjaempat)) user.kerjaempat = 0
              if (!isNumber(user.kerjaempatbelas)) user.kerjaempatbelas = 0
              if (!isNumber(user.kerjaenam)) user.kerjaenam = 0
              if (!isNumber(user.kerjaenambelas)) user.kerjaenambelas = 0
              if (!isNumber(user.kerjalima)) user.kerjalima = 0
              if (!isNumber(user.kerjalimabelas)) user.kerjalimabelas = 0
              if (!isNumber(user.kerjasatu)) user.kerjasatu = 0
              if (!isNumber(user.kerjasebelas)) user.kerjasebelas = 0
              if (!isNumber(user.kerjasembilan)) user.kerjasembilan = 0
              if (!isNumber(user.kerjasembilanbelas)) user.kerjasembilanbelas = 0
              if (!isNumber(user.kerjasepuluh)) user.kerjasepuluh = 0
              if (!isNumber(user.kerjatiga)) user.kerjatiga = 0
              if (!isNumber(user.kerjatigabelas)) user.kerjatigabelas = 0
              if (!isNumber(user.kerjatigapuluh)) user.kerjatigapuluh = 0
              if (!isNumber(user.kerjatujuh)) user.kerjatujuh = 0
              if (!isNumber(user.kerjatujuhbelas)) user.kerjatujuhbelas = 0
              if (!isNumber(user.korbanngocok)) user.korbanngocok = 0
              if (!isNumber(user.kubis)) user.kubis = 0
              if (!isNumber(user.kucing)) user.kucing = 0
              if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
              if (!isNumber(user.kuda)) user.kuda = 0
              if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
              if (!isNumber(user.kyubi)) user.kyubi = 0
              if (!isNumber(user.kyubiexp)) user.kyubiexp = 0
              if (!isNumber(user.kyubilastclaim)) user.kyubilastclaim = 0
              if (!isNumber(user.kyubilastfeed)) user.kyubilastfeed = 0
              if (!isNumber(user.labu)) user.labu = 0
              if (!isNumber(user.laper)) user.laper = 100
              if (!isNumber(user.lastadventure)) user.lastadventure = 0
              if (!isNumber(user.lastbansos)) user.lastbansos = 0
              if (!isNumber(user.lastberbru)) user.lastberbru = 0
              if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
              if (!isNumber(user.lastbunga)) user.lastbunga = 0
              if (!isNumber(user.lastbunuhi)) user.lastbunuhi = 0
              if (!isNumber(user.lastclaim)) user.lastclaim = 0
              if (!isNumber(user.lastcode)) user.lastcode = 0
              if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
              if (!isNumber(user.lastcrusade)) user.lastcrusade = 0
              if (!isNumber(user.lastdagang)) user.lastdagang = 0
              if (!isNumber(user.lastduel)) user.lastduel = 0
              if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
              if (!isNumber(user.lasteasy)) user.lasteasy = 0
              if (!isNumber(user.lastfight)) user.lastfight = 0
              if (!isNumber(user.lastfishing)) user.lastfishing = 0
              if (!isNumber(user.lastgift)) user.lastgift = 0
              if (!isNumber(user.lastgojek)) user.lastgojek = 0
              if (!isNumber(user.lastgrab)) user.lastgrab = 0
              if (!isNumber(user.lasthourly)) user.lasthourly = 0
              if (!isNumber(user.lasthunt)) user.lasthunt = 0
              if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
              if (!isNumber(user.lastjb)) user.lastjb = 0
              if (!isNumber(user.lastkill)) user.lastkill = 0
              if (!isNumber(user.lastlink)) user.lastlink = 0
              if (!isNumber(user.lastlumber)) user.lastlumber = 0
              if (!isNumber(user.lastmancingeasy)) user.lastmancingeasy = 0
              if (!isNumber(user.lastmancingextreme)) user.lastmancingextreme = 0
              if (!isNumber(user.lastmancinghard)) user.lastmancinghard = 0
              if (!isNumber(user.lastmancingnormal)) user.lastmancingnormal = 0
              if (!isNumber(user.lastmining)) user.lastmining = 0
              if (!isNumber(user.lastmisi)) user.lastmisi = 0
              if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
              if (!isNumber(user.lastmulung)) user.lastmulung = 0
              if (!isNumber(user.lastnambang)) user.lastnambang = 0
              if (!isNumber(user.lastnebang)) user.lastnebang = 0
              if (!isNumber(user.lastngocok)) user.lastngocok = 0
              if (!isNumber(user.lastngojek)) user.lastngojek = 0
              if (!isNumber(user.lastopen)) user.lastopen = 0
              if (!isNumber(user.lastpekerjaan)) user.lastpekerjaan = 0
              if (!isNumber(user.lastpotionclaim)) user.lastpotionclaim = 0
              if (!isNumber(user.lastrampok)) user.lastrampok = 0
              if (!isNumber(user.lastramuanclaim)) user.lastramuanclaim = 0
              if (!isNumber(user.lastrob)) user.lastrob = 0
              if (!isNumber(user.lastroket)) user.lastroket = 0
              if (!isNumber(user.lastsda)) user.lastsda = 0
              if (!isNumber(user.lastseen)) user.lastseen = 0
              if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
              if (!isNumber(user.lastsironclaim)) user.lastsironclaim = 0
              if (!isNumber(user.lastsmancingclaim)) user.lastsmancingclaim = 0
              if (!isNumber(user.laststringclaim)) user.laststringclaim = 0
              if (!isNumber(user.lastswordclaim)) user.lastswordclaim = 0
              if (!isNumber(user.lastturu)) user.lastturu = 0
              if (!isNumber(user.lastwar)) user.lastwar = 0
              if (!isNumber(user.lastwarpet)) user.lastwarpet = 0
              if (!isNumber(user.lastweaponclaim)) user.lastweaponclaim = 0
              if (!isNumber(user.lastweekly)) user.lastweekly = 0
              if (!isNumber(user.lastwork)) user.lastwork = 0
              if (!isNumber(user.legendary)) user.legendary = 0
              if (!isNumber(user.lele)) user.lele = 0
              if (!isNumber(user.leleb)) user.leleb = 0
              if (!isNumber(user.lelebakar)) user.lelebakar = 0
              if (!isNumber(user.leleg)) user.leleg = 0
              if (!isNumber(user.level)) user.level = 0
              if (!isNumber(user.limit)) user.limit = 10
              if (!isNumber(user.limitjoinfree)) user.limitjoinfree = 1
              if (!isNumber(user.lion)) user.lion = 0
              if (!isNumber(user.lionexp)) user.lionexp = 0
              if (!isNumber(user.lionlastfeed)) user.lionlastfeed = 0
              if (!isNumber(user.lobster)) user.lobster = 0
              if (!isNumber(user.lumba)) user.lumba = 0
              if (!isNumber(user.magicwand)) user.magicwand = 0
              if (!isNumber(user.magicwanddurability)) user.magicwanddurability = 0
              if (!isNumber(user.makanancentaur)) user.makanancentaur = 0
              if (!isNumber(user.makanangriffin)) user.makanangriffin = 0
              if (!isNumber(user.makanankyubi)) user.makanankyubi = 0
              if (!isNumber(user.makanannaga)) user.makanannaga = 0
              if (!isNumber(user.makananpet)) user.makananpet = 0
              if (!isNumber(user.makananphonix)) user.makananphonix = 0
              if (!isNumber(user.makananserigala)) user.makananserigala = 0
              if (!isNumber(user.mana)) user.mana = 0
              if (!isNumber(user.mangga)) user.mangga = 0
              if (!isNumber(user.money)) user.money = 0
              if (!isNumber(user.monyet)) user.monyet = 0
              if (!isNumber(user.mythic)) user.mythic = 0
              if (!isNumber(user.naga)) user.naga = 0
              if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0
              if (!isNumber(user.net)) user.net = 0
              if (!isNumber(user.nila)) user.nila = 0
              if (!isNumber(user.nilabakar)) user.nilabakar = 0
              if (!isNumber(user.ojekk)) user.ojekk = 0
              if (!isNumber(user.oporayam)) user.oporayam = 0
              if (!isNumber(user.orca)) user.orca = 0
              if (!isNumber(user.pancing)) user.pancing = 0
              if (!isNumber(user.pancingan)) user.pancingan = 1
              if (!isNumber(user.panda)) user.panda = 0
              if (!isNumber(user.paus)) user.paus = 0
              if (!isNumber(user.pausbakar)) user.pausbakar = 0
              if (!isNumber(user.pc)) user.pc = 0
              if (!isNumber(user.pepesikan)) user.pepesikan = 0
              if (!isNumber(user.pertambangan)) user.pertambangan = 0
              if (!isNumber(user.pertanian)) user.pertanian = 0
              if (!isNumber(user.pet)) user.pet = 0
              if (!isNumber(user.petFood)) user.petFood = 0
              if (!isNumber(user.phonix)) user.phonix = 0
              if (!isNumber(user.phonixexp)) user.phonixexp = 0
              if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0
              if (!isNumber(user.phonixlastfeed)) user.phonixlastfeed = 0
              if (!isNumber(user.pickaxe)) user.pickaxe = 0
              if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
              if (!isNumber(user.pillhero)) user.pillhero= 0
              if (!isNumber(user.pisang)) user.pisang = 0
              if (!isNumber(user.pointxp)) user.pointxp = 0
              if (!isNumber(user.potion)) user.potion = 0
              if (!isNumber(user.psenjata)) user.psenjata = 0
              if (!isNumber(user.psepick)) user.psepick = 0
              if (!isNumber(user.ramuan)) user.ramuan = 0
              if (!isNumber(user.ramuancentaurlast)) user.ramuancentaurlast = 0
              if (!isNumber(user.ramuangriffinlast)) user.ramuangriffinlast = 0
              if (!isNumber(user.ramuanherolast)) user.ramuanherolast = 0
              if (!isNumber(user.ramuankucinglast)) user.ramuankucinglast = 0
              if (!isNumber(user.ramuankudalast)) user.ramuankudalast = 0
              if (!isNumber(user.ramuankyubilast)) user.ramuankyubilast = 0
              if (!isNumber(user.ramuannagalast)) user.ramuannagalast = 0
              if (!isNumber(user.ramuanphonixlast)) user.ramuanphonixlast = 0
              if (!isNumber(user.ramuanrubahlast)) user.ramuanrubahlast = 0
              if (!isNumber(user.ramuanserigalalast)) user.ramuanserigalalast = 0
              if (!isNumber(user.reglast)) user.reglast = 0
              if (!isNumber(user.rendang)) user.rendang = 0
              if (!isNumber(user.rhinoceros)) user.rhinoceros = 0
              if (!isNumber(user.rhinocerosexp)) user.rhinocerosexp = 0
              if (!isNumber(user.rhinoceroslastfeed)) user.rhinoceroslastfeed = 0
              if (!isNumber(user.robo)) user.robo = 0
              if (!isNumber(user.roboxp)) user.roboxp = 0
              if (!isNumber(user.rock)) user.rock = 0
              if (!isNumber(user.roket)) user.roket = 0
              if (!isNumber(user.roti)) user.roti = 0
              if (!isNumber(user.rubah)) user.rubah = 0
              if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
              if (!isNumber(user.rumahsakit)) user.rumahsakit = 0
              if (!isNumber(user.sampah)) user.sampah = 0
              if (!isNumber(user.sand)) user.sand = 0
              if (!isNumber(user.sapi)) user.sapi = 0
              if (!isNumber(user.sapir)) user.sapir = 0
              if (!isNumber(user.seedbayam)) user.seedbayam = 0
              if (!isNumber(user.seedbrokoli)) user.seedbrokoli = 0
              if (!isNumber(user.seedjagung)) user.seedjagung = 0
              if (!isNumber(user.seedkangkung)) user.seedkangkung = 0
              if (!isNumber(user.seedkentang)) user.seedkentang = 0
              if (!isNumber(user.seedkubis)) user.seedkubis = 0
              if (!isNumber(user.seedlabu)) user.seedlabu = 0
              if (!isNumber(user.seedtomat)) user.seedtomat = 0
              if (!isNumber(user.seedwortel)) user.seedwortel = 0
              if (!isNumber(user.serigala)) user.serigala = 0
              if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0
              if (!isNumber(user.shield)) user.shield = false
              if (!isNumber(user.skillexp)) user.skillexp = 0
              if (!isNumber(user.snlast)) user.snlast = 0
              if (!isNumber(user.soda)) user.soda = 0
              if (!isNumber(user.sop)) user.sop = 0
              if (!isNumber(user.spammer)) user.spammer = 0
              if (!isNumber(user.spinlast)) user.spinlast = 0
              if (!isNumber(user.ssapi)) user.ssapi = 0
              if (!isNumber(user.stamina)) user.stamina = 100
              if (!isNumber(user.steak)) user.steak = 0
              if (!isNumber(user.stick)) user.stick = 0
              if (!isNumber(user.strength)) user.strength = 0
              if (!isNumber(user.string)) user.string = 0
              if (!isNumber(user.superior)) user.superior = 0
              if (!isNumber(user.suplabu)) user.suplabu = 0
              if (!isNumber(user.sushi)) user.sushi = 0
              if (!isNumber(user.sword)) user.sword = 0
              if (!isNumber(user.sworddurability)) user.sworddurability = 0
              if (!isNumber(user.tigame)) user.tigame = 50
              if (!isNumber(user.tiketcoin)) user.tiketcoin = 0
              if (!isNumber(user.title)) user.title = 0
              if (!isNumber(user.tomat)) user.tomat = 0
              if (!isNumber(user.tprem)) user.tprem = 0
              if (!isNumber(user.trash)) user.trash = 0
              if (!isNumber(user.trofi)) user.trofi = 0
              if (!isNumber(user.troopcamp)) user.troopcamp = 0
              if (!isNumber(user.tumiskangkung)) user.tumiskangkung = 0
              if (!isNumber(user.udang)) user.udang = 0
              if (!isNumber(user.udangbakar)) user.udangbakar = 0
              if (!isNumber(user.umpan)) user.umpan = 0
              if (!isNumber(user.uncommon)) user.uncommon = 0
              if (!isNumber(user.unreglast)) user.unreglast = 0
              if (!isNumber(user.upgrader)) user.upgrader = 0
              if (!isNumber(user.vodka)) user.vodka = 0
              if (!isNumber(user.wallet)) user.wallet = 0
              if (!isNumber(user.warn)) user.warn = 0
              if (!isNumber(user.weapon)) user.weapon = 0
              if (!isNumber(user.weapondurability)) user.weapondurability = 0
              if (!isNumber(user.wolf)) user.wolf = 0
              if (!isNumber(user.wolfexp)) user.wolfexp = 0
              if (!isNumber(user.wolflastfeed)) user.wolflastfeed = 0
              if (!isNumber(user.wood)) user.wood = 0
              if (!isNumber(user.wortel)) user.wortel = 0
              
              if (!user.lbars) user.lbars = "[▒▒▒▒▒▒▒▒▒]"
              if (!user.job) user.job = "Pengangguran"
              if (!user.premium) user.premium = false
              if (!user.premium) user.premiumTime = 0
              if (!user.rtrofi) user.rtrofi = "Perunggu"
              if (!isNumber(user.limitjoin))
                        user.limitjoin = 0
            } else
                global.db.data.users[m.sender] = {
                    afk: -1,
                    afkReason: "",
                    age: -1,
                    agility: 16,
                    anakanjing: 100000,
                    anakcentaur: 100000,
                    anakgriffin: 100000,
                    anakkucing: 100000,
                    anakkuda: 100000,
                    anakkyubi: 100000,
                    anaknaga: 100000,
                    anakpancingan: 100000,
                    anakphonix: 100000,
                    anakrubah: 100000,
                    anakserigala: 100000,
                    anggur: 100000,
                    anjing: 100000,
                    anjinglastclaim: 100000,
                    antispam: 100000,
                    antispamlastclaim: 100000,
                    apel: 100000,
                    aqua: 100000,
                    arc: 100000,
                    arcdurability: 100000,
                    arlok: 100000,
                    armor: 100000,
                    armordurability: 100000,
                    armormonster: 100000,
                    as: 100000,
                    atm: 100000,
                    autolevelup: true,
                    axe: 100000,
                    axedurability: 100000,
                    ayam: 100000,
                    ayamb: 100000,
                    ayambakar: 100000,
                    ayamg: 100000,
                    ayamgoreng: 100000,
                    babi: 100000,
                    babihutan: 100000,
                    babipanggang: 100000,
                    bandage: 100000,
                    bank: 100000,
                    banned: false,
                    BannedReason: "",
                    Banneduser: false,
                    banteng: 100000,
                    batu: 100000,
                    bawal: 100000,
                    bawalbakar: 100000,
                    bayam: 100000,
                    berlian: 100000,
                    bibitanggur: 100000,
                    bibitapel: 100000,
                    bibitjeruk: 100000,
                    bibitmangga: 100000,
                    bibitpisang: 100000,
                    botol: 100000,
                    bow: 100000,
                    bowdurability: 100000,
                    boxs: 100000,
                    brick: 100000,
                    brokoli: 100000,
                    buaya: 100000,
                    buntal: 100000,
                    cat: 100000,
                    catlastfeed: 100000,
                    catngexp: 100000,
                    centaur: 100000,
                    centaurexp: 100000,
                    centaurlastclaim: 100000,
                    centaurlastfeed: 100000,
                    clay: 100000,
                    coal: 100000,
                    coin: 100000,
                    common: 100000,
                    crystal: 100000,
                    cumi: 100000,
                    cupon: 100000,
                    diamond: 100000,
                    dog: 100000,
                    dogexp: 100000,
                    doglastfeed: 100000,
                    dory: 100000,
                    dragon: 100000,
                    dragonexp: 100000,
                    dragonlastfeed: 100000,
                    emas: 100000,
                    emerald: 100000,
                    esteh: 100000,
                    exp: 100000,
                    expg: 100000,
                    exphero: 100000,
                    expired: 100000,
                    fishingrod: 100000,
                    fishingroddurability: 100000,
                    fortress: 100000,
                    fox: 100000,
                    foxexp: 100000,
                    foxlastfeed: 100000,
                    fullatm: Infinity,
                    gadodado: 100000,
                    gajah: 100000,
                    gamemines: false,
                    ganja: 100000,
                    gardenboxs: 100000,
                    gems: 100000,
                    glass: 100000,
                    gold: 100000,
                    griffin: 100000,
                    griffinexp: 100000,
                    griffinlastclaim: 100000,
                    griffinlastfeed: 100000,
                    gulai: 100000,
                    gurita: 100000,
                    harimau: 0,
                    haus: 10000,
                    healt: 10000,
                    health: 10000,
                    healtmonster: 100,
                    hero: 1,
                    herolastclaim: 100000,
                    hiu: 100000,
                    horse: 100000,
                    horseexp: 100000,
                    horselastfeed: 100000,
                    ikan: 100000,
                    ikanbakar: 100000,
                    intelligence: 1100000,
                    iron: 100000,
                    jagung: 100000,
                    jagungbakar: 100000,
                    jeruk: 100000,
                    job: "Pengangguran",
                    joinlimit: 1,
                    judilast: 100000,
                    kaleng: 100000,
                    kambing: 100000,
                    kangkung: 100000,
                    kapak: 100000,
                    kardus: 100000,
                    katana: 100000,
                    katanadurability: 100000,
                    kayu: 100000,
                    kentang: 100000,
                    kentanggoreng: 100000,
                    kepiting: 100000,
                    kepitingbakar: 100000,
                    kerbau: 100000,
                    kerjadelapan: 100000,
                    kerjadelapanbelas: 100000,
                    kerjadua: 100000,
                    kerjaduabelas: 100000,
                    kerjaduadelapan: 100000,
                    kerjaduadua: 100000,
                    kerjaduaempat: 100000,
                    kerjaduaenam: 100000,
                    kerjadualima: 100000,
                    kerjaduapuluh: 100000,
                    kerjaduasatu: 100000,
                    kerjaduasembilan: 100000,
                    kerjaduatiga: 100000,
                    kerjaduatujuh: 100000,
                    kerjaempat: 100000,
                    kerjaempatbelas: 100000,
                    kerjaenam: 100000,
                    kerjaenambelas: 100000,
                    kerjalima: 100000,
                    kerjalimabelas: 100000,
                    kerjasatu: 100000,
                    kerjasebelas: 100000,
                    kerjasembilan: 100000,
                    kerjasembilanbelas: 100000,
                    kerjasepuluh: 100000,
                    kerjatiga: 100000,
                    kerjatigabelas: 100000,
                    kerjatigapuluh: 100000,
                    kerjatujuh: 100000,
                    kerjatujuhbelas: 100000,
                    korbanngocok: 100000,
                    kubis: 100000,
                    kucing: 100000,
                    kucinglastclaim: 100000,
                    kuda: 100000,
                    kudalastclaim: 100000,
                    kumba: 100000,
                    kyubi: 100000,
                    kyubilastclaim: 100000,
                    labu: 100000,
                    laper: 10100000,
                    lastadventure: 100000,
                    lastberbru: 100000,
                    lastberkebon: 100000,
                    lastbunga: 100000,
                    lastbunuhi: 100000,
                    lastclaim: 100000,
                    lastcode: 100000,
                    lastcrusade: 100000,
                    lastdagang: 100000,
                    lastduel: 100000,
                    lastdungeon: 100000,
                    lasteasy: 100000,
                    lastfight: 100000,
                    lastfishing: 100000,
                    lastgojek: 100000,
                    lastgrab: 100000,
                    lasthourly: 100000,
                    lasthunt: 100000,
                    lastjb: 100000,
                    lastkill: 100000,
                    lastlink: 100000,
                    lastlumber: 100000,
                    lastmancingeasy: 100000,
                    lastmancingextreme: 100000,
                    lastmancinghard: 100000,
                    lastmancingnormal: 100000,
                    lastmining: 100000,
                    lastmisi: 100000,
                    lastmonthly: 100000,
                    lastmulung: 100000,
                    lastnambang: 100000,
                    lastnebang: 100000,
                    lastngocok: 100000,
                    lastngojek: 100000,
                    lastopen: 100000,
                    lastpekerjaan: 100000,
                    lastpotionclaim: 100000,
                    lastramuanclaim: 100000,
                    lastrob: 100000,
                    lastroket: 100000,
                    lastseen: 100000,
                    lastSetStatus: 100000,
                    lastsironclaim: 100000,
                    lastsmancingclaim: 100000,
                    laststringclaim: 100000,
                    lastswordclaim: 100000,
                    lastturu: 100000,
                    lastwarpet: 100000,
                    lastweaponclaim: 100000,
                    lastweekly: 100000,
                    lastwork: 100000,
                    lbars: "[▒▒▒▒▒▒▒▒▒]",
                    legendary: 100000,
                    lele: 100000,
                    leleb: 100000,
                    lelebakar: 100000,
                    leleg: 0,
                    level: 50,
                    limit: 100,
                    limitjoinfree: 1,
                    lion: 100000,
                    lionexp: 100000,
                    lionlastfeed: 100000,
                    lobster: 100000,
                    lumba: 100000,
                    magicwand: 100000,
                    magicwanddurability: 100000,
                    makanan: 100000,
                    makanancentaur: 100000,
                    makanangriffin: 100000,
                    makanankyubi: 100000,
                    makanannaga: 100000,
                    makananpet: 100000,
                    makananphonix: 100000,
                    makananserigala: 100000,
                    mana: 2100000,
                    mangga: 100000,
                    misi: "",
                    money: 1000000,
                    monyet: 100000,
                    mythic: 100000,
                    naga: 100000,
                    nagalastclaim: 100000,
                    name: m.name,
                    net: 100000,
                    nila: 100000,
                    nilabakar: 100000,
                    catatan: "",
                    ojekk: 100000,
                    oporayam: 100000,
                    orca: 100000,
                    pancingan: 1,
                    panda: 100000,
                    pasangan: "",
                    paus: 100000,
                    pausbakar: 100000,
                    pc: 100000,
                    pepesikan: 100000,
                    pet: 100000,
                    phonix: 100000,
                    phonixexp: 100000,
                    phonixlastclaim: 100000,
                    phonixlastfeed: 100000,
                    pickaxe: 100000,
                    pickaxedurability: 100000,
                    pillhero: 100000,
                    pisang: 100000,
                    pointxp: 100000,
                    potion: 1100000,
                    premium: false,
                    premiumTime: 100000,
                    ramuan: 100000,
                    ramuancentaurlast: 100000,
                    ramuangriffinlast: 100000,
                    ramuanherolast: 100000,
                    ramuankucinglast: 100000,
                    ramuankudalast: 100000,
                    ramuankyubilast: 100000,
                    ramuannagalast: 100000,
                    ramuanphonixlast: 100000,
                    ramuanrubahlast: 100000,
                    ramuanserigalalast: 100000,
                    registered: false,
                    reglast: 0,
                    regTime: -1,
                    rendang: 100000,
                    rhinoceros: 100000,
                    rhinocerosexp: 100000,
                    rhinoceroslastfeed: 100000,
                    rock: 100000,
                    roket: 100000,
                    role: "Newbie ㋡",
                    roti: 100000,
                    rtrofi: "perunggu",
                    rubah: 100000,
                    rubahlastclaim: 100000,
                    rumahsakit: 100000,
                    sampah: 100000,
                    sand: 100000,
                    sapi: 100000,
                    sapir: 100000,
                    seedbayam: 100000,
                    seedbrokoli: 100000,
                    seedjagung: 100000,
                    seedkangkung: 100000,
                    seedkentang: 100000,
                    seedkubis: 100000,
                    seedlabu: 100000,
                    seedtomat: 100000,
                    seedwortel: 100000,
                    semangka: 100000,
                    serigala: 100000,
                    serigalalastclaim: 100000,
                    sewa: false,
                    shield: 100000,
                    skill: "",
                    skillexp: 100000,
                    snlast: 100000,
                    soda: 100000,
                    sop: 100000,
                    spammer: 100000,
                    spinlast: 100000,
                    ssapi: 100000,
                    stamina: 10100000,
                    steak: 100000,
                    stick: 100000,
                    strength: 3100000,
                    string: 100000,
                    stroberi: 100000,
                    superior: 100000,
                    suplabu: 100000,
                    sushi: 100000,
                    sword: 100000,
                    sworddurability: 0,
                    tigame: 50,
                    tiketcoin: 100000,
                    title: "",
                    tomat: 100000,
                    tprem: 100000,
                    trash: 100000,
                    trofi: 100000,
                    troopcamp: 100000,
                    tumiskangkung: 100000,
                    udang: 100000,
                    udangbakar: 100000,
                    umpan: 100000,
                    uncommon: 100000,
                    unreglast: 100000,
                    upgrader: 100000,
                    vodka: 100000,
                    wallet: 100000,
                    warn: 100000,
                    weapon: 100000,
                    weapondurability: 100000,
                    wolf: 100000,
                    wolfexp: 100000,
                    wolflastfeed: 100000,
                    wood: 100000,
                    wortel: 100000,
                    limitjoin: 0,
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('antiLinkGc' in chat))           
                    chat.antiLinkGc = false
                if (!('antiLinkYt' in chat))
                    chat.antiLinkYt = false
                if (!('antiLinkTik' in chat))
                    chat.antiLinkTik = false
                if (!('antiLinkIg' in chat)) 
                    chat.antiLinkIg = false
                if (!('antiLinkTel' in chat)) 
                    chat.antiLinkTel = false
                if (!('antiLinkFb' in chat)) 
                    chat.antiLinkFb = false
                if (!('antiLinkHttp' in chat)) 
                    chat.antiLinkHttp = false
                if (!('antiSpam' in chat)) 
                    chat.antiSpam = true
                if (!('antiVirtex' in chat)) 
                    chat.antiVirtex = false
                if (!('antiStiker' in chat)) 
                    chat.antiSticker = false
                if (!('virtex' in chat ))
                    chat.virtex = false 
                if (!('antiToxic' in chat)) 
                    chat.antiToxic = true
                if (!('anticall' in chat))
                    chat.anticall = true
                if (!('welcome' in chat))
                    chat.welcome = true
                if (!('autoJoin' in chat))
                    chat.autoJoin = false
                if (!('detect' in chat))
                    chat.detect = false
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('delete' in chat))
                    chat.delete = true
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('simi' in chat))
                    chat.simi = false
                if (!('nsfw' in chat))
                    chat.nsfw = false
                if (!('premnsfw' in chat))
                    chat.premnsfw = false
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    antiLinkGc: false,
	                antiLinkTik: false,	              
	                antiLinkTel: false,
	                antiLinkIg: false,
	                antiLinkFb: false,
	                antiLinkHttp: false,
	                antiLinkYt: false,
	                antiSpam: true,
	                antiStiker: false,
	                antiVirtex: false,
                    virtex: false,
                    autoJoin: false,
	                antiToxic: true,
	                anticall: true,
                    welcome: true,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: true,
                    viewonce: false,
                    simi: false,
                    expired: 0,
                    nsfw: false,
                    premnsfw: false,
                }
            let akinator = global.db.data.users[m.sender].akinator
			if (typeof akinator !== 'object')
				global.db.data.users[m.sender].akinator = {}
			if (akinator) {
				if (!('sesi' in akinator))
					akinator.sesi = false
				if (!('server' in akinator))
					akinator.server = null
				if (!('frontaddr' in akinator))
					akinator.frontaddr = null
				if (!('session' in akinator))
					akinator.session = null
				if (!('signature' in akinator))
					akinator.signature = null
				if (!('question' in akinator))
					akinator.question = null
				if (!('progression' in akinator))
					akinator.progression = null
				if (!('step' in akinator))
					akinator.step = null
				if (!('soal' in akinator))
					akinator.soal = null
			} else
				global.db.data.users[m.sender].akinator = {
					sesi: false,
					server: null,
					frontaddr: null,
					session: null,
					signature: null,
					question: null,
					progression: null,
					step: null, 
					soal: null
				}
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== "object") global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = true
                if (!('restrict' in settings)) settings.restrict = true
                if (!('jadibot' in settings)) settings.jadibot = false
                if (!('autorestart' in settings)) settings.autorestart = true
                if (!('restartDB' in settings)) settings.restartDB = 0
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: true,
                jadibot: false,
                restrict: true,
                autorestart: true,
                restartDB: 0
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us') && !m.fromMe)
            return conn.reply(m.chat, 'Bot Sedang Dalam Mode Khusus GGonly\nMasuk Gc Biar Bisa Pake\n[ Link ]\nhttps://chat.whatsapp.com/INq67rkTp8iAwiVvLOFAYH', fkontak)
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || db.data.users[m.sender].premiumTime > 0

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'owner-unbanuser.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    m.reply('Ngecit -_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.reply(m.chat, `[❗] Limit kau abis dek, beli melalui *${usedPrefix}buy limit*`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `[💬] Diperlukan level ${plugin.level} untuk menggunakan perintah ini\n*Level mu:* ${_user.level} 📊`, m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*🗂️ Plugin:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(' ')}\n📄 *Error Logs:*\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
                            }
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+m.limit + ' ʟɪᴍɪᴛ ᴛᴇʀᴘᴀᴋᴀɪ ✔️')
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
    }
}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    // if (id in conn.chats) return // First login will spam
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
                case 'add':
        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
                let welc = 'WELCOME'
                    let outss = 'GOOD BYE'
                    let pp = 'https://telegra.ph/file/69e5f188c38fc0d7e478b.jpg'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                    } catch (e) {
                    } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'unknow') :
                            (chat.sBye || this.bye || conn.bye || 'Bye @user')).replace(/@user/g, '@' + user.split`@`[0])
let wel = API('popcat', '/welcomecard', {
                                background: 'https://telegra.ph/file/65c787165c248de3ecb5f.jpg',
                                text1: welc,
                                text2: await this.getName(user),
                                text3: 'MemberCount: ' + groupMetadata.participants.length, 
                                avatar: pp,
                            })
                            let lea = API('popcat', '/welcomecard', {
                                background: 'https://telegra.ph/file/65c787165c248de3ecb5f.jpg',
                                text1: outss,
                                text2: await this.getName(user),
                                text3: 'MemberCount: ' + groupMetadata.participants.length,
                                avatar: pp,
                            })   
 let welcom = 'https://telegra.ph/file/aab124271570c51f76aac.jpg'

 let godbye = 'https://telegra.ph/file/deaf59bc3e5216eaae814.jpg' 
  conn.sendButtonImg(id, await(await fetch(action === 'add' ? wel : lea)).buffer(), 'Group Messege', text, action == 'add' ? 'Selamat Datang' : 'Good Bye', action === 'add' ? '.intro' : 'hehe🗿', fkontak)                                                                              /*     
  await this.sendHydrated(id, 'Group Messege', text, action === 'add' ? wel: lea, sgc, (action == 'add' ? '💌 WELCOME' : '🎀 BYE'), user.split`@`[0], 'ɴᴜᴍʙᴇʀ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛ', [
      [action == 'add' ? 'ᴡᴇʟᴄᴏᴍᴇ' : 'sᴀʏᴏɴᴀʀᴀᴀ', action === 'add' ? '.intro' : 'hehe🗿']], null, fkontak, { mentions: [user] })    */                      
  
                    }
                }
            }
            break
        case 'promote':
            text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
        case 'demote':
            if (!text)
                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
                this.sendMessage(id, { text, mentions: this.parseMention(text) })

            break
    }
}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
            this.sendButton(msg.key.remoteJid, `Terdeteksi *@${participant.split`@`[0]}* telah menghapus pesan.
Untuk mematikan fitur ini, ketik
*.off antidelete*

Untuk menghapus pesan yang dikirim BOT, reply pesan dengan perintah
*.delete*`, author, [['OFF FITURE', '.off antidelete'],['MENU', '.menu']], msg, adReply)
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

/**
dfail
 */
global.dfail = (type, m, conn) => {
    let nmsr = `👋 Hai *@${m.sender.split("@")[0]}*, `
    let msg = {
        rowner: `${nmsr}\n 
Perintah ini hanya dapat digunakan oleh *OWNER* !\n\n${wm}`,
        owner: `${nmsr}\n
Perintah ini hanya dapat digunakan oleh *Owner Bot* !\n\n${wm}`,
        mods: `${nmsr}\n 
Perintah ini hanya dapat digunakan oleh *Moderator* !\n\n${wm}`,
        premium: `${nmsr}\n
Perintah ini hanya untuk member *Premium* !\n\n${wm}`,
        group: `${nmsr}\n
Perintah ini hanya dapat digunakan di grup !\n\n${wm}`,
        private: `${nmsr}\n
Perintah ini hanya dapat digunakan di Chat Pribadi !\n\n${wm}`,
        admin: `${nmsr}\n
Perintah ini hanya untuk *Admin* grup !\n\n${wm}`,
        botAdmin: `${nmsr}\n
Jadikan bot sebagai *Admin* untuk menggunakan perintah ini !\n\n${wm}`,
        nsfw: `${nmsr}\n
NSFW tidak aktif, Silahkan hubungi Team Bot Discussion untuk mengaktifkan fitur ini !\n\n${wm}`,
        rpg: `${nmsr}\n
RPG tidak aktif, Silahkan hubungi Team Bot Discussion Untuk mengaktifkan fitur ini !\n\n${wm}`,
        restrict: `${nmsr}\n
Fitur ini di *disable* !`
    }[type]
    if (msg) return conn.sendButton(m.chat, danied, msg, `${flaaa2 + '𝘼𝙘𝙘𝙨𝙚𝙨 𝘿𝙖𝙣𝙞𝙚𝙙'}`, [['Menu', '.menuv1'],['Owner', '.owner'],['Sewa', '.sewa']],m)
    
     let msgg = {
    	unreg: `${nmsr}\nSilahkan daftar ke database terlebih dahulu untuk menggunakan bot ini lebih lanjut *Click button di bawah*\n\n*Kalian bisa ikuti langkah verify selanjutnya*\n\nLAKI-LAKI ATAU PEREMPUAN ?  \n\n${wm}`
}[type]
if (msgg) return conn.sendButton(m.chat, `${global.htki} VERIFY ${global.htka}`, msgg, `${flaaa2 + 'Verify'}`, [['LAKI-LAKI', '/verify'],['PEREMPUAN', '/verify']],m)
}    
    
let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
}) 
