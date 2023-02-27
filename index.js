
import { randomNb,ask,readline } from "./utils.js"




while (true) {
  console.clear()  
  console.log('1 - Start game\n2 - Exit')

  const choice = await ask("Your choice (1-2): ")

  switch (choice) {
    case "1":
      console.log("Game is starting...")
      let strength = randomNb(10, 51)
      let health = randomNb(100, 301)
      let money = 0

      const mainString = `Force:${strength}\nSanté:${health}\nArgent:${money}`

      while (true) {
        // console.clear()
        console.log(mainString, "\n\n1 - Fight\n2 - Exit")
        
        const igChoice = await ask("Your choice (1-2): ")

        switch (igChoice) {
          case "1":
            console.log("FIGHT")
            let monsterHealth = randomNb(10, 31)
            let monsterStrength = randomNb(100, 201)
            console.log(`mhp${monsterHealth}mstr${monsterStrength}`)

            continue
          case "2":
            console.clear()
            console.log("Leaving the game...")
            break
          default:
            continue        
        }
        break
      }
    break
    case "2":
      clear.console()
      console.log("Leaving the game...")
    break
    default:
    continue
  }
  break
  console.log(rst)
  
}
readline.close()