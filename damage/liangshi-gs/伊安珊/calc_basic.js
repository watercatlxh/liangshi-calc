import { LSconfig } from '#liangshi'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "伊安珊"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { HealNumber: 3, HealDetermine: true, ElementSame: 1, ElementMineTeam: 1, NatlanTeammate: 1, Nightsoul: true, NightsoulUse: 10 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent, attr , cons }, dmg ) => dmg(talent.a['雷霆飞缒伤害'], 'a2,nightsoul')
},
{
  title: `${TalentName.eName}施放伤害`,
  dmg: ({ talent, attr, calc }, dmg ) => dmg(talent.e['技能伤害'], 'e,nightsoul')
},
{
  title: `${TalentName.eName}施放激化`,
  dmgKey: 'e',
  dmg: ({ talent, attr, calc }, dmg ) => dmg(talent.e['技能伤害'], 'e,nightsoul', 'aggravate')
},
{
  title: `${TalentName.tName}治疗`,
  dmgKey: 'h',
  dmg: ({ attr, calc }, { heal }) => heal(calc(attr.atk) * 60 / 100)
},
{
  title: `${TalentName.qName}施放伤害`,
  params: { BurstUse: 1, BurstHit: 1, BurstDmg: 1, EnergyDetermine: 0 },
  dmg: ({ talent, attr, calc }, dmg ) => dmg(talent.q['技能伤害'], 'q,nightsoul')
},
{
  title: `${TalentName.qName}施放激化`,
  dmgKey: 'q',
  params: { BurstUse: 1, BurstHit: 1, BurstDmg: 1, EnergyDetermine: 0 },
  dmg: ({ talent, attr, calc }, dmg ) => dmg(talent.q['技能伤害'], 'q,nightsoul', 'aggravate')
},
{
  title: `${TalentName.qName}攻击力提升值`,
  dmgKey: 'f',
  dmg: ({ talent, calc, attr }) => {
    return {
      avg: Math.min(talent.q['高位攻击力转化率'] * calc(attr.atk) / 100, talent.q['最大攻击力加成'])
    }
  }
}]
