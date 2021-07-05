import style from '@styles/SubTopic.module.css';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierHeathDark as syntaxstyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export function ComponentSpread() {
 
  // LINK https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const codeString = `const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]`;

  return (
    <section className={style.container}>
      <article className={style.container_title}>
        <div className={style.title}>Spread Operator</div>
      </article>
      <article className={style.article}>
        <SyntaxHighlighter showLineNumbers language='javascript' style={syntaxstyle}>
          {codeString}
        </SyntaxHighlighter>
      </article>
    </section>
  );
}
