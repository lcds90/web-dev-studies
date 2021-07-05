import style from '@styles/Topic.module.css';

export function ComponentJavascriptHistory() {
  return (
    <section className={style.container}>
      <article className={style.container_title}>
        <div className={style.title}>O que é Javascript?</div>
      </article>
      <article className={style.article}>
        Javascript é uma linguagem:
        <ul className='jsIs'>
          <li>Orientada a Objetos</li>
          <li>Multiplataforma</li>
        </ul>
        <div>
          O lado cliente do Javascript. <br />
          Estende do núcleo de linguagem, controlando o navegador Web e o DOM
          (Document Object Model) <br />
          O lado servidor do Javascript  <br />
          Fornece objetos relevantes á execução do Javascript em um servidor.
        </div>
      </article>
    </section>
  );
}
