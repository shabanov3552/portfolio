
import cls from './Page404.module.scss';
import { ButtonLink } from "@/shared/ui/ButtonLink/ButtonLink";

function Page404() {
   return (
      <div className={cls.wrapper}>
         <h1 className={cls.title}>Страница не неайдена</h1>
         <ButtonLink to='/'>Вернуться на Главную</ButtonLink>
      </div>
   )
}

export { Page404 };
