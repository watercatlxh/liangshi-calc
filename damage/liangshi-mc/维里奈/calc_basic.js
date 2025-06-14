import { mainAttrData, RankingKey, CalcMeasure } from '../index.js'
import { AllCalc } from './CalcData.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "维里奈"
export const buffs = CalcBuff
export const defDmgKey = RankingKey(CharacterName)
export const details = CalcMeasure(CharacterName, AllCalc)
export const mainAttr = mainAttrData[CharacterName]