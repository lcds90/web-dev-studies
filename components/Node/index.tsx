import style from '@styles/Topic.module.css';
import { ComponentEnterviewQuestions } from './EnterviewQuestions'

export function ComponentNodeHistory() {
  return (
    <section className={style.container}>
      <article className={style.container_title}>
        <div className={style.title}>Node JS</div>
      </article>
      <article className={style.article}>
      <ComponentEnterviewQuestions />
      </article>
    </section>
  );
}
