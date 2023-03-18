import { ask } from "../utils/ask.js"
import delay from "../utils/delay.js"

const shop = async (strength, health, money) => {
  while (true) {
    console.clear()
    console.log(
      `Strength: ${strength} ⚔️\nHealth: ${health} ❤️\nMoney: ${money} 💰\n\n1 - Healing potion (+50HP for 8$)\n2 - Strength potion (+15 for 8$)\n3 - Return`
    )
    const shopChoice = await ask("Your choice (1-3): ")
    switch (shopChoice) {
      case "1":
        if (money > 7) {
          health += 50
          money -= 8
        } else {
          console.log("\nYou dont' have enough money to buy that")
          await delay(1000)
        }
        continue
      case "2":
        if (money > 7) {
          strength += 15
          money -= 8
        } else {
          console.log("\nYou dont' have enough money to buy that")
          await delay(1000)
        }
        continue
      case "3":
        break
      default:
        continue
    }
    break
  }
  return { strength, money, health }
}

export default shop
