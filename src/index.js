module.exports = function check(str, bracketsConfig) {
  let lifo = []
  const brackets = new Map(bracketsConfig);

  for (const element of str.split('')) {
    if (brackets.has(element) && lifo[lifo.length - 1] !== brackets.get(element)) lifo.push(element)
    else
      if ([...brackets.values()].includes(element) && brackets.get(lifo.pop()) !== element)
        return false
  }

  if (lifo.length === 0) return true
  else return false
}