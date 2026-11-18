
import { useMediaQuery } from '@/shared/lib/hooks';
import { Link } from 'react-router';

import { Menu } from './Menu';
import { MobileMenu } from './MobileMenu';

import GitHubIcon from '@/shared/assets/icons/github.svg?react'
import avatar from '@/shared/assets/pixel-avatar.png';

import cls from './Header.module.scss';

function Header() {
   const isMobile = useMediaQuery('(max-width: 991.98px)');

   return (
      <header className={cls.header}>
         <Link to="/" className={cls.header__logo}>
            {isMobile ? <Avatar /> : null}
            al.<span>dev</span>
         </Link>

         {!isMobile ? <Menu /> : null}

         <a href="https://github.com/shabanov3552" target='_blank' className={cls.header__githubLink}><GitHubIcon /></a>

         {isMobile ? <MobileMenu /> : null}
      </header>
   )
}
function Avatar() {
   return (
      <div className={cls.avatar}>
         <img src={avatar} alt="" />
      </div>
   )
}
export { Header }
