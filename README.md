## Descrição do desafio
```bash
Escreva um programa que implemente a seguinte funcionalidade:
Dada a entrada de uma string contendo variações dos caracteres 'a', 'b' e 'c', reduza a string até o estado mínimo possível.
Para reduzir a string, siga o seguinte modelo:
- Caracteres iguais que sejam adjacentes devem ser mantidos. 
- Caso hajam pares de caracteres diferentes alinhados adjacentemente, substituir o par pelo caractere restante. 
- Reduzir a string até não ser mais possível, e então exibir o resultado final.
- O programa deve ser capaz de receber diferentes inputs de string, checar se o input é válido e então realizar o processo.
```

## Instalação

```bash
$ npm install
```

## Executar o projeto

```bash
$ npm start
```
## Testar o projeto

```bash
$ npm test
```

# Exemplos de redução de strings
```bash
- 'cabbac' -> 'bbbac' -> 'bbcc' -> 'bac' -> 'cc'
- 'aabc' -> 'acc' -> 'bc' -> 'a'
- 'abc' -> 'cc' 
```

# Exibição do resultado
```bash
Após realizar a redução da string, exibir no console a string original, a string final e o tamanho da string final. 
```

## Tecnologias utilizadas

```bash
# Javascript
# NodeJS
# JestJS
```