import read from 'fs'
import resolve from 'path'
import readline from 'readline'
import createInterface from 'readline'

async function myInterface(){

    const readlines = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
  
    return new Promise((resolve) => {
      return (
        readlines.question("Digite uma string qualquer que possua apenas as letras 'a', 'b' e 'c' \n", async (response) => {
            readlines.close()
          return resolve(response.toLowerCase())
        })
      );
    });
  }
  

export default myInterface