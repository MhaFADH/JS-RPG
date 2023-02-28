import { stdin, stdout } from "node:process"
import { createInterface } from "node:readline/promises"

const readline = createInterface({
  input: stdin,
  output: stdout,
})

const ask = async (question) => {
  const result = await readline.question(question)

  return result
}

const randomNb = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min) + min)
}

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const leave = () => {
  console.clear()
  console.log("Leaving the game...")
  process.exit(0)
}

export { randomNb, ask, readline, delay, leave }
