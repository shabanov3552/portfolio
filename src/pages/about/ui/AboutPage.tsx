import cls from './AboutPage.module.scss'
import { skills } from '../model/skills'

function AboutPage() {
   return (
      <section className={cls.about__section}>
         <h1 className={cls.title}>Обо мне</h1>
         <ul className={cls.description}>
            <li className={cls.description__item}>
               Я Александр, frontend-разработчик. Специализируюсь на разработке веб-интерфейсов с использованием React, Next.js и TypeScript.
            </li>
            <li className={cls.description__item}>
               С июня 2021 по август 2025 года работал frontend-разработчиком в веб-студии «Соль» в Красноярске, где создавал интернет-магазины, корпоративные порталы, многостраничные сайты и лендинги. Параллельно с работой в студии и после её завершения продолжаю заниматься фриланс-проектами и развивать собственные pet-проекты.
            </li>
            <li className={cls.description__item}>
               Разработал структуру корпоративного портала на 40+ страниц и переиспользуемые компоненты. Реализовал drag-and-drop строк таблиц, редактирование параметров и согласование расчётов.
            </li>
            <li className={cls.description__item}>
               Создал адаптивные интерфейсы для многостраничных сайтов и интернет-магазинов, а также лендингов и промосайтов. Разработал B2B-портал на React и TypeScript и интерактивный калькулятор стоимости тура.
            </li>
            <li className={cls.description__item}>
               Помогал стажёрам разбираться в проектах и участвовал в ревью кода.
            </li>
         </ul>

         <div className={cls.skills}>
            <h2 className={cls.title}>Скилы</h2>
            <div className={cls.skills__grid}>
               {skills.map((skill) => (
                  <div className={cls.skill} key={skill.name}>
                     <img className={cls.skill__icon} src={skill.icon} alt="" aria-hidden="true" />
                     <div className={cls.skill__title}>{skill.name}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export { AboutPage };
