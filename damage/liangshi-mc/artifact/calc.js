export const buffs = {
  凝夜白霜: {
    2: attr('dmg', 10, '冷凝'),
    5: {
      check: ({ element }) => element === '冷凝',
      title: '使用普攻或重击[buff]次，伤害提升[dmg]%',
      data: {
        buff: ({ params }) => Math.min(((params.NormalUse || 1) + (params.ChargedUse || 0)), 3),
        dmg: ({ params }) => Math.min(((params.NormalUse || 1) + (params.ChargedUse || 0)), 3) * 10
      }
    }
  },
  熔山裂谷: {
    2: attr('dmg', 10, '热熔'),
    5: {
      check: ({ element, params }) => element === '热熔' && (params.SkillsUse || 1) > 0,
      title: '使用共鸣技能时，伤害提升[dmg]%',
      data: {
        dmg: 30
      }
    }
  },
  彻空冥雷: {
    2: attr('dmg', 10, '导电'),
    5: {
      check: ({ element }) => element === '导电',
      title: '使用重击或共鸣技能[buff]次，伤害提升[dmg]%',
      data: {
        buff: ({ params }) => Math.min(((params.SkillsUse || 1) + (params.ChargedUse || 0)), 2),
        dmg: ({ params }) => Math.min(((params.SkillsUse || 1) + (params.ChargedUse || 0)), 2) * 15
      }
    }
  },
  啸谷长风: {
    2: attr('dmg', 10, '气动'),
    5: {
      check: ({ element, params }) => element === '气动' && (params.IntroUse || 1) > 0,
      title: '变奏登场时，伤害提升[dmg]%',
      data: {
        dmg: 30
      }
    }
  },
  浮星祛暗: {
    2: attr('dmg', 10, '衍射'),
    5: {
      check: ({ element, params }) => element === '衍射' && (params.IntroUse || 1) > 0,
      title: '变奏登场时，伤害提升[dmg]%',
      data: {
        dmg: 30
      }
    }
  },
  沉日劫明: {
    2: attr('dmg', 10, '湮灭'),
    5: {
      check: ({ element }) => element === '湮灭',
      title: '使用普攻或重击[buff]次，伤害提升[dmg]%',
      data: {
        buff: ({ params }) => Math.min(((params.NormalUse || 1) + (params.ChargedUse || 0)), 4),
        dmg: ({ params }) => Math.min(((params.NormalUse || 1) + (params.ChargedUse || 0)), 4) * 7.5
      }
    }
  },
  隐世回光: {
    2: attr('heal', 10),
    5: {
      check: ({ params }) => params.HealTeamDetermine === true,
      title: '为友方提供治疗时，全队攻击力提升[atkPct]%',
      data: {
        atkPct: 15
      }
    }
  },
  轻云出月: {
    2: attr('recharge', 10)
  },
  不绝余音: {
    2: attr('atkPct', 10),
    5: {
      title: '在场[buff]秒，攻击力提升[atkPct]%。延奏伤害提升[lDmg]%',
      data: {
        buff: ({ params }) => params.FightTime || 6,
        atkPct: ({ params }) => Math.min(((params.FightTime || 6) / 1.5 * 5), 20),
        lDmg: 60
      }
    }
  },
  凌冽决断之心: {
    2: {
      title: '共鸣技能伤害提升[eDmg]%',
      data: {
        eDmg: 12
      }
    },
    5: {
      title: '释放共鸣技能时，伤害提升[dmg]%，释放共鸣解放时，共鸣技能伤害提升[atkPct]%',
      data: {
        dmg: ({ params, element }) => (params.SkillsUse || 1) > 0 ? (element === "冷凝" ? 22.5 :0) : 0,
        eDmg: ({ params }) => (params.BurstUse || 0) > 0 ? 18 : 0
      }
    }
  },
  此间永驻之光: {
    2: attr('dmg', 10, '衍射'),
    5: {
      title: '为角色添加光噪效应时，暴击提升[cpct]%，目标存在[buff]层光噪效应，伤害提升[dmg]%',
      data: {
        buff: ({ params }) => params.Spectro_Frazzle || 0,
        cpct: ({ params }) => params.Spectro_Frazzle_Determine === true ? 20 : 0,
        dmg: ({ element }) => element === '衍射' ? ((params.Spectro_Frazzle || 0) >= 10 ? 15 : 0) : 0
      }
    }
  },
  幽夜隐匿之帷: {
    2: attr('dmg', 10, '湮灭')
  },
  高天共奏之曲: {
    2: attr('recharge', 10),
    5: {
      title: '协同攻击造成的伤害提升[xDmg]%，协同攻击命中且暴击时攻击力提升[atkPct]%',
      data: {
        xDmg: 80,
        atkPct: ({ params }) => params.CoordinatedHit > 0 ? 20 : 0
      }
    }
  },
  无惧浪涛之勇: {
    2: attr('recharge', 10),
    5: {
      title: '攻击力提升[atkPct]%，伤害提升[dmg]%',
      sort: 9,
      data: {
        atkPct: 15,
        dmg: ({ attr }) => (attr.recharge.base + attr.recharge.plus) >= 250 ? 30 : 0
      }
    }
  },
  流云逝尽之空: {
    2: attr('dmg', 10, '气动'),
    5: {
      check: ({ params }) => params.Aero_Erosion_Determine === true,
      title: '为敌人添加风蚀效应时，伤害提升[dmg]%',
      data: {
        dmg: ({ element }) => element === '气动' ? 30 : 0
      }
    }
  },
  愿戴荣光之旅: {
    2: attr('dmg', 10, '气动'),
    5: {
      check: ({ params }) => (params.Aero_Erosion || 0) > 0,
      title: '攻击存在风蚀效应的敌人，暴击提升[cpct]%，伤害提升[dmg]%',
      data: {
        cpct: 10,
        dmg: ({ element }) => element === '气动' ? 30 : 0
      }
    }
  },
  奔狼燎原之焰: {
    2: attr('dmg', 10, '热熔'),
    5: {
      check: ({ element, params }) => element === '热熔' && (params.BurstUse || 0) > 0,
      title: '使用共鸣解放时，伤害提升[dmg]%，共鸣解放伤害提升[qDmg]%',
      data: {
        dmg: ({ element }) => element === '热熔' ? 15 : 0,
        qDmg: 20
      }
    }
  }
}
