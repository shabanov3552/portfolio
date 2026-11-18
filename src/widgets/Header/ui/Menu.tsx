import { NavLink } from 'react-router';
import cls from './Header.module.scss';

interface MenuProps {
   onLinkClick?: () => void;
}

function Menu({ onLinkClick }: MenuProps) {
   return (
      <div className={cls.menu}>
         <nav
            className={cls.menu__body}
            onClick={(event) => {
               if (event.target instanceof Element && event.target.closest('a')) {
                  onLinkClick?.();
               }
            }}
         >
            <NavLink to='/' className={cls.menu__link}>Главная</NavLink>
            <NavLink to='/about' className={cls.menu__link}>Обо мне</NavLink>
            <NavLink to='/projects' className={cls.menu__link}>Проекты</NavLink>
            <NavLink to='/contact' className={cls.menu__link}>Контакты</NavLink>
         </nav>
      </div>
   )
}

export { Menu };
