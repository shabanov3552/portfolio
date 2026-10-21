import type { ComponentType, SVGProps } from 'react';
import cls from './ContactsList.module.scss';

type IconNode = {
   iconClassName: string;
   icon: ComponentType<SVGProps<SVGSVGElement>>;
}

type ContactItem = {
   label: string;
   value: string;
   href: string;
   iconNode: IconNode;
};

type ContactsListProps = {
   contactsList: ContactItem[];
   modifierClass?: string;
};

export function ContactsList({ contactsList, modifierClass }: ContactsListProps) {

   return (
      <div className={[cls['contacts-list'], modifierClass].filter(Boolean).join(' ')}>
         {contactsList.map((item) => {
            const { label, value, href, iconNode } = item;

            const { iconClassName, icon: Icon } = iconNode;

            return (
               <div className={cls['contacts-list__item']} key={href}>
                  <span className={cls['contacts-list__icon']}><Icon className={cls[iconClassName]} /></span>
                  <div className={cls['contacts-list__label']}>{label}</div>
                  <a href={href} className={cls['contacts-list__link']}>{value}</a>
               </div>
            )
         })}
      </div>
   )
}
