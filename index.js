import { ask, readline } from "./utils/ask.js"
import randomNb from "./utils/randomNb.js"
import leave from "./choices/leave.js"
import shop from "./choices/shop.js"
import fight from "./choices/fight.js"

while (true) {
  console.clear()
  const MIN_HP = 100
  const MAX_HP = 301
  const MIN_STRENGTH = 10
  const MAX_STRENGTH = 51

  let strength = randomNb(MIN_STRENGTH, MAX_STRENGTH)
  let health = randomNb(MIN_HP, MAX_HP)
  let money = 0
  let restartOver = ""

  console.log("1 - Start game\n2 - Exit")

  const choice = await ask("Your choice (1-2): ")

  switch (choice) {
    case "1":
      while (true) {
        console.clear()
        console.log(
          `Strength: ${strength} ⚔️\nHealth: ${health} ❤️\nMoney: ${money} 🪙\n\n1 - Fight\n2 - Shop\n3 - Exit`
        )

        const igChoice = await ask("Your choice (1-3): ")

        switch (igChoice) {
          case "1":
            const afterFightValues = await fight(money, strength, health)
            strength = afterFightValues.strength
            money = afterFightValues.money
            health = afterFightValues.health

            if (health > 0) {
              continue
            } else {
              console.log("GAME OVER!\n")
              restartOver = await ask("Continue ?  [ENTER]")
              break
            }
          case "2":
            const afterShopValues = await shop(strength, health, money)
            strength = afterShopValues.strength
            money = afterShopValues.money
            health = afterShopValues.health
            continue

          case "3":
            leave()
          default:
            continue
        }
        break
      }
      break
    case "2":
      leave()
    default:
      continue
  }

  if (restartOver === "") {
    continue
  } else {
    leave()
  }
}

readline.close()
