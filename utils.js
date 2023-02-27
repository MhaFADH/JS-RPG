import { exit, stdin, stdout } from "node:process"
import { createInterface } from "node:readline/promises"

const readline = createInterface({
  input: stdin,
  output: stdout,
})

const ask = async (question) => {
  const result = await readline.question(question)

  return result
}

function randomNb(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { randomNb, ask, readline, delay }
