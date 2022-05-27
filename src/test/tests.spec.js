import modifiedString from "./modifiedString.js"
import replaceLoop from "../replaceLoop.js"
import modifiedStringLength from "./modifiedStringLength.js";

test.each([...modifiedString])
  ('Deve retornar a string em seu menor tamanho', ({string, expected}) => {
    const newString = replaceLoop(string)
    expect(newString).toBe(expected);
  });
  

  test.each([
    ...modifiedStringLength
  ])('Deve retornar o tamanho da string final', ({string, expected}) => {
    const newString = replaceLoop(string).length
    expect(newString).toBe(expected);
  });
  