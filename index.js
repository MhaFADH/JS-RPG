import { randomNb, ask, readline, delay, leave } from "./utils.js"

while (true) {
  console.clear()
  const MIN_HP = 100
  const MAX_HP = 301
  const MIN_STRENGTH = 10
  const MAX_STRENGTH = 51

  const MONSTER_MIN_HP = 100
  const MONSTER_MAX_HP = 201
  const MONSTER_MIN_STRENGTH = 10
  const MONSTER_MAX_STRENGTH = 31

  const BONUS_HP_THRESHOLD = 106

  let strength = randomNb(MIN_STRENGTH, MAX_STRENGTH)
  let health = randomNb(MIN_HP, MAX_HP)
  let money = 0
  let restartOver = ""

  console.log("1 - Start game\n2 - Exit")

  const choice = await ask("Your choice (1-2): ")

  switch (choice) {
    case "1":
      console.log("Game is starting...")

      while (true) {
        console.clear()
        console.log(
          `Strength: ${strength}\nHealth: ${health}\nMoney: ${money}\n\n1 - Fight\n2 - Healing potion (+50HP for 8$)\n3 - Exit`
        )

        const igChoice = await ask("Your choice (1-3): ")

        switch (igChoice) {
          case "1":
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

            if (health > 0) {
              continue
            } else {
              console.log("GAME OVER!\n")
              restartOver = await ask("Continue ?  [ENTER]")
              break
            }
          case "2":
            if (money > 7) {
              health += 50
              money -= 8
            } else {
              console.log("\nYou dont' have enough money to buy that")
              await delay(1000)
            }
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
    break
  }
}

readline.close()
