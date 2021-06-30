import style from '@styles/Topic.module.css'
import { ComponentReduce } from './reduce'
import { ComponentSpread } from './spread'

export function ComponentArray() {
    return (
        <section className={style.container}>
        <article className={style.container_title}>
          <div className={style.title}>Array</div>
        </article>
        <article className={style.article}>
          <ComponentReduce />
          <ComponentSpread />
        </article>
      </section>
    )
}
