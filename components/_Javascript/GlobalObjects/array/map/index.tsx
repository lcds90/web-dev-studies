import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atelierHeathDark as syntaxstyle } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { Title } from "@components/Title";
import style from "@styles/SubTopic.module.css";
import logo from "@img/MDN_Web_Docs.png";
export function ComponentArrayMap() {
  const code = {
    syntax: `arr.map(callback[, thisArg])`,
    numbers: `const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map( (el) => el * 2);`,
    temp: `const fahrenheit = [0, 32, 45, 50, 85, 100];
const celsius = fahrenheit.map((f) => Math.round(f - 32) * 5/9);`
  };

  const numbers = [1, 2, 3, 4];
  const doubledNumbers = numbers.map((el) => el * 2);
  const fahrenheit = [0, 32, 45, 50, 85, 100];
  const celsius = fahrenheit.map((f) => Math.round(f - 32) * 5/9);

  return (
    <section className={style.container}>
      <article className={style.container_title}>
        <div className={style.title}>
          <Title
            name="Map"
            img={logo}
            link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
          />
        </div>
      </article>
      <article className={style.article}>
       <p>
          O método <strong>map()</strong> invoca uma função callback passando
          por cada indíce do Array, devolvendo um novo Array com cada elemento
          sendo resultado da função passada como callback.
          </p>
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            style={syntaxstyle}
          >
            {code.syntax}
          </SyntaxHighlighter>
        
        <p>
          Valores considerados <em>undefined ou removidos</em> são descartados.
          <br />
          O método map não modifica o array original, a não ser algo executado
          pelo próprio callback. <br />A função callback é invocada com três
          argumentos:{" "}
          <em>valor atual do elemento do array, indice, array de origem</em>
        </p>
        
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            style={syntaxstyle}
          >
            {code.numbers}
          </SyntaxHighlighter>
          <p>
          Cada número no array = {numbers.map((number) => `${number} `)} <br/>
          Função callback do map retorna = {doubledNumbers.map((number) => `${number} `)}
        </p>
        
        <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            style={syntaxstyle}
          >
            {code.temp}
          </SyntaxHighlighter>
          <p>
          Cada grau de temperatura em Fahrenheit = {fahrenheit.map((number) => `${number} `)} <br/>
          Função callback do map retorna em celsius = {celsius.map((number) => `${number} `)}
        </p>
      </article>
    </section>
  );
}
