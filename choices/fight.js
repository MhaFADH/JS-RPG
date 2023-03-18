import delay from "../utils/delay.js"
import randomNb from "../utils/randomNb.js"

const fight = async (money, strength, health) => {
  const MONSTER_MIN_HP = 100
  const MONSTER_MAX_HP = 201
  const MONSTER_MIN_STRENGTH = 10
  const MONSTER_MAX_STRENGTH = 31

  const BONUS_HP_THRESHOLD = 106

  console.clear()
  let monsterStrength = randomNb(MONSTER_MIN_STRENGTH, MONSTER_MAX_STRENGTH)
  let monsterHealth = randomNb(MONSTER_MIN_HP, MONSTER_MAX_HP)
  const cashPrize = monsterHealth / 15
  let roundNb = 1
  console.log(`Monster health: ${monsterHealth} --- Your Health: ${health}`)

  while (health > 0) {
    if (monsterHealth > 0) {
      console.log(`ROUND #${roundNb}`)
      monsterHealth -= strength
      health -= monsterStrength
      console.log(`Monster health: ${monsterHealth} --- Your Health: ${health}`)
      roundNb++
      await delay(2000)
    } else {
      console.log("YOU WON")
      await delay(2000)
      if (health < BONUS_HP_THRESHOLD) {
        money += Math.round(cashPrize) + 8
      } else {
        money += Math.round(cashPrize)
      }
      break
    }
  }

  return { money, health, strength }
}

export default fight
