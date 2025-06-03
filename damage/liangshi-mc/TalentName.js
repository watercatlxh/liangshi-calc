import { LSconfig } from '#liangshi'
import path from 'node:path'
import fs from 'node:fs'

function ObTalentName(CharacterName) {
  let cfg = LSconfig.getConfig('user', 'config')
  let NamePath = cfg.namemodel
  let namejsonPath, aMName, eMName, qMName, c1MName, c2MName, c4MName, c6MName
  const jsonPath = path.join(process.cwd(), 'plugins/miao-plugin/resources/meta-mc/character', CharacterName, 'data.json')
  try {
    namejsonPath = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
    aMName = namejsonPath.talent?.a.name
    eMName = namejsonPath.talent?.e.name
    qMName = namejsonPath.talent?.q.name
    c1MName = namejsonPath.cons?.['1'].name
    c2MName = namejsonPath.cons?.['2'].name
    c4MName = namejsonPath.cons?.['4'].name
    c6MName = namejsonPath.cons?.['5'].name
  } catch (err) {
    aMName = '常态攻击'
    eMName = '共鸣技能'
    qMName = '共鸣解放'
    c1MName = '一链'
    c2MName = '二链'
    c4MName = '四链'
    c6MName = '六链'
    //console.error('读取异常:', err)
  }

  let Data = {
    "0": "Auto",
    "1": "完整名称",
    "2": "简化部分",
    "3": "通俗叫法",
    "4": "字母简化",
    "5": "纯字母"
  }

  let aNameData = {
    "0": "常态攻击",
    "1": aMName,
    "2": "常态攻击",
    "3": "常态攻击",
    "4": "普攻",
    "5": "A"
  }

  let aTNameData = {
    "0": "A",
    "1": aMName,
    "2": "常态攻击",
    "3": "常态攻击",
    "4": "普攻",
    "5": "A"
  }

  let a2NameData = {
    "0": "重击",
    "1": "重击",
    "2": "重击",
    "3": "重击",
    "4": "重",
    "5": "Z"
  }

  let a2TNameData = {
    "0": "重",
    "1": "重击",
    "2": "重击",
    "3": "重击",
    "4": "重",
    "5": "Z"
  }

  let a3NameData = {
    "0": "下落",
    "1": "下落攻击",
    "2": "下落攻击",
    "3": "下落攻击",
    "4": "下落",
    "5": "戳"
  }

  let a3TNameData = {
    "0": "下落",
    "1": "下落攻击",
    "2": "下落攻击",
    "3": "下落攻击",
    "4": "下落",
    "5": "戳"
  }

  let a4NameData = {
    "0": "闪反",
    "1": "闪避反击",
    "2": "闪避反击",
    "3": "闪避反击",
    "4": "闪反",
    "5": "S"
  }

  let a4TNameData = {
    "0": "闪反",
    "1": "闪避反击",
    "2": "闪避反击",
    "3": "闪避反击",
    "4": "闪反",
    "5": "S"
  }

  let eNameData = {
    "0": eMName,
    "1": eMName,
    "2": eMName,
    "3": "共鸣技能",
    "4": "E技能",
    "5": "E"
  }

  let eTNameData = {
    "0": "E",
    "1": eMName,
    "2": eMName,
    "3": "共鸣技能",
    "4": "E技能",
    "5": "E"
  }

  let qNameData = {
    "0": qMName,
    "1": qMName,
    "2": qMName,
    "3": "共鸣解放",
    "4": "Q技能",
    "5": "Q"
  }

  let qTNameData = {
    "0": "Q",
    "1": qMName,
    "2": qMName,
    "3": "共鸣解放",
    "4": "Q技能",
    "5": "Q"
  }

  let tNameData = {
    "0": "T",
    "1": "回路",
    "2": "回路",
    "3": "共鸣回路",
    "4": "回路",
    "5": "T"
  }

  let c1NameData = {
    "0": "一链",
    "1": c1MName,
    "2": "一共鸣链",
    "3": "一链",
    "4": "一链",
    "5": "C1"
  }

  let c2NameData = {
    "0": "二链",
    "1": c2MName,
    "2": "二共鸣链",
    "3": "二链",
    "4": "二链",
    "5": "C2"
  }

  let c4NameData = {
    "0": "四链",
    "1": c4MName,
    "2": "四共鸣链",
    "3": "四链",
    "4": "四链",
    "5": "C4"
  }

  let c6NameData = {
    "0": "六链",
    "1": c6MName,
    "2": "六共鸣链",
    "3": "六链",
    "4": "六链",
    "5": "C6"
  }


  let aName, aNameT, a2Name, a2NameT, a3Name, a3NameT, a4Name, a4NameT, eName, eNameT, qName, qNameT, tName, c1Name, c2Name, c4Name, c6Name

  if (NamePath > 9 && NamePath < 100) {
    let NamePath1 = Math.floor(NamePath / 10)
    let NamePath2 = NamePath % 10
    aName = `[${aNameData[NamePath1]}]${aNameData[NamePath2]}`
    aNameT = `[${aTNameData[NamePath1]}]${aTNameData[NamePath2]}`
    a2Name = `[${a2NameData[NamePath1]}]${a2NameData[NamePath2]}`
    a2NameT = `[${a2TNameData[NamePath1]}]${a2TNameData[NamePath2]}`
    a3Name = `[${a3NameData[NamePath1]}]${a3NameData[NamePath2]}`
    a3NameT = `[${a3TNameData[NamePath1]}]${a3TNameData[NamePath2]}`
    a4Name = `[${a4NameData[NamePath1]}]${a4NameData[NamePath2]}`
    a4NameT = `[${a4TNameData[NamePath1]}]${a4TNameData[NamePath2]}`
    eName = `[${eNameData[NamePath1]}]${eNameData[NamePath2]}`
    eNameT = `[${eTNameData[NamePath1]}]${eTNameData[NamePath2]}`
    qName = `[${qNameData[NamePath1]}]${qNameData[NamePath2]}`
    qNameT = `[${qTNameData[NamePath1]}]${qTNameData[NamePath2]}`
    tName = `[${tNameData[NamePath1]}]${tNameData[NamePath2]}`
    c1Name = `[${c1NameData[NamePath1]}]${c1NameData[NamePath2]}`
    c2Name = `[${c2NameData[NamePath1]}]${c2NameData[NamePath2]}`
    c4Name = `[${c4NameData[NamePath1]}]${c4NameData[NamePath2]}`
    c6Name = `[${c6NameData[NamePath1]}]${c6NameData[NamePath2]}`
  } else {
    if (NamePath > 99 || NamePath < 0) {
      console.error('[liangshi-calc] NamePath配置错误，请重新配置')
      NamePath = 0
    }
    aName = aNameData[NamePath]
    aNameT = aTNameData[NamePath]
    a2Name = a2NameData[NamePath]
    a2NameT = a2TNameData[NamePath]
    a3Name = a3NameData[NamePath]
    a3NameT = a3TNameData[NamePath]
    a4Name = a4NameData[NamePath]
    a4NameT = a4TNameData[NamePath]
    eName = eNameData[NamePath]
    eNameT = eTNameData[NamePath]
    qName = qNameData[NamePath]
    qNameT = qTNameData[NamePath]
    tName = tNameData[NamePath]
    c1Name = c1NameData[NamePath]
    c2Name = c2NameData[NamePath]
    c4Name = c4NameData[NamePath]
    c6Name = c6NameData[NamePath]
  }
  let TalentName = { aName, aNameT, a2Name, a2NameT, a3Name, a3NameT, a4Name, a4NameT, eName, eNameT, qName, qNameT, tName, c1Name, c2Name, c4Name, c6Name }
  return TalentName
}

export { ObTalentName }
