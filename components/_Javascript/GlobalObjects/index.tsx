import style from '@styles/Topic.module.css';
import { ComponentArray } from './array';

// LINK https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects
export function ComponentGlobalObjects() {
  return (
    <section className={style.container_rtl}>
      <article className={style.container_title}>
        <div className={style.title}>Objetos Pré Definidos</div>
      </article>
      <article className={style.article}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor nisi metus, rutrum varius lorem posuere a. Vivamus odio neque, finibus vitae lacinia quis, viverra nec lacus. In ultrices felis tortor, in aliquam tortor fermentum at. Cras elementum metus vel vulputate commodo. Vestibulum mollis tincidunt neque vel volutpat. Nunc lobortis, elit in elementum consectetur, ipsum ipsum laoreet tortor, id tincidunt nulla leo at odio. Donec id lacus finibus, pretium orci a, aliquam leo. In maximus tellus ligula, nec ultrices metus consectetur ut. Nulla eleifend orci et dapibus condimentum. Curabitur quis justo odio. Fusce lacinia augue purus. 
      <ComponentArray />
      </article>
    </section>
  );
}