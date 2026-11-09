
import { useMediaQuery } from '@/shared/lib/hooks';

import { Menu } from './Menu';
import { MobileMenu } from './MobileMenu';

import GitHubIcon from '@/shared/assets/icons/github.svg?react'

import cls from './Header.module.scss';

function Header() {
   const isMobile = useMediaQuery('(max-width: 991.98px)');

   return (
      <header className={cls.header}>
         <a href="/" className={cls.header__logo}>SHABAN<span>OV</span></a>

         {!isMobile ? <Menu /> : null}

         <a href="https://github.com/shabanov3552" target='_blank' className={cls.header__githubLink}><GitHubIcon /></a>

         {isMobile ? <MobileMenu /> : null}
      </header>
   )
}

export { Header }
