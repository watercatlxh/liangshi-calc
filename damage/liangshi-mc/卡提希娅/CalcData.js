import { Format } from '#liangshi'
import { ObTalentName } from '../index.js'

let CharacterName = "卡提希娅"
let TalentName = ObTalentName(CharacterName)
export const AllCalc = [
  {
    title: `卡-${TalentName.aName}一段伤害`,
    params: { PlayName: "Cartethyia", NormalUse: 1, NormalHit: 1, NormalDmg: 1 },
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.a['第一段伤害'] / 100, 'a')
  },
  {
    title: `卡-${TalentName.aName}二段伤害`,
    params: { PlayName: "Cartethyia", NormalUse: 2, NormalHit: 4, NormalDmg: 4 },
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.a['第二段伤害2'][0] / 100, 'a')
      let a2 = basic(calc(attr.hp) * talent.a['第二段伤害2'][1] / 100, 'a')
      return {
        dmg: a1.dmg * 2 + a2.dmg,
        avg: a1.avg * 2 + a2.avg,
      }
    }
  },
  {
    title: `卡-${TalentName.aName}三段伤害`,
    params: { PlayName: "Cartethyia", NormalUse: 3, NormalHit: 8, NormalDmg: 8 },
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.a['第三段伤害2'][0] / 100, 'a')
      return {
        dmg: a1.dmg * 4,
        avg: a1.avg * 4,
      }
    }
  },
  {
    title: `卡-${TalentName.aName}四段伤害`,
    params: { PlayName: "Cartethyia", NormalUse: 4, NormalHit: 12, NormalDmg: 12 },
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.a['第四段伤害2'][0] / 100, 'a')
      let a2 = basic(calc(attr.hp) * talent.a['第四段伤害2'][1] / 100, 'a')
      return {
        dmg: a1.dmg * 3 + a2.amg,
        avg: a1.avg * 3 + a2.avg,
      }
    }
  },
  {
    title: `芙-${TalentName.aName}一段伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, NormalUse: 1, NormalHit: 1, NormalDmg: 1 }),
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.t['普攻第一段伤害'] / 100, 'a')
  },
  {
    title: `芙-${TalentName.aName}二段伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, NormalUse: 2, NormalHit: 5, NormalDmg: 5 }),
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.t['普攻第二段伤害2'][0] / 100, 'a')
      let a2 = basic(calc(attr.hp) * talent.t['普攻第二段伤害2'][1] / 100, 'a')
      return {
        dmg: a1.dmg + a2.amg * 3,
        avg: a1.avg + a2.avg * 3
      }
    }
  },
  {
    title: `芙-${TalentName.aName}三段伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, NormalUse: 3, NormalHit: 9, NormalDmg: 9 }),
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.t['普攻第三段伤害2'][0] / 100, 'a')
      let a2 = basic(calc(attr.hp) * talent.t['普攻第三段伤害2'][1] / 100, 'a')
      return {
        dmg: a1.dmg * 3 + a2.amg,
        avg: a1.avg * 3 + a2.avg,
      }
    }
  },
  {
    title: `芙-${TalentName.aName}四段伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, NormalUse: 4, NormalHit: 14, NormalDmg: 14 }),
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.t['普攻第四段伤害2'][0] / 100, 'a')
      return {
        dmg: a1.dmg * 5,
        avg: a1.avg * 5,
      }
    }
  },
  {
    title: `芙-${TalentName.aName}五段伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, NormalUse: 5, NormalHit: 16, NormalDmg: 16 }),
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.t['普攻第五段伤害2'][0] / 100, 'a')
      let a2 = basic(calc(attr.hp) * talent.t['普攻第五段伤害2'][1] / 100, 'a')
      return {
        dmg: a1.dmg + a2.amg,
        avg: a1.avg + a2.avg,
      }
    }
  },
  {
    title: `卡-${TalentName.a2Name}伤害`,
    params: { PlayName: "Cartethyia", ChargedUse: 1, ChargedHit: 4, ChargedDmg: 4 },
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.a['重击伤害2'][0] / 100, 'a2')
      let a2 = basic(calc(attr.hp) * talent.a['重击伤害2'][1] / 100, 'a2')
      return {
        dmg: a1.dmg * 3 + a2.dmg,
        avg: a1.avg * 3 + a2.avg
      }
    }
  },
  {
    title: `芙-${TalentName.a2Name}伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, ChargedUse: 1, NormalHit: 2, NormalDmg: 2 }),
    dmg: ({ talent, attr, calc }, { basic }) => { //普攻伤害
      let a1 = basic(calc(attr.hp) * talent.t['重击伤害2'][0] / 100, 'a')
      let a2 = basic(calc(attr.hp) * talent.t['重击伤害2'][1] / 100, 'a')
      return {
        dmg: a1.dmg + a2.dmg,
        avg: a1.avg + a2.avg
      }
    }
  },
  {
    title: `芙-强化${TalentName.a2Name}伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, ChargedUse: 2, NormalHit: 5, NormalDmg: 5 }),
    dmg: ({ talent, attr, calc }, { basic }) => { //普攻伤害
      let a1 = basic(calc(attr.hp) * talent.t['强化重击伤害2'][0] / 100, 'a')
      let a2 = basic(calc(attr.hp) * talent.t['强化重击伤害2'][1] / 100, 'a')
      return {
        dmg: a1.dmg * 2 + a2.dmg,
        avg: a1.avg * 2 + a2.avg
      }
    }
  },
  {
    title: '芙-上挑攻击伤害',
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, ChargedUse: 2, NormalHit: 6, NormalDmg: 6 }),
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.t['上挑攻击伤害2'][0] / 100, 'a')
      return {
        dmg: a1.dmg * 2,
        avg: a1.avg * 2
      }
    }
  },
  {
    title: `卡-${TalentName.a3Name}伤害`,
    params: { PlayName: "Cartethyia", PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1, fly: true },
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.a['空中攻击伤害'] / 100, 'a,a3,erosion')
  },
  {
    title: `卡-${TalentName.a3Name}回收一剑`,
    params: { PlayName: "Cartethyia", PlungingUse: 1, PlungingHit: 2, PlungingDmg: 2 },
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.a['空中攻击回收一剑'] / 100, 'a,a3,erosion')
  },
  {
    title: `卡-${TalentName.a3Name}回收二剑`,
    params: { PlayName: "Cartethyia", PlungingUse: 1, PlungingHit: 5, PlungingDmg: 5 },
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.a['空中攻击回收二剑2'][0] / 100, 'a,a3,erosion')
      return {
        dmg: a1.dmg * 3,
        avg: a1.avg * 3
      }
    }
  },
  {
    title: `卡-${TalentName.a3Name}回收三剑`,
    params: { PlayName: "Cartethyia", PlungingUse: 1, PlungingHit: 8, PlungingDmg: 8 },
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.a['空中攻击回收三剑2'][0] / 100, 'a,a3,erosion')
      return {
        dmg: a1.dmg * 3,
        avg: a1.avg * 3
      }
    }
  },
  {
    title: `芙-${TalentName.a3Name}一段伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, PlungingUse: 1, PlungingHit: 3, PlungingDmg: 3, fly: true }),
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.t['空中攻击第一段伤害2'][0] / 100, 'a,a3')
      let a2 = basic(calc(attr.hp) * talent.t['空中攻击第一段伤害2'][1] / 100, 'a,a3')
      return {
        dmg: a1.dmg * 2 + a2.dmg,
        avg: a1.avg * 2 + a2.avg
      }
    }
  },
  {
    title: `芙-${TalentName.a3Name}二段伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, PlungingUse: 2, PlungingHit: 6, PlungingDmg: 6, fly: true }),
    dmg: ({ talent, attr, calc }, { basic }) => {
      let a1 = basic(calc(attr.hp) * talent.t['空中攻击第二段伤害2'][0] / 100, 'a,a3')
      let a2 = basic(calc(attr.hp) * talent.t['空中攻击第二段伤害2'][1] / 100, 'a,a3')
      return {
        dmg: a1.dmg * 2 + a2.dmg,
        avg: a1.avg * 2 + a2.avg
      }
    }
  },
  {
    title: `芙-${TalentName.a3Name}三段伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, PlungingUse: 3, PlungingHit: 7, PlungingDmg: 7, fly: true }),
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.t['空中攻击第三段伤害'] / 100, 'a,a3')
  },
  {
    title: `卡-${TalentName.eName}伤害`,
    params: { PlayName: "Cartethyia", SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4 },
    dmg: ({ talent, attr, calc }, { basic }) => {
      let e1 = basic(calc(attr.hp) * talent.e['技能伤害2'][0] / 100, 'a')
      let e2 = basic(calc(attr.hp) * talent.e['技能伤害2'][1] / 100, 'a')
      return {
        dmg: e1.dmg * 3 + e2.dmg,
        avg: e1.avg * 3 + e2.avg
      }
    }
  },
  {
    title: `芙-${TalentName.eName}一段伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, SkillsUse: 1, SkillsHit: 5, SkillsDmg: 5, fly: true }),
    dmg: ({ talent, attr, calc }, { basic }) => {
      let e1 = basic(calc(attr.hp) * talent.t['共鸣技能·此剑为潮浪之意伤害2'][0] / 100, 'e')
      let e2 = basic(calc(attr.hp) * talent.t['共鸣技能·此剑为潮浪之意伤害2'][1] / 100, 'e')
      return {
        dmg: e1.dmg * 4 + e2.dmg,
        avg: e1.avg * 4 + e2.avg
      }
    }
  },
  {
    title: `芙-${TalentName.eName}二段伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, SkillsUse: 2, SkillsHit: 10, SkillsDmg: 10, fly: true }),
    dmg: ({ talent, attr, calc }, { basic }) => {
      let e1 = basic(calc(attr.hp) * talent.t['共鸣技能·凭风斩浪破敌伤害2'][0] / 100, 'e')
      let e2 = basic(calc(attr.hp) * talent.t['共鸣技能·凭风斩浪破敌伤害2'][1] / 100, 'e')
      return {
        dmg: e1.dmg * 2 + e2.dmg * 3,
        avg: e1.avg * 2 + e2.avg * 3
      }
    }
  },
  {
    title: `芙-${TalentName.qName}伤害`,
    params: ({ cons }) => ({ OwnHp: 50, Resolve: 120, PlayName: "Fleurdelys", Aero_Erosion: cons >= 2 ? 6 : 3, SkillsUse: 2, SkillsHit: 10, SkillsDmg: 10, BurstUse: 1, BurstHit: 7, BurstDmg: 7, EnergyUse: 1, fly: true }),
    dmg: ({ talent, attr, calc }, { basic }) => {
      let q1 = basic(calc(attr.hp) * talent.q['看潮怒风哮之刃伤害2'][0] / 100, 'q')
      return {
        dmg: q1.dmg * 7,
        avg: q1.avg * 7
      }
    }
  }
]