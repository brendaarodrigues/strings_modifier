import myInterface from './interface.js'
import validateString from './validate.js'
import loop from './replaceLoop.js'

async function reduceStrings() {
  let string = await myInterface()
  let modifiedString = ''
  const regex = /[^a-c]/

  const isValid = validateString(string, regex)

  if(!isValid){
    console.log("Não são permitidas strings com letras além de 'a', 'b' e 'c'.")
  }else{
   
    modifiedString = loop(string)
    console.log(`String Original: ${string}`)
    console.log(`String modificada: ${modifiedString}`)
    console.log(`Tamanho da string modificada: ${modifiedString.length}`)
  }

  reduceStrings()
}

reduceStrings()

export default reduceStrings