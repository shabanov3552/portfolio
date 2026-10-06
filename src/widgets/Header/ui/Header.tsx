
import styles from './Header.module.scss';

import Logo from '@/shared/assets/icons/github.svg?react'

export function Header() {
   return (
      <div className={styles.header}>
         <a href="/" className={styles.headerLogo}>SHABAN<span>OV</span></a>
         {/* <button type="button" className="menu__icon icon-menu"><span></span></button> */}
         <nav className={styles.menuBody}>
            <ul className={styles.menuList}>
               <li className={styles.menuItem}><a href="" className={styles.menuLink}>Главная</a></li>
               <li className={styles.menuItem}><a href="" className={styles.menuLink}>Обо мне</a></li>
               <li className={styles.menuItem}><a href="" className={styles.menuLink}>Проекты</a></li>
               <li className={styles.menuItem}><a href="" className={styles.menuLink}>Контакты</a></li>
            </ul>
         </nav>
         <a href="" className={styles.headerGithubLink}><Logo /></a>
      </div>
   )
}
