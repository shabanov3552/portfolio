
import { useState } from 'react';
import { useMediaQuery } from '@/shared/lib/hooks';
import styles from './Header.module.scss';

import Logo from '@/shared/assets/icons/github.svg?react'
import BurgerIcon from '@/shared/assets/icons/hamburger-btn.svg?react'
import BurgerIconClose from '@/shared/assets/icons/hamburger-btn-close.svg?react'

export function Header() {
   const isMobile = useMediaQuery('(max-width: 767.98px)');

   return (
      <header className={styles.header}>
         <a href="/" className={styles.header__logo}>SHABAN<span>OV</span></a>

         {!isMobile ? <Menu /> : null}

         <a href="" className={styles.header__githubLink}><Logo /></a>

         {isMobile ? <MobileMenu /> : null}
      </header>
   )
}

function MobileMenu() {
   const [menuIsOpen, setMenuStatus] = useState(false);

   return (
      <>
         <button onClick={() => setMenuStatus(!menuIsOpen)} className={styles.header__menuButton}>
            {!menuIsOpen ? <BurgerIcon /> : <BurgerIconClose />}
         </button>

         <div className={`${styles.header__mobile} ${menuIsOpen ? styles.menu_open : ''}`}>
            <Menu />
         </div>
      </>
   )
}

function Menu() {

   return (
      <div className={styles.menu}>
         <nav className={styles.menu__body}>
            <a href="" className={styles.menu__link}>Главная</a>
            <a href="" className={styles.menu__link}>Обо мне</a>
            <a href="" className={styles.menu__link}>Проекты</a>
            <a href="" className={styles.menu__link}>Контакты</a>
         </nav>
      </div>
   )
}
