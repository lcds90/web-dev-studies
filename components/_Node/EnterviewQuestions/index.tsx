import style from '@styles/SubTopic.module.css';

export function ComponentEnterviewQuestions() {
  
  const code1 = String.raw`const numbers = [1, 2, 3]; numbers.push(4);
  console.log(numbers); // [1, 2, 3, 4]`; 
  
  return (
    <section className={style.container}>
      <article className={style.container_title}>
        <div className={style.title}>Perguntas de Entrevistas</div>
      </article>
      <article className={style.article}>

        <p>
          <strong>Event Loop</strong>: O node trata os processamentos de entrada e saída de maneira assícrona, como ele é orientado a eventos, permanece ouvindo os eventos tratando cada um de alguma maneira especifíca que foi solicitado, registrando um callback operação de sistema operacional (abrir arquivos, escrever arquivos, requisições para servidor remoto) algo que depende do processamento do node.
        </p>

        {/* <pre className={style.code}>
          {code1}
        </pre> */}
      </article>
    </section>
  );
}
