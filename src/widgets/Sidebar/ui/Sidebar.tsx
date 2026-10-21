import { ContactsList } from '@/shared/ui/ContactsList';

import { contacts } from '@/shared/config/contacts';

import cls from './Sidebar.module.scss';

import avatar from '@/shared/assets/avatar.jpg';

export function Sidebar() {

   return (
      <div className={cls.sidebar}>
         <div className={cls.sidebar__section}>
            <div className={cls.sidebar__avatar}>
               <img src={avatar} alt="" />
            </div>
            <div className={cls.sidebar__userName}>Шабанов Александр</div>
            <div className={cls.sidebar__tags}>
               <div className={cls.sidebar__tag}>Веб-разработчик</div>
               <div className={cls.sidebar__tag}>Человек</div>
               <div className={cls.sidebar__tag}>Junior</div>
               <div className={cls.sidebar__tag}>Дизайнер</div>
            </div>
         </div>
         <div className={cls.sidebar__section}>
            <ContactsList contactsList={[contacts.email, contacts.github, contacts.telegram, contacts.phone]} />
         </div>
      </div>
   )
}
