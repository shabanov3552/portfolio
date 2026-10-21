
import { useState } from 'react';
import { useMediaQuery } from '@/shared/lib/hooks';

import { ContactsList } from '@/shared/ui/ContactsList';

import { contacts } from '@/shared/config/contacts';

import GitHubIcon from '@/shared/assets/icons/github.svg?react'
import BurgerIcon from '@/shared/assets/icons/hamburger-btn.svg?react'
import BurgerIconClose from '@/shared/assets/icons/hamburger-btn-close.svg?react'

import cls from './Header.module.scss';

export function Header() {
   const isMobile = useMediaQuery('(max-width: 991.98px)');

   return (
      <header className={cls.header}>
         <a href="/" className={cls.header__logo}>SHABAN<span>OV</span></a>

         {!isMobile ? <Menu /> : null}

         <a href="" className={cls.header__githubLink}><GitHubIcon /></a>

         {isMobile ? <MobileMenu /> : null}
      </header>
   )
}

function MobileMenu() {
   const [menuIsOpen, setMenuStatus] = useState(false);

   return (
      <>
         <button onClick={() => setMenuStatus(!menuIsOpen)} className={cls.header__menuButton}>
            {!menuIsOpen ? <BurgerIcon /> : <BurgerIconClose />}
         </button>

         <div className={`${cls['mobile-menu']} ${menuIsOpen ? cls.menu_open : ''}`}>
            <div className={cls['mobile-menu__body']}>
               <Menu />
               <ContactsList contactsList={[contacts.email, contacts.telegram, contacts.phone]} modifierClass={cls['contacts-list_mobile-menu']} />
            </div>
         </div>
      </>
   )
}

function Menu() {
   return (
      <div className={cls.menu}>
         <nav className={cls.menu__body}>
            <a href="" className={cls.menu__link}>Главная</a>
            <a href="" className={cls.menu__link}>Обо мне</a>
            <a href="" className={cls.menu__link}>Проекты</a>
            <a href="" className={cls.menu__link}>Контакты</a>
         </nav>
      </div>
   )
}
