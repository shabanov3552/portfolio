import MailIcon from '@/shared/assets/icons/mail.svg?react';
import PhoneIcon from '@/shared/assets/icons/phone.svg?react';
import TelegramIcon from '@/shared/assets/icons/telegram.svg?react';
import GitHubIcon from '@/shared/assets/icons/github.svg?react';

export const contacts = {
   email: {
      label: 'Почта',
      value: 'shaban4@yandex.ru',
      href: 'mailto:shaban4@yandex.ru',
      iconNode: { icon: MailIcon, iconClassName: 'mail' },
   },
   github: {
      label: 'Github',
      value: '@shabanov3552',
      href: 'https://github.com/shabanov3552',
      iconNode: { icon: GitHubIcon, iconClassName: 'github' },
   },
   telegram: {
      label: 'Telegram',
      value: '@alshabanov',
      href: 'https://t.me/alshabanov',
      iconNode: { icon: TelegramIcon, iconClassName: 'telegram' },
   },
   phone: {
      label: 'Телефон',
      value: '8-908-208-75-87',
      href: 'tel:89082087587',
      iconNode: { icon: PhoneIcon, iconClassName: 'phone' },
   },
};
