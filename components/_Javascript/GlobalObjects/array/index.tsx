import style from '@styles/Topic.module.css'
import { ComponentArrayReduce } from './reduce'
import { ComponentArrayMap } from './map'

export function ComponentArray() {
    return (
        <section className={style.container}>
        <article className={style.container_title}>
          <div className={style.title}>Array</div>
        </article>
        <article className={style.article}>
          <p>
          Arrays são objetos semelhantes a listas, contendo uma série de métodos embutidos para realizar operaçòes de travessia e mutação. 
          </p>
          <p>
            Um array não possui tipos e nem seus elementos são fixos assim também como seu tamanho.
          </p>
          <p>
            
          </p>

          Métodos do Arrays 
          <ComponentArrayMap />
          <ComponentArrayReduce />
        </article>
      </section>
    )
}
