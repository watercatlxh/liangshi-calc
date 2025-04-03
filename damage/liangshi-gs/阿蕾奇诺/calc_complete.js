import { Format , LSconfig } from '#liangshi'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { recordData } from '../../../components/jsRecord.js'
import { CalcBuff } from './CalcBuff.js'
import path from 'node:path'
import fs from 'node:fs'

let EmilieTeam = null
let ChioriTeam = null
let Zhong_LiTeam = null
try {
  EmilieTeam = fs.readFileSync('plugins/liangshi-calc/damage/liangshi-gs/艾梅莉埃/TeamData.json', 'utf8')
  EmilieTeam = JSON.parse(EmilieTeam)
  ChioriTeam = fs.readFileSync('plugins/liangshi-calc/damage/liangshi-gs/千织/TeamData.json', 'utf8')
  ChioriTeam = JSON.parse(ChioriTeam)
  Zhong_LiTeam = fs.readFileSync('plugins/liangshi-calc/damage/liangshi-gs/钟离/TeamData.json', 'utf8')
  Zhong_LiTeam = JSON.parse(Zhong_LiTeam)
} catch (err) {
  console.error('组队数据读取失败:', err)
}
let c2eDmg = { avg: 0, dmg: 0 }
let T1a1Dmg = { avg: 0, dmg: 0 }
let T1e1Dmg = { avg: 0, dmg: 0 }
let T1e2Dmg = { avg: 0, dmg: 0 }
let T1e3Dmg = { avg: 0, dmg: 0 }
let T1e4Dmg = { avg: 0, dmg: 0 }
let T1z1Dmg = { avg: 0, dmg: 0 }
let CharacterName = "阿蕾奇诺"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let BLPlusPath = cfg.bndOfLifePlus || 0
let BLPctPath = cfg.bndOfLifePct || 1
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { blPlus: `${BLPlusPath}`, blPct: `${BLPctPath}` }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eNameT}后${TalentName.aName}一段伤害`,
  params: { NormalUse: 1, NormalHit: 1, NormalDmg: 1 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['一段伤害'], 'a')
},
{
  title: `${TalentName.eNameT}后${TalentName.aName}一段蒸发`,
  params: { NormalUse: 1, NormalHit: 1, NormalDmg: 1 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['一段伤害'], 'a', 'vaporize')
},
{
  title: `满契${TalentName.aName}一段伤害`,
  params: { blPlus: 200 , blPct: 1, NormalUse: 1, NormalHit: 1, NormalDmg: 1 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['一段伤害'], 'a')
},
{
  title: `${TalentName.eNameT}后${TalentName.aName}二段伤害`,
  params: { NormalUse: 2, NormalHit: 2, NormalDmg: 2 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['二段伤害'], 'a')
},
{
  title: `${TalentName.eNameT}后${TalentName.aName}二段蒸发`,
  params: { NormalUse: 2, NormalHit: 2, NormalDmg: 2 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['二段伤害'], 'a', 'vaporize')
},
{
  title: `满契${TalentName.aName}二段伤害`,
  params: { blPlus: 200 , blPct: 1, NormalUse: 2, NormalHit: 2, NormalDmg: 2 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['二段伤害'], 'a')
},
{
  title: `${TalentName.eNameT}后${TalentName.aName}三段伤害`,
  params: { NormalUse: 3, NormalHit: 3, NormalDmg: 3 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['三段伤害'], 'a')
},
{
  title: `${TalentName.eNameT}后${TalentName.aName}三段蒸发`,
  params: { NormalUse: 3, NormalHit: 3, NormalDmg: 3 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['三段伤害'], 'a', 'vaporize')
},
{
  title: `满契${TalentName.aName}三段伤害`,
  params: { blPlus: 200 , blPct: 1, NormalUse: 3, NormalHit: 3, NormalDmg: 3 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['三段伤害'], 'a')
},
{
  title: `${TalentName.eNameT}后${TalentName.aName}四段伤害`,
  params: { NormalUse: 4, NormalHit: 5, NormalDmg: 5 },
  dmg: ({ talent }, dmg ) => {
    let a4 = dmg(talent.a['四段伤害'] / 2 , 'a')
    return {
      dmg: a4.dmg * 2 ,
      avg: a4.avg * 2
    }
  }
},
{
  title: `满契${TalentName.aName}四段伤害`,
  params: { blPlus: 200 , blPct: 0.9625, NormalUse: 4, NormalHit: 5, NormalDmg: 5 },
  dmg: ({ talent }, dmg ) => {
    let a4 = dmg(talent.a['四段伤害'] / 2 , 'a')
    return {
      dmg: a4.dmg * 2 ,
      avg: a4.avg * 2
    }
  }
},
{
  title: `${TalentName.eNameT}后${TalentName.aName}五段伤害`,
  params: { NormalUse: 5, NormalHit: 6, NormalDmg: 6 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['五段伤害'], 'a')
},
{
  title: `${TalentName.eNameT}后${TalentName.aName}五段蒸发`,
  params: { NormalUse: 5, NormalHit: 6, NormalDmg: 6 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['五段伤害'], 'a', 'vaporize')
},
{
  title: `满契${TalentName.aName}五段伤害`,
  params: { blPlus: 200 , blPct: 1, NormalUse: 5, NormalHit: 6, NormalDmg: 6 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['五段伤害'], 'a')
},
{
  title: `${TalentName.eNameT}后${TalentName.aName}六段伤害`,
  params: { NormalUse: 6, NormalHit: 7, NormalDmg: 7 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['六段伤害'], 'a')
},
{
  title: `${TalentName.eNameT}后${TalentName.aName}六段蒸发`,
  params: { NormalUse: 6, NormalHit: 7, NormalDmg: 7 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['六段伤害'], 'a', 'vaporize')
},
{
  title: `满契${TalentName.aName}六段伤害`,
  dmgKey: 'a',
  params: { blPlus: 200, blPct: 1, NormalUse: 6, NormalHit: 7, NormalDmg: 7 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['六段伤害'], 'a')
},
{
  title: `${TalentName.eNameT}后${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['重击伤害'], 'a2')
},
{
  check: ({ cons }) => cons >= 2,
  title: '血偿勒令回收伤害',
  dmg: ({ attr, calc }, { basic }) => {
   c2eDmg = basic(calc(attr.atk) * 900 / 100, 'e')
   return c2eDmg
  }
},
{
  check: ({ cons }) => cons >= 2,
  title: '血偿勒令回收蒸发',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 900 / 100, 'e', 'vaporize')
},
{
  title: `${TalentName.eName}尖刺伤害`,
  dmgKey: 'undefined',
  dmg: ({ talent }, dmg ) => dmg(talent.e['尖刺伤害'], 'e')
},
{
  title: `${TalentName.eName}尖刺蒸发`,
  dmg: ({ talent }, dmg ) => dmg(talent.e['尖刺伤害'], 'e', 'vaporize')
},
{
  title: `${TalentName.eName}切斩伤害`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg ) => dmg(talent.e['切斩伤害'], 'e')
},
{
  title: `${TalentName.eName}切斩蒸发`,
  dmg: ({ talent }, dmg ) => dmg(talent.e['切斩伤害'], 'e', 'vaporize')
},
{
  title: '血偿勒令伤害',
  dmg: ({ talent }, dmg ) => dmg(talent.e['血偿勒令伤害'], 'e')
},
{
  title: '血偿勒令蒸发',
  dmg: ({ talent }, dmg ) => dmg(talent.e['血偿勒令伤害'], 'e', 'vaporize')
},
{
  title: `${TalentName.qName}伤害`,
  dmgKey: 'q',
  dmg: ({ talent }, dmg ) => dmg(talent.q['技能伤害'], 'q')
},
{
  check: ({ cons }) => cons >= 6,
  title: `满契${TalentName.qName}伤害`,
  params: { blPlus: 200 , blPct: 1, EnergyDetermine: 0 },
  dmg: ({ talent }, dmg ) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: `${TalentName.qName}蒸发伤害`,
  params: { EnergyDetermine: 0 },
  dmg: ({ talent }, dmg ) => dmg(talent.q['技能伤害'], 'q', 'vaporize')
},
{
  title: `${TalentName.eNameT}后${TalentName.qName}治疗量`,
  params: { EnergyDetermine: 0 },
  dmg: ({ params, cons, attr, calc, weapon }, { heal }) => heal((150 / 100 * (Math.min((params.blPct * ((cons >= 2 ? 130 : 65) + (weapon.name === '赤月之形' ? 25 : 0)) + params.blPlus), 200) / 100) * calc(attr.hp)) + (150 / 100 * calc(attr.atk)))
},
{
  title: `满契${TalentName.qName}治疗量`,
  params: { EnergyDetermine: 0 },
  dmgKey: 'h',
  dmg: ({ params, cons, attr, calc, weapon }, { heal }) => heal(150 / 100 * (200 / 100) * calc(attr.hp) + 150 / 100 * calc(attr.atk))
},
{
  title: `满契首轮${TalentName.aName}期望`,
  params: { blPlus: 200, blPct: 0.8011, NormalUse: 6, NormalHit: 7, NormalDmg: 7 },
  dmg: ({ talent, attr , cons }, dmg ) => {
    let a1 = dmg(talent.a['一段伤害'], 'a')
    let a2 = dmg(talent.a['二段伤害'], 'a')
    let a3 = dmg(talent.a['三段伤害'], 'a')
    let a4 = dmg(talent.a['四段伤害'] / 2 , 'a')
    let a5 = dmg(talent.a['五段伤害'], 'a')
    let a6 = dmg(talent.a['六段伤害'], 'a')
    return {
      dmg: a1.dmg + a2.dmg + a3.dmg + a4.dmg * 2 + a5.dmg + a6.dmg ,
      avg: a1.avg + a2.avg + a3.avg + a4.avg * 2 + a5.avg + a6.avg
    }
  }
},
{
  title: `满契首轮${TalentName.aName}蒸发期望`,
  params: { blPlus: 200 , blPct: 0.8011, NormalUse: 6, NormalHit: 7, NormalDmg: 7 },
  dmg: ({ talent, attr , cons }, dmg ) => {
    let a1 = dmg(talent.a['一段伤害'], 'a', 'vaporize')
    let a2 = dmg(talent.a['二段伤害'], 'a')
    let a3 = dmg(talent.a['三段伤害'], 'a')
    let a4 = dmg(talent.a['四段伤害'] / 2 , 'a')
    let az4 = dmg(talent.a['四段伤害'] / 2 , 'a', 'vaporize')
    let a5 = dmg(talent.a['五段伤害'], 'a')
    let a6 = dmg(talent.a['六段伤害'], 'a')
    return {
      dmg: a1.dmg + a2.dmg + a3.dmg + a4.dmg + az4.dmg + a5.dmg + a6.dmg ,
      avg: a1.avg + a2.avg + a3.avg + a4.avg + az4.dmg + a5.avg + a6.avg
    }
  }
},
{
  title: '单人站场20秒',
  dmgKey: 'dpm',
  params: { blPct: 0.594, NormalUse: 6, NormalHit: 7, NormalDmg: 7 },
  dmg: ({ talent, cons }, dmg ) => {
    let e1 = dmg(talent.e['尖刺伤害'], 'e')
    let e2 = dmg(talent.e['切斩伤害'], 'e')
    let e3 = dmg(talent.e['血偿勒令伤害'], 'e')
    let q1 = dmg(talent.q['技能伤害'], 'q')
    let a1 = dmg(talent.a['一段伤害'], 'a')
    let a2 = dmg(talent.a['二段伤害'], 'a')
    let a3 = dmg(talent.a['三段伤害'], 'a')
    let a4 = dmg(talent.a['四段伤害'] / 2 , 'a')
    let a5 = dmg(talent.a['五段伤害'], 'a')
    let a6 = dmg(talent.a['六段伤害'], 'a')
    let z1 = dmg(talent.a['重击伤害'], 'a2')
    let cons2 = cons * 1 >= 2 ? 1 : 0
    let e4 = c2eDmg
    let aDmg = z1.dmg + 2 * (a1.dmg + a2.dmg + a3.dmg + a4.dmg * 2 + a5.dmg + a6.dmg)
    let aAvg = z1.avg + 2 * (a1.avg + a2.avg + a3.avg + a4.avg * 2 + a5.avg + a6.avg)
    let eDmg = (e1.dmg + e2.dmg + e3.dmg) * 2 + e4.dmg * cons2
    let eAvg = (e1.avg + e2.avg + e3.avg) * 2 + e4.avg * cons2
    let qDmg = q1.dmg
    let qAvg = q1.avg
    return {
      dmg: aDmg + eDmg + qDmg,
      avg: aAvg + eAvg + qAvg
    }
  }
},
{
  title: '单人循环流畅度',
  dmg: ({ talent, calc, attr, weapon, cons }) => {
    let weaponn = 0
    let consn = 0
    let weaponnn = 0
    let weaponconsn = 0
    if (weapon.name === '西风长枪') {
      weaponn = 3 * 2 * 2
    }
    if (weapon.name === '喜多院十文字') {
      weaponnn = (2.5 + 0.5 * weapon.affix) * 3
    }
    if (weapon.name === '公义的酬报') {
      weaponnn = 6 + 2 * weapon.affix
    }
    if (weapon.name === '天空之脊') {
      weaponconsn = 2
    }
    if (cons >= 4) {
      consn = 15
    }
    return {
      avg: Format.percent((calc(attr.recharge) / 100 * (5 * 3 + weaponn + energy)) / (60 - weaponnn - consn - (0.2073 * (14 + weaponconsn)))),
      type: 'text'
    }
  }
},
{
  title: '单人站场期望DPS',
  dmgKey: 'dps',
  params: { blPct: 0.594, NormalUse: 6, NormalHit: 7, NormalDmg: 7 },
  dmg: ({ talent , calc , attr , weapon , cons }, dmg ) => {
    let e1 = dmg(talent.e['尖刺伤害'], 'e')
    let e2 = dmg(talent.e['切斩伤害'], 'e')
    let e3 = dmg(talent.e['血偿勒令伤害'], 'e')
    let q1 = dmg(talent.q['技能伤害'], 'q')
    let a1 = dmg(talent.a['一段伤害'], 'a')
    let a2 = dmg(talent.a['二段伤害'], 'a')
    let a3 = dmg(talent.a['三段伤害'], 'a')
    let a4 = dmg(talent.a['四段伤害'] / 2 , 'a')
    let a5 = dmg(talent.a['五段伤害'], 'a')
    let a6 = dmg(talent.a['六段伤害'], 'a')
    let z1 = dmg(talent.a['重击伤害'], 'a2')
    let cons2 = cons * 1 >= 2 ? 1 : 0
    let e4 = c2eDmg
    let weaponn = 0
    let consn = 0
    let weaponnn = 0
    let weaponconsn = 0
    if (weapon.name === '西风长枪') {
      weaponn = 3 * 2 * 2
    }
    if (weapon.name === '喜多院十文字') {
      weaponnn = (2.5 + 0.5 * weapon.affix) * 3
    }
    if (weapon.name === '公义的酬报') {
      weaponnn = 6 + 2 * weapon.affix
    }
    if (weapon.name === '天空之脊') {
      weaponconsn = 2
    }
    if (cons >= 4) {
      consn = 15
    }
    let qcn = Math.min(1 , ((calc(attr.recharge) / 100 * (5 * 3 + weaponn + energy)) / (60 - weaponnn - consn - (0.2073 * (14 + weaponconsn)))))
    let aDmg = z1.dmg + 2 * (a1.dmg + a2.dmg + a3.dmg + a4.dmg * 2 + a5.dmg + a6.dmg)
    let aAvg = z1.avg + 2 * (a1.avg + a2.avg + a3.avg + a4.avg * 2 + a5.avg + a6.avg)
    let eDmg = (e1.dmg + e2.dmg + e3.dmg) * (1 + qcn) + e4.dmg * cons2
    let eAvg = (e1.avg + e2.avg + e3.avg) * (1 + qcn) + e4.avg * cons2
    let qDmg = q1.dmg * qcn
    let qAvg = q1.avg * qcn
    return {
      dmg: (aDmg + eDmg + qDmg) / 20,
      avg: (aAvg + eAvg + qAvg) / 20
    }
  }
},
{
  title: `阿千艾钟 ${TalentName.a2Name}伤害`,
  params: { blPlus: 30, blPct: 0.6326, simulate: true, ChangeBondOfLife: 12, NormalUse: 12, NormalHit: 14, NormalDmg: 14, NormalElement: 14, ShieldTime: 20, CrystallizeNumber: 3, FightTime: 6, FireAttachment: true, BurningDetermine: true, ElementSame: 1, ElementDifferent: 3, TeamRockDmg: 14, LiyueTeammate: 1, FontaineTeammate: 1 , EnergyTeammate: 200, ElementDifferent: 1, ElementRockTeam: 2, ElementFireTeam: 1, ElementGrassTeam: 1, Chiori: true, Emilie: true, Zhong_Li: true, team: true },
  dmg: ({ talent }, dmg) => {
    T1z1Dmg = dmg(talent.a['重击伤害'], 'a2')
    return T1z1Dmg
  }
},

