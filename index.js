
import { randomNb,ask,readline,delay } from "./utils.js"




while (true) {
  console.clear()
  
  let strength = randomNb(10, 51)
  let health = randomNb(100, 301)
  let money = 0
  let restartOver = ""

  console.clear()  
  console.log('1 - Start game\n2 - Exit')

  const choice = await ask("Your choice (1-2): ")

  switch (choice) {
    case "1":
      console.log("Game is starting...")

      while (true) {
        console.clear()
        console.log(`Force:${strength}\nSanté:${health}\nArgent:${money}\n\n1 - Fight\n2 - Healing potion (+50HP for 8$)\n3 - Exit`)
        
        const igChoice = await ask("Your choice (1-3): ")

        switch (igChoice) {
          case "1":
            console.clear()
            let monsterStrength = randomNb(10, 31)
            let monsterHealth = randomNb(100, 201)
            const cashprize = monsterHealth/15
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
                if (health < 106) {
                  money += Math.round(cashprize)+8
                } else {
                  money += Math.round(cashprize)
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
            console.clear()
            console.log("Leaving the game...")
            restartOver = "nope"
            break
          default:
            continue
        }
        break
      }
    break
    case "2":
      console.clear()
      console.log("Leaving the game...")
      restartOver = "nope"

    break
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