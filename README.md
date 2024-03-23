# React Hooks

## UseState
Estado em componentes funcionais. Sempre que uma variável de estado é alterada
é feita uma nova renderização do componente.

## UseEffect
Executa efeitos colaterais em componentes funcionais. No projeto, é utilizado
useEffect para executar o cálculo fatorial sempre que um novo número é inserido
no controle INPUT.

## UseRef
Retorna um objeto mutável com a propriedade ".current". Diferente de useState,
useRef não renderiza o componente quando seu conteúdo é alterado.

No exemplo de uso de useRef, a cada caractere digitado o foco muda de um elemento INPUT para outro, e a função merge se encarrega de juntar corretamente os caracteres digitados em ambos os INPUTs e formar a string digitada.

## UseMemo
Retorna um valor memoizado. Mantém o dado em memória e somente renderiza o componente que ele monitora e se seu valor for modificado.

## UseCallback
Parecido com UseMemo, exceto pelo fato de que UseCallback retorna a referência para uma função guardada em memória (memoizada).

Execute o exemplo e confira no console quantas vezes a palavra "renderizou..." será impressa.

## UseContext
Aceita um objeto de contexto e retorna o valor atual do contexto. Este valor fica disponível para uso em toda a aplicação.

Como exemplo no curso foi demonstrado o contexto como um valor de leitura, como também como alterar o valor do contexto usando useState.

## UseReducer
Uma outra forma de ter estado em componentes funcionais

## Criar o projeto

Execute o comando abaixo, onde hooks, é o nome do projeto:

```shell
$ create-react-app hooks
```

Caso o create-react-app não esteja disponível, instale-o com o seguinte comando:

```shell
$ npm i -g create-react-app
```

Este projeto utiliza [React Router](https://reactrouter.com/). Para instalá-lo,
execute o comando a seguir:

```shell
$ npm i react-router-dom
```


## Saiba Mais

- [As 70 principais perguntas e respostas da entrevista React JS](https://career.guru99.com/pt/reactjs-interview-questions/)
- [React exports, imports e defaults](https://maujor.com/tutorial/react-export-import-defaults.php)
- [Atribuição via desestruturação (destructuring assignment)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Test CSS Flexbox](https://flexbox.help)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [CSS Flex Layout - Angry Tools](https://angrytools.com/css-flex/)
- [Alura: Flexbox CSS: Guia Completo, Elementos e Exemplos](https://www.alura.com.br/artigos/css-guia-do-flexbox)
- [Desvendando o Objeto Spread no JavaScript](https://codertechdotblog.wordpress.com/2023/07/19/desvendando-o-objeto-spread-no-javascript-desmistificando-seus-recursos-e-exemplos-de-uso/)
- [Youtube COD3R: Flexbox para Fluter, React Native, Web](https://youtu.be/s-CARPA01NU)
- [Como usar a função React.cloneElement()?](https://acervolima.com/como-usar-a-funcao-react-cloneelement/)
- [React.Component](https://pt-br.legacy.reactjs.org/docs/react-component.html)
- [ReactJS: entenda a diferença entre Function e Class component](https://blog.ateliware.com/reactjs-function-class-component/)
- [O que é 'this' no React](https://medium.com/byte-sized-react/what-is-this-in-react-25c62c31480)
- [A evolução do desenvolvimento React](https://www.alura.com.br/artigos/evolucao-desenvolvimento-react)
- [Recursos do JavaScript que Você Precisa Conhecer para Dominar o React](https://kinsta.com/pt/blog/javascript-react/)
- [Como quebrar uma string em várias linhas em JavaScript](https://horadecodar.com.br/como-quebrar-uma-string-em-varias-linhas-em-javascript/)
- [Template strings (Template literals)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals)
- [uiGradients - Fornece o CSS de diversos gradientes](https://uigradients.com/)
- [Construa um CSS mágico com variáveis nativas](https://www.alura.com.br/artigos/construa-css-magico-variaveis-nativas)
- [Learn CSS Grid](https://learncssgrid.com/#grid-container)
- [Grid Garden Game - CSS Grid](https://cssgridgarden.com/)
- [Conhecendo o useRef do React](https://medium.com/@guigaoliveira_/conhecendo-o-useref-do-react-9d67e66)
- [Qual é a diferença entre useRef() e createRef()?](https://stackoverflow.com/questions/54620698/whats-the-difference-between-useref-and-createref)
- [React.useMemo na prática](https://medium.com/reactbrasil/react-usememo-na-pr%C3%A1tica-692110771c01)
- [React useCallback](https://www.dataside.com.br/dataside-community/linguagem-de-programacao/react-usecallback)
- [Melhorando o Desempenho do React: useCallback vs. useMemo Hooks](https://adevindev.xyz/post/melhorando-o-desempenho-do-react)
- [Usando useReducer ao invés do useState](https://pt.linkedin.com/pulse/usando-usereducer-ao-inv%C3%A9s-do-usestate-caleb-buffleben)

## Dicas VS Code
- [Youtube: Escrever HTML 50% mais rápido no VS Code](https://youtu.be/8jLfTDn3_TM)
- [Youtube: 5 Extensões VS Code](https://youtu.be/HIxRDyFfnuc)

## Teclas de Atalho VS Code

- Selecionada uma palavra, tecle alt+D para marcar as demais
- Tecle Alt+Shift+Up ou Alt+Shift+Down para criar múltiplos cursores
- Tecle Ctrl+Shift+H para abrir opção de pesquisar e substituir