{
  title: `阿千艾钟 ${TalentName.aName}一段`,
  params: { blPlus: 30, blPct: 0.6326, simulate: true, ChangeBondOfLife: 12, NormalUse: 12, NormalHit: 14, NormalDmg: 14, NormalElement: 14, ShieldTime: 20, CrystallizeNumber: 3, FightTime: 6, FireAttachment: true, BurningDetermine: true, ElementSame: 1, ElementDifferent: 3, TeamRockDmg: 14, LiyueTeammate: 1, FontaineTeammate: 1 , EnergyTeammate: 200, ElementDifferent: 1, ElementRockTeam: 2, ElementFireTeam: 1, ElementGrassTeam: 1, Chiori: true, Emilie: true, Zhong_Li: true, team: true },
  dmg: ({ talent }, dmg) => {
    T1a1Dmg = dmg(talent.a['一段伤害'], 'a')
    return T1a1Dmg
  }
},

{
  title: `阿千艾钟 ${TalentName.eName}切斩伤害`,
  params: { blPlus: 30, blPct: 0.6326, simulate: true, ChangeBondOfLife: 12, NormalUse: 12, NormalHit: 14, NormalDmg: 14, NormalElement: 14, ShieldTime: 20, CrystallizeNumber: 3, FightTime: 6, FireAttachment: true, BurningDetermine: true, ElementSame: 1, ElementDifferent: 3, TeamRockDmg: 14, LiyueTeammate: 1, FontaineTeammate: 1 , EnergyTeammate: 200, ElementDifferent: 1, ElementRockTeam: 2, ElementFireTeam: 1, ElementGrassTeam: 1, Chiori: true, Emilie: true, Zhong_Li: true, team: true },
  dmg: ({ talent, calc, attr, cons }, { basic }) => {
    T1e1Dmg = basic(calc(attr.atk) * talent.e['切斩伤害'] / 100, 'e')
    T1e2Dmg = basic(calc(attr.atk) * talent.e['尖刺伤害'] / 100, 'e')
    T1e3Dmg = basic(calc(attr.atk) * talent.e['血偿勒令伤害'] / 100, 'e')
    T1e4Dmg = cons >= 2 ? basic(calc(attr.atk) * 900 / 100, 'e') : { avg: 0, dmg: 0 }
    return T1e1Dmg
  }
},
{
  title: '阿千艾钟 队伍单轮总伤', // 如果更新过队友面板会使用自己的角色组队进行计算,注意：队友的伤害不会因当前面板设定的敌人等级而调整，需要呼出队友面板才可刷新
  params: { blPlus: 30, blPct: 0.6326, simulate: true, ChangeBondOfLife: 12, NormalUse: 12, NormalHit: 14, NormalDmg: 14, NormalElement: 14, ShieldTime: 20, CrystallizeNumber: 3, FightTime: 6, FireAttachment: true, BurningDetermine: true, ElementSame: 1, ElementDifferent: 3, TeamRockDmg: 14, LiyueTeammate: 1, FontaineTeammate: 1 , EnergyTeammate: 200, ElementDifferent: 1, ElementRockTeam: 2, ElementFireTeam: 1, ElementGrassTeam: 1, Chiori: true, Emilie: true, Zhong_Li: true, team: true },
  dmg: ({ talent, calc, attr, cons, uid, level, artis, weapon }, { basic, reaction }) => {
   let EmilieCons = !EmilieTeam[uid] ? cons : EmilieTeam[uid]?.base?.Tcharacter?.cons
// 依次计入每个角色伤害
// 阿蕾奇诺 2轮普攻 1E 1重
   let rs = reaction('burning')
   let A2 = basic(calc(attr.atk) * talent.a['二段伤害'] / 100, 'a')
   let A3 = basic(calc(attr.atk) * talent.a['三段伤害'] / 100, 'a')
   let A4 = basic(calc(attr.atk) * talent.a['四段伤害'] / 100 / 2, 'a')
   let A5 = basic(calc(attr.atk) * talent.a['五段伤害'] / 100, 'a')
   let A6 = basic(calc(attr.atk) * talent.a['六段伤害'] / 100, 'a')
   let ArlecchinoDmg = T1z1Dmg.dmg + (T1a1Dmg.dmg + A2.dmg + A3.dmg + A4.dmg * 2 + A5.dmg + A6.dmg) * 2 + T1e4Dmg.dmg + T1e1Dmg.dmg +T1e2Dmg.dmg + T1e3Dmg.dmg + rs.avg * 20 * 4
   let ArlecchinoAvg = T1z1Dmg.avg + (T1a1Dmg.avg + A2.avg + A3.avg + A4.avg * 2 + A5.avg + A6.avg) * 2 + T1e4Dmg.avg + T1e1Dmg.avg +T1e2Dmg.avg + T1e3Dmg.avg + rs.avg * 20 * 4
// 艾梅莉埃（1E 8*2协 4Q 8Q[4命] 2T 3T[1命] 2T[6命]）
   let EmilieE1 = EmilieTeam[uid]?.dmg?.T1?.T1e1Dmg ?? { dmg: 4539.27, avg: 4085.34 }
   let EmilieE2 = EmilieTeam[uid]?.dmg?.T1?.T1e2Dmg ?? { dmg: 10842.76, avg: 9758.48 }
   let EmilieQ1 = EmilieTeam[uid]?.dmg?.T1?.T1q1Dmg ?? { dmg: 28184.76, avg: 25366.28 }
   let EmilieT1 = EmilieTeam[uid]?.dmg?.T1?.T1t1Dmg ?? { dmg: 37387.44, avg: 33648.69 }
   let EmilieDmg = EmilieQ1.dmg * (EmilieCons >= 4 ? 12 : 4) + EmilieE1.dmg + EmilieE2.dmg * 8 * 2 + (EmilieCons >= 6 ? (EmilieCons >= 1 ? 5 : 2) : 7) * EmilieT1.dmg
   let EmilieAvg = EmilieQ1.avg * (EmilieCons >= 4 ? 12 : 4) + EmilieE1.avg + EmilieE2.avg * 8 * 2 + (EmilieCons >= 6 ? (EmilieCons >= 1 ? 5 : 2) : 7) * EmilieT1.avg
// 千织 （1E 10斩 2协 3绢[4命]）
   let ChioriE1 = ChioriTeam[uid]?.dmg?.T1?.T1e1Dmg ?? { dmg: 28663.2, avg: 25796.88 }
   let ChioriE2 = ChioriTeam[uid]?.dmg?.T1?.T1e2Dmg ?? { dmg: 13387.68, avg: 12048.91 }
   let ChioriE3 = ChioriTeam[uid]?.dmg?.T1?.T1e3Dmg ?? { dmg: 22759.05, avg: 20483.15 }
   let ChioriE4 = ChioriTeam[uid]?.dmg?.T1?.T1e4Dmg ?? { dmg: 28663.2, avg: 25796.88 }
   let ChioriQ1 = ChioriTeam[uid]?.dmg?.T1?.T1q1Dmg ?? { dmg: 46981.08, avg: 42282.97 }
   let ChioriDmg = ChioriE1.dmg * 3 + ChioriE2.dmg * 10 + ChioriE3.dmg * 4 + ChioriE4.dmg * 3
   let ChioriAvg =  ChioriE1.avg * 3 + ChioriE2.avg * 10 + ChioriE3.avg * 4 + ChioriE4.avg * 3
// 钟离 （10E共鸣 1长E 1Q）
   let Zhong_LiE1 = Zhong_LiTeam[uid]?.dmg?.T1?.T1e1Dmg ?? { dmg: 3398.76, avg: 3058.88 }
   let Zhong_LiE2 = Zhong_LiTeam[uid]?.dmg?.T1?.T1e2Dmg ?? { dmg: 2290.68, avg: 2061.61 }
   let Zhong_LiQ1 = Zhong_LiTeam[uid]?.dmg?.T1?.T1q1Dmg ?? { dmg: 34728.48, avg: 31255.63 }
   let Zhong_LiDmg = Zhong_LiE1.dmg + Zhong_LiE2.dmg * 10 + Zhong_LiQ1.dmg
   let Zhong_LiAvg = Zhong_LiE1.avg + Zhong_LiE2.avg * 10 + Zhong_LiQ1.avg
// 合并伤害
   let T1Dmg = ArlecchinoDmg + EmilieDmg + ChioriDmg + Zhong_LiDmg
   let T1Avg = ArlecchinoAvg + EmilieAvg + ChioriAvg + Zhong_LiAvg
   let T1allDmg = undefined
   if (EmilieTeam[uid]?.dmg?.T1?.T1e1Dmg && ChioriTeam[uid]?.dmg?.T1?.T1e1Dmg && Zhong_LiTeam[uid]?.dmg?.T1?.T1e1Dmg) {
     // 全部队友伤害都是json中的才写入完整队伍伤害
     T1allDmg = { dmg: T1Dmg, avg: T1Avg }
   }

// 如果你想看到队伍伤害组成可以把下面的注释去掉
/*
console.log("------------------------------------------------------")
console.log("队伍总伤:", T1Avg)
console.log("阿蕾奇诺:", ArlecchinoAvg, "(", ArlecchinoAvg / T1Avg * 100, "%)")
console.log("艾梅莉埃:", EmilieAvg, "(", EmilieAvg / T1Avg * 100, "%)")
console.log("千织:", ChioriAvg, "(", ChioriAvg / T1Avg * 100, "%)")
console.log("钟离:", Zhong_LiAvg, "(", Zhong_LiAvg / T1Avg * 100, "%)")
console.log("------------------------------------------------------")
*/

   let TData = {base:{Tcharacter:{level, cons, talent}, Tartis: artis, Tweapon: weapon}, dmg:{T1:{T1e1Dmg, T1e2Dmg, T1e3Dmg, T1e4Dmg, T1z1Dmg, T1z1Dmg, T1allDmg}, T2:{}}}
   recordData(`./plugins/liangshi-calc/damage/liangshi-gs/${CharacterName}/TeamData.json`, uid, TData, CharacterName)
    return {
      dmg: T1Dmg,
      avg: T1Avg
    }
  }
}]
