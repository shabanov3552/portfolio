import { NavLink } from 'react-router';
import cls from './Header.module.scss';

function Menu() {
   return (
      <div className={cls.menu}>
         <nav className={cls.menu__body}>
            <NavLink to='/' className={cls.menu__link}>Главная</NavLink>
            <NavLink to='/about' className={cls.menu__link}>Обо мне</NavLink>
            <NavLink to='/projects' className={cls.menu__link}>Проекты</NavLink>
            <NavLink to='/contact' className={cls.menu__link}>Контакты</NavLink>
         </nav>
      </div>
   )
}

export { Menu };
