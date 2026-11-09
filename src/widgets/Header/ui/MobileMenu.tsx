import { useState } from 'react';

import { Menu } from './Menu';
import { ContactsList } from '@/shared/ui/ContactsList';
import { contacts } from '@/shared/config/contacts';

import BurgerIcon from '@/shared/assets/icons/hamburger-btn.svg?react'
import BurgerIconClose from '@/shared/assets/icons/hamburger-btn-close.svg?react'

import cls from './Header.module.scss'

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

export { MobileMenu };
