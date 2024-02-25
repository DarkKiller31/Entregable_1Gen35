
const getRandomFromArray = arr => {
  const indexRamdom = Math.floor(Math.random() * arr.length)
  return arr[indexRamdom]
}

export default getRandomFromArray
