import cls from './AboutPage.module.scss'

function AboutPage() {
   return (
      <section className={cls.about__section}>
         <h2 className={cls.title}>Обо мне</h2>
         <ul className={cls.description}>
            <li className={cls.description__item}>
               Я Александр, frontend-разработчик.
            </li>
            <li className={cls.description__item}>
               В веб-разработке с 2018 года. Начинал с вёрстки, затем работал в веб-студии и параллельно занимался проектами на фрилансе. За это время успел поработать над интернет-магазинами, корпоративными и информационными порталами.
            </li>
            <li className={cls.description__item}>
               Последний год активно работаю с React, TypeScript и Next.js. Мне нравится не только создавать интерфейсы, но и разбираться, как сделать их удобнее, быстрее и проще в поддержке.
            </li>
            <li className={cls.description__item}>
               Сейчас хочу работать в продуктовой команде, решать более сложные задачи и развиваться как frontend-инженер.
            </li>
         </ul>
      </section>
   )
}

export { AboutPage };
