import myInterface from './interface.js'
import verifyString from './verify.js'
import replaceChar from './replace.js'
import validateString from './valid.js'

async function reduceStrings() {
  var string = await myInterface()
  var modifiedString = string
  const regex = /[^a-c]/

  const isValid = validateString(string, regex)

  if(!isValid){
    console.log("Não são permitidas strings com letras além de 'a', 'b' e 'c'.")
  }else{
    while (verifyString(modifiedString)) {
        modifiedString = replaceChar(modifiedString)
    }
    console.log(`String Original: ${string}`)
    console.log(`String modificada: ${modifiedString}`)
    console.log(`Tamanho da string modificada: ${modifiedString.length}`)
  }

  reduceStrings()
}

reduceStrings()


